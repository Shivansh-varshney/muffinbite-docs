"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Image from "next/image";
import Particles from "@/components/ui/Particles";
import NavBar from "@/components/NavBar";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Contact } from "lucide-react";

export default function Developer() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ email: "", message: "" });
    const [status, setStatus] = useState("");

    useEffect(() => {
        document.title = "Developer | MuffinBite";
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        try {
            const response = await fetch("https://formspree.io/f/mdkwylqp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setStatus("Message sent successfully!");
                setFormData({ email: "", message: "" });
                setTimeout(() => setIsModalOpen(false), 1500);
            } else {
                console.log(response)
                setStatus("Something went wrong. Please try again.");
            }
        } catch {
            setStatus("Network error. Please try again.");
        }
    };

    return (
        <>
            <Particles>
                <div className="flex items-center justify-center h-full">
                    <div className="absolute top-[1em]">
                        <NavBar
                            items={[
                                { label: 'Home', href: '/' },
                                { label: 'Docs', href: '/docs/introduction' },
                                { label: 'Download', href: '/docs/set_up' },
                                { label: 'Examples', href: '/docs/use' },
                            ]}
                        />
                    </div>

                    {/* Card */}
                    <div
                        className={cn(
                            "backdrop-blur-[10px] bg-white/10 dark:bg-neutral-900/30",
                            "shadow-lg rounded-2xl",
                            "flex items-center justify-center gap-10 p-10 mx-50"
                        )}
                    >
                        <Image
                            src="/profile.jpg"
                            alt="Shivansh Varshney"
                            className="rounded-lg shadow-lg"
                            width={400}
                            height={150}
                            priority
                        />

                        {/* Info */}
                        <div className="max-w-xl">
                            <h2 className="text-3xl font-bold">Shivansh Varshney</h2>
                            <p className="my-2 text-gray-400 text-sm">
                                <span className="font-semibold text-white">Full-Stack Developer</span> {"{ Python & JavaScript }"}
                            </p>

                            <p className="mt-4 leading-relaxed text-gray-300">
                                Passionate about building tools that blend simplicity with power.
                                MuffinBite started as a side project to make outreach smarter,
                                cleaner, and faster — now it’s evolving into a full automation framework.
                            </p>

                            <div className="mt-6 flex justify-center md:justify-start gap-4">
                                <a
                                    href="https://github.com/Shivansh-varshney"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-md transition"
                                >
                                    <Github className="w-4 h-4" />
                                    GitHub
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/shivansh-varshney/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-md transition"
                                >
                                    <Linkedin className="w-4 h-4" />
                                    LinkedIn
                                </a>

                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-md transition"
                                >
                                    <Contact className="w-4 h-4" />
                                    Contact
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Modal */}   
                <AnimatePresence>
                    {isModalOpen && (
                        <div className="fixed inset-0 font-bold flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
                            <motion.div
                                initial={{ y: -100, opacity: 0, scale: 0.95 }}
                                animate={{ y: 0, opacity: 1, scale: 1 }}
                                exit={{ y: -100, opacity: 0, scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 120, damping: 15 }}
                                className="bg-white/30 p-6 rounded-xl shadow-lg w-96 relative"
                            >
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="absolute top-2 right-3 text-gray-400 hover:text-gray-200"
                                >
                                    ✕
                                </button>

                                <h3 className="text-lg font-semibold mb-3 text-center">Send a Message</h3>

                                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="p-2 rounded-md text-white placeholder-white focus:outline-none"
                                    />
                                    <textarea
                                        name="message"
                                        placeholder="Your message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="p-2 rounded-md text-white placeholder-white focus:outline-none min-h-[100px]"
                                    />
                                    <button
                                        type="submit"
                                        className="mt-2 py-2 bg-white/10 hover:bg-white/20 text-white rounded-md transition"
                                    >
                                        Send
                                    </button>
                                </form>

                                {status && (
                                    <p className="text-center text-sm mt-2 text-white">{status}</p>
                                )}
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

            </Particles>
        </>
    );
}
