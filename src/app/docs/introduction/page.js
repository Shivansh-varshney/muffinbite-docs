"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

export default function Introduction() {

    useEffect(() => {
        document.title = "Introduction | MuffinBite"
    })

    return (
        <>
            <AnimatePresence mode="wait">
                <motion.div
                    key="smtp"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight">Introduction</h2>
                    <p className="mx-5 my-2 text-white/90 leading-relaxed text-justify text-[15px] mb-6">
                        <strong className="text-white font-semibold">MuffinBite</strong> started as a small side project born out of frustration with repetitive email outreach tasks.
                        It was designed to make sending <strong className="text-white font-semibold">personalized bulk emails</strong> effortless, attaching files, and managing campaigns
                        directly from your terminal: fast, clean, and reliable.

                        <br />

                        Over time, MuffinBite grew beyond a simple script into a powerful CLI-based automation tool built with Python.
                        It supports both the <strong className="text-white font-semibold">Gmail API</strong> and any
                        <strong className="text-white font-semibold"> SMTP service provider</strong>, giving you complete flexibility and control over your email campaigns.

                        <br />

                        Today, whether you&apos;re a small business owner, marketer, or developer, MuffinBite empowers you to simplify and scale your email outreach
                        without relying on expensive third-party platforms or worrying about sending limits.
                        What began as a tiny idea, a tool to save time, has grown into a framework that blends <strong className="text-white font-semibold">automation, personalization, and ease-of-use</strong> into one seamless experience.
                    </p>


                    <h2 className="text-4xl font-extrabold text-white tracking-tight">Features</h2>
                    <div className="mx-5 my-2 flex flex-col md:flex-row justify-between gap-8 mb-6">
                        <ul className="list-disc list-inside space-y-1 text-white/90 text-[15px] leading-relaxed overflow-y-auto max-h-72 pr-4
                      scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent hover:scrollbar-thumb-white/40 transition-all duration-300">
                            <li>Attach unlimited files of any type</li>
                            <li>Send bulk emails using the Gmail API</li>
                            <li>Log successful and failed email attempts to CSV files</li>
                            <li>Personalize email content using CSV/Excel data sources</li>
                            <li>Detailed error logging to file when debug mode is enabled</li>
                            <li>SMTP support for ESPs such as Brevo, Mailgun, Postmark, and others</li>
                            <li>Set a custom time delay between sending emails to avoid spam filters</li>
                        </ul>

                        <ul className="list-disc list-inside space-y-1 text-white/90 text-[15px] leading-relaxed overflow-y-auto max-h-72 pr-4
                      scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent hover:scrollbar-thumb-white/40 transition-all duration-300">
                            <li>Run shell commands directly from the MuffinBite CLI using “!command”</li>
                            <li>Send bulk HTML template emails with embedded images (base64 supported)</li>
                            <li>Insert variables into subject lines and email bodies for dynamic outreach</li>
                            <li>Test mode: send emails using test data before running real campaigns</li>
                            <li>Add custom HTML signatures to all outgoing emails (with enable/disable toggle)</li>
                            <li>Configure all settings (user, provider, debug, delay, signature, etc.) via CLI</li>
                            <li>Create, list, show, and delete campaigns with subject, template, attachments, CC/BCC, etc.</li>
                        </ul>
                    </div>

                    <h2 className="text-4xl font-extrabold text-white tracking-tight">Upcoming</h2>
                    <ul className="mx-5 my-2 list-disc list-inside space-y-2 text-white/90 text-[15px] leading-relaxed mb-6 pl-2">
                        <li>Fetch drafts directly from Gmail</li>
                        <li>Google Sheets integration for recipient data</li>
                        <li>Unit Tests support</li>
                    </ul>
                    <div className="flex w-full">
                        <Link href="/docs/requirements" className="ml-auto"><span className="flex items-center justify-center gap-2">Requirements<ArrowRight size={20} /></span> </Link>
                    </div>
                </motion.div>
            </AnimatePresence>
        </>

    )
}