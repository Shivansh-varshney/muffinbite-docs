"use client";
import { cn } from "@/lib/utils";
import Head from "next/head";
import Particles from "@/components/ui/Particles";
import Menu from "@/components/Menu"

export default function RootLayout({ pageTitle, children }) {
    return (
        <div className="flex h-full">
            <Menu />
            <div
                className={cn(
                    "my-5 mr-5 w-full gap-5 backdrop-blur-[10px] bg-white/10 dark:bg-neutral-900/30",
                    "shadow-lg rounded-2xl p-5 pl-8 overflow-y-auto text-justify"
                )}
            >
                {children}
            </div>
        </div>
    )
}