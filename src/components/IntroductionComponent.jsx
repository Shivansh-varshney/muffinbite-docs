"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function IntroductionComponent() {

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
                    <p className="md:mx-5 md:my-2 text-white/90 leading-relaxed text-justify text-[15px] mb-4">
                        <strong className="text-white font-semibold">MuffinBite</strong> is a Python-based interactive CLI tool for sending
                        <strong className="text-white font-semibold"> personalized bulk emails</strong> using predefined campaigns and explicit,
                        user-triggered execution. Emails are sent only when a user runs a command in the CLI.

                        <br />

                        MuffinBite does <strong className="text-white font-semibold">not</strong> run background jobs, scheduled tasks,
                        queues, analytics services, or automated workers. There is no implicit execution, hidden automation, or always-on
                        process — every action is initiated intentionally by the user.

                        <br />

                        The tool is designed around a simple, campaign-driven workflow. You create campaigns, attach files, define templates,
                        provide recipient data via CSV or Excel files, and execute email sends directly from your terminal. This model ensures
                        transparency, predictability, and full control over when and how emails are sent.

                        <br />

                        MuffinBite supports both the <strong className="text-white font-semibold">Gmail API</strong> and standard
                        <strong className="text-white font-semibold"> SMTP providers</strong>. This makes it suitable for developers,
                        freelancers, and small teams who prefer local tooling and file-based workflows over hosted dashboards or opaque
                        third-party platforms.
                    </p>
                    <h2 className="text-4xl font-extrabold text-white tracking-tight">Design Philosophy</h2>
                    <p className="md:mx-5 md:my-2 text-white/90 leading-relaxed text-[15px] mb-4">
                        MuffinBite is intentionally designed around a few core principles that shape every feature in the tool.
                    </p>

                    <ul className="md:mx-5 list-disc list-inside space-y-2 text-white/90 text-[15px] leading-relaxed">
                        <li>
                            <strong>Explicit Execution:</strong> MuffinBite never sends emails automatically.
                            Every email is sent only when a user runs a command in the CLI.
                        </li>
                        <li>
                            <strong>No Background Processes:</strong> There are no schedulers, queues, daemons, or workers running in the background.
                            The CLI is the single source of truth.
                        </li>
                        <li>
                            <strong>Local & Transparent:</strong> Campaigns, templates, data files, and logs live on your local machine
                            as plain files that you can inspect and version-control.
                        </li>
                        <li>
                            <strong>Predictable Behavior:</strong> If a feature is not documented, it does not exist.
                            MuffinBite avoids hidden automation and implicit behavior by design.
                        </li>
                    </ul>

                    <h2 className="text-4xl font-extrabold text-white tracking-tight">Features</h2>
                    <div className="mx-5 my-2 flex flex-col md:flex-row justify-between gap-8 mb-4">
                        <ul className="list-disc list-inside space-y-1 text-white/90 text-[15px] leading-relaxed overflow-y-auto element max-h-72 pr-4
                      scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent hover:scrollbar-thumb-white/40 transition-all duration-300">
                            <li>Attach unlimited files of any type</li>
                            <li>Send 500 emails per day using the Gmail API</li>
                            <li>Log successful and failed email attempts to CSV files</li>
                            <li>Personalize email content using CSV/Excel data sources</li>
                            <li>Detailed error logging to file when debug mode is enabled</li>
                            <li>SMTP support for ESPs such as Brevo, Mailgun, Postmark, and others</li>
                            <li>Set a custom time delay between sending emails to avoid spam filters</li>
                        </ul>

                        <ul className="list-disc list-inside space-y-1 text-white/90 text-[15px] leading-relaxed overflow-y-auto element max-h-72 pr-4
                      scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent hover:scrollbar-thumb-white/40 transition-all duration-300">
                            <li>Run shell commands directly from the MuffinBite CLI using “!command”</li>
                            <li>Send 500 HTML template emails per day with embedded images (base64 supported)</li>
                            <li>Insert variables into subject lines and email bodies for dynamic outreach</li>
                            <li>Test mode: send emails using test data before running real campaigns</li>
                            <li>Add custom HTML signatures to all outgoing emails (with enable/disable toggle)</li>
                            <li>Configure all settings (user, provider, debug, delay, signature, etc.) via CLI</li>
                            <li>Create, list, show, and delete campaigns with subject, template, attachments, CC/BCC, etc.</li>
                        </ul>
                    </div>
                    <h2 className="text-4xl font-extrabold text-white tracking-tight">Who MuffinBite Is For</h2>

                    <div className="md:mx-5 md:my-2 grid md:grid-cols-2 gap-6 text-[15px] text-white/90">
                        <div>
                            <h3 className="font-semibold text-white mb-2">Good Fit If You:</h3>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Prefer CLI tools over web dashboards</li>
                                <li>Want full control over when emails are sent</li>
                                <li>Need campaign-based, personalized outreach</li>
                                <li>Work with CSV or Excel recipient data</li>
                                <li>Care about transparency and predictable behavior</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-white mb-2">Not a Good Fit If You:</h3>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Need scheduled or automated email sending</li>
                                <li>Want a hosted web dashboard or analytics UI</li>
                                <li>Expect background jobs or drip campaigns</li>
                                <li>Prefer no-code marketing platforms</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex w-full">
                        <Link href="/docs/requirements" className="ml-auto"><span className="flex items-center justify-center gap-2">Requirements<ArrowRight size={20} /></span> </Link>
                    </div>
                </motion.div>
            </AnimatePresence>
        </>

    )
}