"use client";
import { Copy } from "lucide-react";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Commands() {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(codeText);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    const codeText = `build - Create the necessary directories and files for the working of the project
camp - Maintains campaign
    Example:
        camp --create                   (creates new campaign)
        camp --show   'campaign_name'   (shows a specific campaign)
        camp --delete 'campaign_name'   (delete a specific campaign)
        camp --list                     (list all the campaigns)
send - Sends emails
    Example:
        send --test (sends emails from test data)
        send --real (sends emails from real data)
config - Configure settings.
    Example:
        config --user-name name                             (resets user email)
        config --user-email firstname.lastname@example.com  (resets the user email)
        config --service-provider-name provider_name        (resets service provider name)
        config --service-provider-server server_address     (resets service provider server address)
        config --service-provider-login login               (resets service provider login ID)
        config --service-provider-port 000                  (resets service provider port number)
        config --signature "<html>"                         (add signature to all the outgoing mails)
        config --signature-on                               (turn signatures ON)
        config --signature-off                              (turn signatures OFF)
        config --time-delay 0.00                            (time gap between two emails)
        config --show                                       (shows the current configurations)
        config --debug True/False                           (switches debug mode for error logs)
exit - Exit the MuffinBite
reset - Deletes the config file
help - Shows all the available commands and their uses
`

    useEffect(() => {
        document.title = "Commands | MuffinBite"
    })

    return (
        <>
            <h2 className="text-2xl font-bold">Commands</h2>
            <div className="text-lg ml-5 my-2 space-y-4">
                <p>Now, let&apos;s take a look at all the available commands:</p>
                <p>On your screen, type &quot;help&quot; and press enter, it will give you the below prompt.</p>
                <div className="mx-5 my-2 relative bg-black/50 rounded-xl p-2 font-mono text-sm text-white/90 shadow-inner overflow-x-auto">
                    <button
                        onClick={copyToClipboard}
                        className="absolute top-3 right-3 px-2 py-1 rounded-md text-xs transition"
                    >
                        {copied ? <span className="text-green-500">Copied!</span> : <Copy className="h-4 w-4" />}
                    </button>
                    <code onClick={copyToClipboard} className="whitespace-pre-wrap block">{codeText}</code>
                </div>
                <p>These are 7 commands in total with their usage and proper examples.</p>
                <p>Up until now, We&apos;ve already seen what, &apos;send&apos;, &apos;build&apos; and, &apos;help&apos; does. Now we&apos;ll see the remaining commands.</p>
                <p className="ml-5">
                    1. &quot;exit&quot;: It will close the MuffinBite CLI and bring you out of the application.
                    <br />
                    2. &quot;reset&quot;: It deletes the current configurations for MuffinBite completely, so you can have a fresh start.
                    <br />
                    3. &quot;camp&quot;: It helps maintain the whole campaign section, create, list, show a particular campaign, or delete one.
                    <br />
                    4. &quot;config&quot;: It helps with manipulating the core authentication and settings configurations.
                </p>
                We will discuss the &quot;config&quot; command with all its flags, as it connects with the center of MuffinBite.
                <ol className="ml-5 list-inside list-decimal space-y-1 text-gray-200">
                    <li><strong>config --user-name &quot;name&quot;</strong>: Sets the display name that appears on sent emails.</li>
                    <li><strong>config --user-email &quot;example@domain.com&quot;</strong>: Updates the email address used for sending. Each new email must be authenticated before use.</li>
                    <li><strong>config --service-provider-name &quot;name&quot;</strong>: Specifies your email service provider (e.g., Google, Outlook, etc.).</li>
                    <li><strong>config --service-provider-server &quot;server_address&quot;</strong>: Defines the SMTP server address provided by your ESP (Email Service Provider).</li>
                    <li><strong>config --service-provider-login &quot;login&quot;</strong>: Sets the login username or unique ID assigned by your ESP.</li>
                    <li><strong>config --service-provider-port 000</strong>: Defines the port number used by your ESP’s SMTP service.</li>
                    <li><strong>config --signature {`"<html>"`}</strong>: Adds a global email signature (in HTML). The same signature is applied to all outgoing campaigns for this account.</li>
                    <li><strong>config --signature-on</strong>: Enables the email signature.</li>
                    <li><strong>config --signature-off</strong>: Disables the email signature.</li>
                    <li><strong>config --time-delay 0.00</strong>: Sets the delay (in seconds) between sending two emails. Must be at least 0.42 seconds.</li>
                    <li><strong>config --show</strong>: Displays the current configuration settings.</li>
                    <li><strong>config --debug True/False</strong>: Toggles debug mode on or off.</li>
                </ol>
                <p>
                    <strong>Note: </strong>
                    <span>If you&apos;re using Google as your service provider, then server, login and port are not required, these are only required with ESPs like brevo.</span>
                </p>
                <span className="font-bold">Below you can see, how I have used each command:</span>
                <p>
                    <span className="inline-block w-full my-2 relative bg-black/50 rounded-xl p-4 font-mono text-sm text-white/90 shadow-inner overflow-x-auto">
                        <code className="whitespace-pre-wrap block">
                            {`bite> config --show

Current MuffinBite Configuration:

[user]
name = Test
email = tutoria.muffinbite@gmail.com

[service_provider]
provider = gmail

[settings]
debug = False
signature = False
time_delay = 0.42

bite> config --user-name Shivansh

Configuration updated successfully !!

bite> config --user-email shivanshvarshney45@gmail.com

Configuration updated successfully !!

bite> config --service-provider-name brevo

Configuration updated successfully !!

bite> config --signature "<h2>Muffinbite, by: Shivansh</h2>"

Configuration updated successfully !!

bite> config --signature-on

Configuration updated successfully !!

bite> config --debug True

Configuration updated successfully !!

bite> config --time-delay 0.32

Time gap can not be less than 0.42 seconds.

Configuration updated successfully !!

bite> config --time-delay 1.00

Configuration updated successfully !!

bite> config --show

Current MuffinBite Configuration:

[user]
name = Shivansh
email = shivanshvarshney45@gmail.com

[service_provider]
provider = brevo

[settings]
debug = True
signature = True
time_delay = 1.00

bite>
`}
                        </code>
                    </span>
                </p>
            </div>
            <div className="mt-5 flex justify-between w-full">
                <Link href="/docs/use"><span className="flex items-center justify-center gap-2"><ArrowLeft size={20} />Examples</span> </Link>
                <Link href="/developer"><span className="flex items-center justify-center gap-2">Developer<ArrowRight size={20} /></span> </Link>
            </div>
        </>
    )
}