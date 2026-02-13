"use client";

import * as React from "react";

type RecruiterModeContextValue = {
  enabled: boolean;
  toggle: () => void;
  setEnabled: (value: boolean) => void;
};

const RecruiterModeContext = React.createContext<RecruiterModeContextValue | null>(
  null
);

export function useRecruiterMode() {
  const context = React.useContext(RecruiterModeContext);
  if (!context) {
    throw new Error("useRecruiterMode must be used within RecruiterModeProvider");
  }
  return context;
}

export default function RecruiterModeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [enabled, setEnabled] = React.useState(false);

  React.useEffect(() => {
    const stored = window.localStorage.getItem("recruiter-mode");
    if (stored) {
      setEnabled(stored === "true");
    }
  }, []);

  const toggle = React.useCallback(() => {
    setEnabled((prev) => {
      const next = !prev;
      window.localStorage.setItem("recruiter-mode", String(next));
      return next;
    });
  }, []);

  const value = React.useMemo(
    () => ({ enabled, toggle, setEnabled }),
    [enabled, toggle]
  );

  return (
    <RecruiterModeContext.Provider value={value}>
      {children}
    </RecruiterModeContext.Provider>
  );
}
