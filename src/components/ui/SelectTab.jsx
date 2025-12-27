import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

const codeText = `bite> camp --create
Enter name for the campaign: test
Enter subject line for the email: {{Name}}, welcome to MuffinBite.
Enter template name you want to use: test
Enter attachments, (separated by commas if more than one): sailing_ship.pdf
Enter CC emails, (separated by commas if more than one):
Enter BCC emails, (separated by commas if more than one):
bite>
`
const codeText2 = `Enter CC emails, (separated by commas if more than one): example@domain.com, another.email@example.com
Enter BCC emails, (separated by commas if more than one): example@domain.com, another.email@example.com`

export function Sample() {

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key="sample"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                <p className="sm:ml-5">
                    This example uses two files placed in the <strong>Attachments</strong> directory: <strong>profile.jpg</strong>, and <strong>sailing_ship.pdf</strong>
                    <Image width={200} height={100} alt="" src="/demos/attachments.png" className="w-lg sm:w-1/2 sm:ml-5 my-2" />
                    My email template (inside &quot;Templates&quot; folder with the name &quot;test.html&quot;) looks like below after rendering in browser.
                    <Image width={200} height={100} alt="" src="/demos/email.png" className="w-lg sm:w-1/4 sm:ml-5 my-2" />
                </p>
                <p className="flex flex-col sm:ml-5">
                    Below is the campaign that we will use:
                    <span className="inline-block sm:mx-5 my-2 relative bg-black/50 rounded-lg p-4 font-mono text-sm text-white/90 shadow-inner overflow-x-auto overflow-y-auto">
                        <code className="whitespace-pre-wrap block">
                            {codeText}
                        </code>
                    </span>
                </p>
                <p className="sm:ml-5">
                    The following command sends emails using test data associated with the selected campaign:
                    <Image width={200} height={100} alt="" src="/demos/send_test.png" className="w-lg sm:w-1/2 sm:ml-5 my-2" />
                    Also, you can see the message on the screen, &quot;Please visit this URL to authorize this application&quot;. <br />
                    When using the Gmail API for the first time, Google requires one-time authorization for the configured account. <br />
                    A browser window will open automatically, just visit the site and allow your own application to send the emails on your behalf.
                    <br />
                    <strong>
                        Note:
                    </strong>
                    <br />
                    <span className="ml-5">
                        This is your own application with the name &quot;muffinbite&quot; that you created on your Google Cloud Console, so there&apos;s nothing <br />
                        to worry about it. Just make sure that you keep your &quot;credentials.json&quot; file safe.
                    </span>
                </p>
                <p className="sm:ml-5 my-2">
                    Below you can see that the email has reached the inbox, and {"{{Name}}"} has been replaced with actual name of the recipient.
                    <Image width={200} height={100} alt="" src="/demos/inbox.png" className="w-lg sm:w-1/4 sm:ml-5 mt-2" />
                    <Image width={200} height={100} alt="" src="/demos/inbox2.png" className="w-lg sm:w-1/4 sm:ml-5 " />
                </p>
            </motion.div>
        </AnimatePresence>
    )
}

export function Templates() {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key="templates"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                <div className="text-justified sm:mx-5">
                    <p>
                        MuffinBite uses HTML templates for email content.Templates can be authored manually or generated using external tools.
                    </p>
                    <br />
                    <p>
                        MuffinBite can automatically extract data from each row of your file and insert it into the template, both in the subject line and the email body.
                    </p>
                    <p>
                        Variables are defined using the {"{{ variable }}"} syntax, where the variable name must match a column header in the data file., you have already seen the same happening with the subject line in the sample. Let&apos;s say my data file looks something like:
                    </p>
                    <Image width={600} height={100} alt="" src="/demos/csv.png" className="sm:ml-5 my-2" />
                    <p className="flex flex-col">
                        <span>Then, I can use {"{{Name}}"} in the html template like below:</span>
                        <span className="inline-block sm:mx-5 my-2 relative bg-black/50 rounded-lg p-4 font-mono text-sm text-white/90 shadow-inner overflow-x-auto">
                            <code className="whitespace-pre-wrap block">
                                {`<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <title>Email Template</title>
            <style>
                body {
                    margin: 0;
                    padding: 0;
                    margin-top: 20px;
                    background-color: #f7f7f7;
                    font-family: Arial, sans-serif;
                }
        
                table {
                    border-collapse: collapse;
                }
        
                .content {
                    padding: 20px;
                }
        
                .button a {
                    background-color: #4A90E2;
                    color: #ffffff;
                    padding: 10px 20px;
                    text-decoration: none;
                    border-radius: 4px;
                    display: inline-block;
                }
        
                p {
                    margin: 0 0 10px 0;
                }
            </style>
        </head>
        
        <body>
            <table width="100%" bgcolor="#f7f7f7">
                <tr>
                    <td align="center">
                        <table width="600" bgcolor="#ffffff">
                            <tr>
                                <td align="center" style="padding: 20px;">
                                    <img src="/home/shivansh/Documents/all_codes/tryMuffinBite/Attachments/profile.jpg" alt="Profile Image" width="50%" height="100%"
                                        style="border-radius:10%; display:block; margin-bottom:10px;">
                                    <h2>Hello {{Name}},</h2>
                                </td>
                            </tr>
                            <tr>
                                <td class="content">
                                    <p>We’re thrilled to have you onboard! This email is a sample template you can send via
                                        MuffinBite.</p>
                                    <p>Customize it to include your campaign content, personalized greetings, or offers.</p>
                                    <p class="button" style="text-align:center; margin-top:20px;">
                                        <a href="#">Take Action</a>
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td bgcolor="#f0f0f0" align="center" style="padding: 15px; font-size:12px; color:#888;">
                                    <p>You received this email because you signed up for our service.</p>
                                    <p>&copy; 2025 Your Company Name. All rights reserved.</p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        
        `}
                            </code>
                        </span>
                    </p>
                    <p>
                        Also, to insert the image in my html template, I&apos;ve given the absolute location of the file in the src value of {"<img />"} tag.
                    </p>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export function Campaign() {

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key="campaign"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                <p className="flex flex-col sm:ml-5">
                    We&apos;ll go to our MuffinBite terminal, and get started with creating a campaign.
                    <br /> The command to create a campaign is:
                    <span className="inline-block sm:mx-5 my-2 relative bg-black/50 rounded-lg p-4 font-mono text-sm text-white/90 shadow-inner overflow-x-auto">
                        <code className="whitespace-pre-wrap block">camp --create.</code>
                    </span>
                    Then it will prompt you to enter details as below:
                    <span className="inline-block sm:mx-5 my-2 relative bg-black/50 rounded-lg p-4 font-mono text-sm text-white/90 shadow-inner overflow-x-auto">
                        <code className="whitespace-pre-wrap block">{codeText}</code>
                    </span>
                    Notice how, I&apos;ve added curly braces in the subject line with column `Name`, to personalize the subject line.<br />
                    Also for now, I&apos;ve left the CC and BCC emails as empty, but you can add them like below:
                    <span className="inline-block sm:mx-5 my-2 relative bg-black/50 rounded-lg p-4 font-mono text-sm text-white/90 shadow-inner overflow-x-auto">
                        <code className="whitespace-pre-wrap block">{codeText2}</code>
                    </span>
                </p>
            </motion.div>
        </AnimatePresence>
    )
}

