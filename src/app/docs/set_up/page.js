"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { Download, Copy, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SetUp() {
    const [activeTab, setActiveTab] = useState("pip")
    const [copied, setCopied] = useState("");

    const copyToClipboard = () => {
        navigator.clipboard.writeText(codeText);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    useEffect(() => {
        document.title = "Set Up | MuffinBite"
    })

    return (
        <>
            <div>
                <h2 className="text-2xl font-bold">Set Up</h2>
                <p className="ml-5 my-2"> MuffinBite offers more setup options than there are ways to use it, you can <strong>download MuffinBite</strong>, <strong>install it via pip</strong>, or <strong>clone the repository</strong>. </p>
                <Tabs className="mt-6" value={activeTab} onValueChange={setActiveTab}>
                    <div className="relative w-1/2">
                        <TabsList className="relative flex w-full bg-transparent rounded-full overflow-hidden">
                            {/* Animated slider */}
                            <motion.div
                                layoutId="slider"
                                className="absolute top-[2px] left-[2px] h-[calc(100%-4px)] w-[calc(50%-4px)] bg-white/30 rounded-full"
                                animate={{
                                    x:
                                        activeTab === "pip" ? "0%" :
                                            "100%"
                                }}
                                transition={{ type: "spring", stiffness: 250, damping: 25 }}
                            />

                            <TabsTrigger
                                value="pip"
                                className="relative z-10 flex-1 text-center text-white py-2 font-medium cursor-pointer rounded-full data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-white"
                            >
                                pip install
                            </TabsTrigger>
                            <TabsTrigger
                                value="clone"
                                className="relative z-10 flex-1 text-center text-white py-2 font-medium cursor-pointer rounded-full data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-white"
                            >
                                Clone repository
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent className="mx-5 overflow-y-auto element font-bold" value="pip" >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key="pip"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                            >
                                <div className="mt-4 space-y-4">
                                    <p>
                                        If you like your MuffinBite with a side of Python, this method is your jam. <br /><br />
                                        1. Create a folder with whatever name you like and wherever you like
                                    </p>
                                    <p>
                                        2. Create a python virtual environment in that folder, and activate it.
                                    </p>
                                    <p className="flex flex-col">
                                        3. Now, install MuffinBite using pip.
                                        <span className="inline-block mx-5 my-2 relative bg-black/50 rounded-xl p-4 font-mono text-sm text-white/90 shadow-inner overflow-x-auto">
                                            <button
                                                onClick={copyToClipboard}
                                                className="absolute top-3 right-3 px-2 py-1 rounded-md text-xs transition"
                                            >
                                                {copied ? <span className="text-green-500">Copied!</span> : <Copy className="h-4 w-4" />}
                                            </button>
                                            <code onClick={copyToClipboard} className="whitespace-pre-wrap block">pip install muffinbite</code>
                                        </span>
                                    </p>
                                    <p>
                                        4. Move the &quot;credentials.json&quot; file to this folder, that you downloaded in the requirements step.
                                    </p>
                                    <p className="flex flex-col">
                                        5. Now, run MuffinBite using the command below.
                                        <span className="inline-block mx-5 my-2 relative bg-black/50 rounded-xl p-4 font-mono text-sm text-white/90 shadow-inner overflow-x-auto">
                                            <button
                                                onClick={copyToClipboard}
                                                className="absolute top-3 right-3 px-2 py-1 rounded-md text-xs transition"
                                            >
                                                {copied ? <span className="text-green-500">Copied!</span> : <Copy className="h-4 w-4" />}
                                            </button>
                                            <code onClick={copyToClipboard} className="whitespace-pre-wrap block">{`(environment) shivansh@shivansh:~/Desktop/all_codes/tryMuffinBite$ bite 
bite>`} </code>
                                        </span>
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </TabsContent>
                    <TabsContent className="mx-5 overflow-y-auto element font-bold" value="clone">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key="clone"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                            >
                                <div className="mt-4 space-y-4">
                                    <p>
                                        For code adventurers ready to explore MuffinBite’s inner workings, this is your map.<br /><br />
                                        1. First things first, clone the repository using the command below.
                                    </p>
                                    <p className="flex flex-col">
                                        <span className="inline-block mx-5 my-2 relative bg-black/50 rounded-xl p-4 font-mono text-sm text-white/90 shadow-inner overflow-x-auto">
                                            <button
                                                onClick={copyToClipboard}
                                                className="absolute top-3 right-3 px-2 py-1 rounded-md text-xs transition"
                                            >
                                                {copied ? <span className="text-green-500">Copied!</span> : <Copy className="h-4 w-4" />}
                                            </button>
                                            <code onClick={copyToClipboard} className="whitespace-pre-wrap block">git clone https://github.com/Shivansh-varshney/MuffinBite.git</code>
                                        </span>
                                        <span className="ml-5">OR</span>
                                        <span className="inline-block mx-5 my-2 relative bg-black/50 rounded-xl p-4 font-mono text-sm text-white/90 shadow-inner overflow-x-auto">
                                            <button
                                                onClick={copyToClipboard}
                                                className="absolute top-3 right-3 px-2 py-1 rounded-md text-xs transition"
                                            >
                                                {copied ? <span className="text-green-500">Copied!</span> : <Copy className="h-4 w-4" />}
                                            </button>
                                            <code onClick={copyToClipboard} className="whitespace-pre-wrap block">git clone git@github.com:Shivansh-varshney/MuffinBite.git</code>
                                        </span>
                                    </p>
                                    <p>
                                        2. Make a separate folder, create virtual environment and activate it.

                                    </p>
                                    <p className="flex flex-col">
                                        3. Now, install the clone project using pip in editable mode.
                                        <span className="inline-block mx-5 my-2 relative bg-black/50 rounded-xl p-4 font-mono text-sm text-white/90 shadow-inner overflow-x-auto">
                                            <button
                                                onClick={copyToClipboard}
                                                className="absolute top-3 right-3 px-2 py-1 rounded-md text-xs transition"
                                            >
                                                {copied ? <span className="text-green-500">Copied!</span> : <Copy className="h-4 w-4" />}
                                            </button>
                                            <code onClick={copyToClipboard} className="whitespace-pre-wrap block">pip install -e /path/to/the/clone/folder</code>
                                        </span>
                                    </p>
                                    <p>
                                        4. Move the &quot;credentials.json&quot; file to this folder, that you downloaded in the requirements step.
                                    </p>
                                    <p className="flex flex-col">
                                        5. Now, run MuffinBite using the command below.
                                        <span className="inline-block mx-5 my-2 relative bg-black/50 rounded-xl p-4 font-mono text-sm text-white/90 shadow-inner overflow-x-auto">
                                            <button
                                                onClick={copyToClipboard}
                                                className="absolute top-3 right-3 px-2 py-1 rounded-md text-xs transition"
                                            >
                                                {copied ? <span className="text-green-500">Copied!</span> : <Copy className="h-4 w-4" />}
                                            </button>
                                            <code onClick={copyToClipboard} className="whitespace-pre-wrap block">{`(environment) shivansh@shivansh:~/Desktop/all_codes/tryMuffinBite$ bite 
bite>`} </code>
                                        </span>
                                    </p>

                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </TabsContent>
                    <div className="ml-5 mt-4 space-y-4 font-bold">
                        <p className="flex flex-col">
                            6. Enter &quot;build&quot; to complete the set-up.
                            <span className="inline-block mx-5 my-2 relative bg-black/50 rounded-xl p-4 font-mono text-sm text-white/90 shadow-inner overflow-x-auto">
                                <button
                                    onClick={copyToClipboard}
                                    className="absolute top-3 right-3 px-2 py-1 rounded-md text-xs transition"
                                >
                                    {copied ? <span className="text-green-500">Copied!</span> : <Copy className="h-4 w-4" />}
                                </button>
                                <code onClick={copyToClipboard} className="whitespace-pre-wrap block">{`bite> build

Checking for directories...

    Created: Attachments
    Created: DataFiles
    Created: EmailStatus
    Created: Templates
    Created: Campaigns

Let's set up your MuffinBite user info:

Enter your name: Shivansh
Enter your email: shivanshvarshney45@gmail.com

Choose your email provider:
  1. Gmail (uses OAuth token)
  2. Other SMTP service
Provider (1 or 2): 1

Gmail token will be generated separately via OAuth flow.

User configuration saved successfully!

Setup completed successfully !!

bite>
`} </code>
                            </span>
                        </p>
                        <strong>Note:</strong>
                        <ol className="ml-5 space-x-4 list-inside list-decimal">
                            <li>
                                Enter the name and email you want to use to send emails.
                            </li>
                            <li>
                                You must be logged-in on your browser with the email that you want to use.
                            </li>
                        </ol>
                        <p className="font-bold text-lg">
                            After the output says &quot;Setup completed successfully !!&quot;, you can move ahead to create campaigns, and send emails.
                        </p>
                    </div>
                </Tabs>
            </div>
            <div className="mt-5 flex justify-between w-full">
                <Link href="/docs/requirements"><span className="flex items-center justify-center gap-2"><ArrowLeft size={20} />Requirements</span> </Link>
                <Link href="/docs/use"><span className="flex items-center justify-center gap-2">Examples<ArrowRight size={20} /></span> </Link>
            </div>
        </>
    )
}