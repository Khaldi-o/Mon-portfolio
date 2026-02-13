"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { useRecruiterMode } from "@/components/recruiter-mode-provider";

export default function RecruiterModeToggle() {
  const t = useTranslations("recruiter");
  const { enabled, toggle } = useRecruiterMode();

  return (
    <Button
      variant={enabled ? "default" : "ghost"}
      size="sm"
      onClick={toggle}
      aria-pressed={enabled}
    >
      {enabled ? t("enabled") : t("disabled")}
    </Button>
  );
}
