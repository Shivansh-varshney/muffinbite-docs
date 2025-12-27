"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Menu from "@/components/Menu"

export default function RootLayout({ children }) {
    return (
        <div className="md:flex md:flex-row md:h-full mx-4 md:mx-0">
            <div className="flex items-center justify-between">
                <Menu />
                <Image className="md:hidden rounded-lg" src="/logo-image.png" width={54} height={54} alt="logo" />
            </div>
            <div
                className={cn(
                    "mb-4 md:my-5 md:mr-5 w-full sm:gap-5 backdrop-blur-[10px] bg-black/30 dark:bg-neutral-900/30",
                    "shadow-lg rounded-lg p-3 sm:p-5 overflow-y-auto element sm:text-justify"
                )}
            >
                {children}
            </div>
        </div>
    )
}