"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Tabs, TabsTrigger, TabsList, TabsContent } from "@/components/ui/tabs"
import { ExternalLink, ArrowRight, ArrowLeft, Dot, Circle, CircleDot, CircleIcon, Disc, Disc2, Disc2Icon, Disc3, DiscAlbum } from "lucide-react";
import Link from "next/link";

export default function RequirementsComponent() {
    const [activeTab, setActiveTab] = useState("google");

    return (
        <>
            <div>
                <h2 className="text-2xl font-bold">Requirements</h2>
                <div className="md:ml-5 md:my-2">
                    <p>
                        Currently, MuffinBite supports two methods for sending emails, either through the <strong>Gmail API</strong> or via <strong>SMTP service providers</strong>.
                    </p>
                    <p>
                        Each method has a few setup requirements. You can easily meet these by following the mini tutorials provided below.
                    </p>
                    <p className="md:flex items-center my-2 font-bold text-lg">
                        <Disc size={12} className="inline mr-2" />
                        The first requirement is that Python must be installed on your system. You can download Python (version {">=3.10, <3.13"}) from <a href="https://www.python.org/downloads/" target="_blank" className="flex items-center ml-1 !underline text-yellow-400 hover:text-yellow-300 inline">here<ExternalLink size={14} className="ml-1 inline" /></a>.
                    </p>
                </div>
            </div>

            <Tabs className="mt-4" value={activeTab} onValueChange={setActiveTab}>
                <div className="md:hidden relative">
                    <TabsList className="relative md:flex w-full bg-transparent rounded-full overflow-hidden">
                        {/* Animated slider */}
                        <motion.div
                            layoutId="slider"
                            className="absolute top-[2px] -left-[4px] md:left-[2px] h-[calc(100%-4px)] w-[calc(50%-4px)] md:h-[calc(100%-4px)] w-[calc(50%-4px)] bg-black/30 rounded-full"
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
                            Using Gmail
                        </TabsTrigger>

                        <TabsTrigger
                            value="smtp"
                            className="relative z-10 flex-1 text-center text-white py-2 font-medium cursor-pointer rounded-full data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-white"
                        >
                            Using SMTP
                        </TabsTrigger>
                    </TabsList>
                </div>
                <div className="hidden md:block relative">
                    <TabsList className="relative md:flex w-full bg-transparent rounded-full overflow-hidden">
                        {/* Animated slider */}
                        <motion.div
                            layoutId="slider"
                            className="absolute top-[2px] -left-[4px] md:left-[2px] h-[calc(100%-4px)] w-[calc(50%-4px)] md:h-[calc(100%-4px)] w-[calc(50%-4px)] bg-black/30 rounded-full"
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
                            Using Gmail API (Recommended)
                        </TabsTrigger>

                        <TabsTrigger
                            value="smtp"
                            className="relative z-10 flex-1 text-center text-white py-2 font-medium cursor-pointer rounded-full data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-white"
                        >
                            Using SMTP Service Provider
                        </TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent className="md:mx-5 overflow-y-auto element" value="google">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key="google"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                            <h2 className="md:flex gap-1">
                                To use Google Gmail, you’ll need to download the <strong>Gmail API client file</strong> from{" "}
                                <a
                                    className="flex items-center mr-1 inline !underline !underline-offset-2 text-yellow-400 hover:text-yellow-300 transition"
                                    href="https://cloud.google.com/"
                                    target="_blank"
                                >
                                    Google Cloud Console
                                    <ExternalLink size={14} className="inline ml-1" />
                                </a>.
                            </h2>

                            <h2 className="mt-2">Download the file using the steps below:</h2>

                            <div className="mt-3">
                                <ol className="text-lg list-inside font-bold space-y-5">
                                    <li>
                                        Step 1: Create a project and select it to use on Google Console.
                                        <div className="md:mt-3 md:ml-5">
                                            <span className="font-bold">Note:</span><br />
                                            <span className="ml-3 font-bold">1. You can use any google account of your choice, but we suggest to use the least important one.</span>
                                        </div>
                                        <Image width={200} height={100} alt="" src="/demos/make_project.gif" className="md:ml-5 w-lg md:w-1/2 my-2 rounded-lg shadow-lg" />
                                    </li>
                                    <li>
                                        Step 2: Search for <strong>&quot;Gmail API&quot;</strong>.
                                        <Image width={200} height={100} alt="" src="/demos/search_gmail.GIF" className="md:ml-5 w-lg md:w-1/2 my-2 rounded-lg shadow-lg" />
                                    </li>
                                    <li>
                                        Step 3: Download the <strong>credentials file</strong>.
                                        <Image width={200} height={100} alt="" src="/demos/credentials.GIF" className="md:ml-5 w-lg md:w-1/2 my-2 rounded-lg shadow-lg" />
                                        <div className="md:mt-3 md:ml-5">
                                            <span className="font-bold">Note:</span><br />
                                            <span className="md:ml-3 font-bold">1. Rename the downloaded file to <code>credentials.json</code>.</span><br />
                                            <span className="md:ml-3 font-bold">2. Enter your primary email in the “User support email” and “Developer contact information” fields.</span>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </TabsContent>
                <TabsContent className="md:mx-5 overflow-y-auto element" value="smtp">
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
                            <h2 className="md:flex gap-1 ">
                                Example below uses <a href="https://app.brevo.com/" className="flex items-center gap-1 !underline text-yellow-400 inline">Brevo <ExternalLink size={14} className="inline" /></a>,
                                but you can use any provider that gives you these four credentials.
                            </h2>
                            <Image alt="" width={100} height={100} src="/demos/brevo.GIF" className="w-lg md:w-1/2 md:ml-5 md:my-2" />

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