"use client";

import * as React from "react";
import { Mail, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyEmailCardProps {
    email: string;
    label?: string;
    successMessage?: string;
}

export default function CopyEmailCard({
    email,
    label = "Email",
    successMessage = "Copié !"
}: CopyEmailCardProps) {
    const [copied, setCopied] = React.useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy!", err);
        }
    };

    return (
        <button
            onClick={handleCopy}
            className="group flex w-full items-center gap-4 rounded-2xl bg-white/5 border border-white/10 p-4 transition-all hover:bg-white/10 hover:border-cyan-500/50 text-left"
        >
            <div className={cn(
                "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300",
                copied
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-black"
            )}>
                {copied ? <Check className="h-5 w-5" /> : <Mail className="h-5 w-5" />}
            </div>
            <div className="flex flex-col overflow-hidden">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">{label}</span>
                <span className={cn(
                    "truncate font-mono text-sm transition-colors md:text-base",
                    copied ? "text-green-400" : "text-white"
                )}>
                    {copied ? successMessage : email}
                </span>
            </div>
        </button>
    );
}