export function SendTest() {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key="test"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                <div className="sm:mx-5">
                    Muffinbite sends emails in two modes: <strong>test</strong> and <strong>real</strong>
                    <ol className="sm:ml-5 list-inside list-decimal">
                        <li>
                            Test Emails: Data that is in files with &apos;test&apos; as prefix in their names is treated as test data (shown in step 1: Templates & Data)
                        </li>
                        <li>
                            Real Emails: Data that is in files without &apos;test&apos; as prefix in their names is treated as real data
                        </li>
                    </ol>
                    <p className="flex flex-col">
                        <span>Below command sends <strong>test emails:</strong></span>
                        <span className="inline-block sm:mx-5 my-2 relative bg-black/50 rounded-lg p-4 font-mono text-sm text-white/90 shadow-inner overflow-x-auto">
                            <code className="whitespace-pre-wrap block">{`bite> send --test
 
Enter the campaign name you want to use: test

Sending emails from: test.csv

      sent to: varshneyshivansh36@gmail.com

All Done !!

bite>
`}
                            </code>
                        </span>
                        <span>
                            The command prompts for a campaign name and sends emails using records marked as test data.
                        </span>
                    </p>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export function SendReal() {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key="real"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                <div className="sm:mx-5">
                    <p>
                        Real data file:
                        <Image alt="" src="/demos/real_data.png" width={600} height={100} className="sm:ml-5 my-2" />
                    </p>
                    <p className="flex flex-col">
                        <span>Below command sends <strong>real emails:</strong></span>
                        <span className="inline-block sm:mx-5 my-2 relative bg-black/50 rounded-lg p-4 font-mono text-sm text-white/90 shadow-inner overflow-x-auto">
                            <code className="whitespace-pre-wrap block">{`bite> send --real
         
Enter the campaign name you want to use: test
        
Sending emails from: real.csv
        
    sent to: 1. tutorial.muffinbite@gmail.com
        
All Done !!
        
bite>
        `}
                            </code>
                        </span>
                        <span>
                            The command prompts for a campaign name and sends emails using records marked as real data.
                        </span>
                    </p>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default function SelectTab() {

    const [step, setStep] = useState("sample")
    return (
        <section>
            <Select>
                <SelectTrigger className="w-full bg-black/30">
                    <SelectValue placeholder={step} />
                </SelectTrigger>
                <SelectContent className="bg-black/30 backdrop-blur-[10px] p-2 border-black/30 text-white">
                    <SelectItem onClick={() => setStep("sample")} value="sample">Sample</SelectItem>
                    <SelectItem onClick={() => setStep("templates")} value="templates">1. Templates</SelectItem>
                    <SelectItem onClick={() => setStep("campaign")} value="campaign">2. Campaign</SelectItem>
                    <SelectItem onClick={() => setStep("test")} value="test">3. Test</SelectItem>
                    <SelectItem onClick={() => setStep("real")} value="real">4. Real</SelectItem>
                </SelectContent>
            </Select>
            <div className="mt-2">
                {step === "sample" && <Sample />}
                {step === "templates" && <Templates />}
                {step === "campaign" && <Campaign />}
                {step === "test" && <SendTest />}
                {step === "real" && <SendReal />}
            </div>
        </section>
    )
}