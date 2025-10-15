"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Tabs, TabsTrigger, TabsList, TabsContent } from "@/components/ui/tabs"
import { ExternalLink, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Requirements() {
    const [activeTab, setActiveTab] = useState("google");

    useEffect(() => {
        document.title = "Requirements | MuffinBite"
    })
    return (
        <>
            <div>
                <h2 className="text-2xl font-bold">Requirements</h2>
                <p className="ml-5 my-2">
                    Currently, MuffinBite supports two methods for sending emails — either through the <strong>Gmail API</strong> or via <strong>SMTP service providers</strong>.
                </p>
                <p className="ml-5">
                    Each method has a few setup requirements. You can easily meet these by following the mini tutorials provided below.
                </p>
            </div>

            <Tabs className="mt-4" value={activeTab} onValueChange={setActiveTab}>
                <div className="relative w-1/2">
                    <TabsList className="relative flex w-full bg-transparent rounded-full overflow-hidden">
                        {/* Animated slider */}
                        <motion.div
                            layoutId="slider"
                            className="absolute top-[2px] left-[2px] h-[calc(100%-4px)] w-[calc(50%-4px)] bg-white/30 rounded-full"
                            animate={{
                                x: activeTab === "google" ? "0%" : "100%",
                            }}
                            transition={{ type: "spring", stiffness: 250, damping: 25 }}
                        />

                        {/* Tabs */}
                        <TabsTrigger
                            value="google"
                            className="relative z-10 flex-1 text-center text-white py-2 font-medium cursor-pointer rounded-full data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-white"
                        >
                            Using Gmail API (recommended)
                        </TabsTrigger>

                        <TabsTrigger
                            value="smtp"
                            className="relative z-10 flex-1 text-center text-white py-2 font-medium cursor-pointer rounded-full data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-white"
                        >
                            Using SMTP Service Provider
                        </TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent className="mx-5 overflow-y-auto" value="google">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key="google"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                            <h2 className="flex gap-1">
                                To use Google Gmail, you’ll need to download the <strong>Gmail API client file</strong> from{" "}
                                <a
                                    className="flex items-center gap-1 !underline !underline-offset-2 text-blue-400 hover:text-blue-300 transition"
                                    href="https://cloud.google.com/"
                                    target="_blank"
                                >
                                    Google Cloud Console
                                    <ExternalLink size={14} />
                                </a>.
                            </h2>

                            <h2 className="mt-4">Download the file using the steps below:</h2>

                            <div className="mt-5">
                                <ol className="text-lg list-inside font-bold space-y-5">
                                    <li>
                                        Step 1: Create a project and select it to use on Google Console.
                                        <div className="mt-3 ml-5">
                                            <span className="font-bold">Note:</span><br />
                                            <span className="ml-3 font-bold">1. You can use any google account of your choice, but we suggest to use the least important one.</span>
                                        </div>
                                        <Image width={200} height={100} alt="" src="/demos/make_project.gif" className="ml-5 w-1/2 my-2 rounded-lg shadow-md" />
                                    </li>
                                    <li>
                                        Step 2: Search for <strong>&quot;Gmail API&quot;</strong>.
                                        <Image width={200} height={100} alt="" src="/demos/search_gmail.GIF" className="ml-5 w-1/2 my-2 rounded-lg shadow-md" />
                                    </li>
                                    <li>
                                        Step 3: Download the <strong>credentials file</strong>.
                                        <Image width={200} height={100} alt="" src="/demos/credentials.GIF" className="ml-5 w-1/2 my-2 rounded-lg shadow-md" />
                                        <div className="mt-3 ml-5">
                                            <span className="font-bold">Note:</span><br />
                                            <span className="ml-3 font-bold">1. Rename the downloaded file to <code>credentials.json</code>.</span><br />
                                            <span className="ml-3 font-bold">2. Enter your primary email in the “User support email” and “Developer contact information” fields.</span>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </TabsContent>
                <TabsContent className="mx-5 overflow-y-auto" value="smtp">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key="smtp"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                            <h2>
                                To use SMTP Service Provider, you’ll need <strong>SERVER, PORT, USERNAME/LOGIN, PASSWORD</strong> from a provider.
                            </h2>
                            <h2 className="flex gap-1">
                                Example below uses <a href="https://app.brevo.com/" className="flex items-center gap-1 underline text-blue-400">Brevo <ExternalLink size={14} /></a>,
                                but you can use any provider that gives you these four credentials.
                            </h2>
                            <Image alt="" width={100} height={100} src="/demos/brevo.GIF" className="w-1/2 ml-5 my-2" />

                        </motion.div></AnimatePresence>
                </TabsContent>
            </Tabs>
            <div className="mt-5 flex justify-between w-full">
                <Link href="/docs/introduction"><span className="flex items-center justify-center gap-2"><ArrowLeft size={20} />Introduction</span> </Link>
                <Link href="/docs/set_up"><span className="flex items-center justify-center gap-2">Set Up<ArrowRight size={20} /></span> </Link>
            </div>
        </>
    )
}