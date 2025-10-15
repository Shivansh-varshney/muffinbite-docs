import { useState } from "react";
import { cn } from "@/lib/utils"
import { Logo } from "./ui/Logo";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar"
import { Home, Box, Info, Puzzle, Settings, Command, UserCog } from 'lucide-react';

export default function Menu() {

    const [open, setOpen] = useState(false);
    const links = [
        { label: 'Home', href: '/', icon: <Home className="w-5 h-5" color="white" /> },
        { label: 'Introduction', href: '/docs/introduction', icon: <Info className="w-5 h-5" color="white" /> },
        { label: 'Requirements', href: '/docs/requirements', icon: <Box className="w-5 h-5" color="white" /> },
        { label: 'Set up', href: '/docs/set_up', icon: <Settings className="w-5 h-5" color="white" /> },
        { label: 'Examples', href: '/docs/use', icon: <Puzzle className="w-5 h-5" color="white" /> },
        { label: 'Commands', href: '/docs/commands', icon: <Command className="w-5 h-5" color="white" /> },
        { label: 'Developer', href: '/developer', icon: <UserCog className="w-5 h-5" color="white" /> },
    ]

    return (
        <div className="p-5 h-full">
            <Sidebar open={open} setOpen={setOpen} animate={true}>
                <SidebarBody className={cn(
                    "justify-between gap-10 backdrop-blur-[10px] bg-white/10 dark:bg-neutral-900/30",
                    "shadow-lg rounded-2xl"
                )}>
                    <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto gap-4">
                        <Logo />
                        <div className="flex flex-col gap-2">
                            {links.map((link, idx) => (
                                <SidebarLink className={{ opacity: 1 }} key={idx} link={link} />
                            ))}
                        </div>
                    </div>
                </SidebarBody>
            </Sidebar>
        </div>
    )
}