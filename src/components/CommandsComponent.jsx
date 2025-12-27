import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function CommandsComponent() {

    const helpOutput = `bite> help

Available MuffinBite commands:

    build - Create the necessary directories and files for the working of the project

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
            config --user-name name                             (resets user name)
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

    Use !<command> for direct shell commands like 'ls', 'clear', 'pwd', etc.

    Shell commands (!command):
    - Uses the system shell
    - Linux/macOS: bash or zsh
    - Windows: cmd.exe or PowerShell
    - Command syntax differs by OS

    Examples:
    Linux/macOS: !ls, !clear
    Windows: !dir, !cls

bite>
`

    return (
        <>
            <h2 className="text-3xl font-bold tracking-tight">Commands</h2>

            <div className="mt-4 space-y-6 text-lg text-gray-200">

                {/* Intro */}
                <p>
                    MuffinBite exposes a small, deliberate set of commands.
                    Each command does one thing clearly and requires explicit user action.
                </p>

                <p>
                    You can view all available commands at any time by typing:
                </p>

                <div className="relative bg-black/50 rounded-xl p-4 font-mono text-sm text-white/90 shadow-inner overflow-x-auto">
                    <code className="whitespace-pre-wrap block">{helpOutput}</code>
                </div>

                {/* build */}
                <section className="space-y-3">
                    <h3 className="text-2xl font-semibold">1. build</h3>
                    <p>
                        Initializes the required folder structure for MuffinBite in the current directory.
                        This command must be run before creating campaigns or sending emails.
                    </p>

                    <div className="bg-black/50 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                        <code className="block whitespace-pre-wrap">
                            {`bite> build

Checking for directories...

    Created: Attachments
    Created: DataFiles
    Created: EmailStatus
    Created: Templates
    Created: Campaigns

Choose your email provider:
  1. Gmail (recommended)
  2. Other SMTP service
Provider (enter 1 or 2): 1

Gmail token will be generated separately via OAuth flow.

User configuration saved successfully!

Setup completed successfully !!

bite>
`}
                        </code>
                    </div>
                </section>

                {/* camp */}
                <section className="space-y-3">
                    <h3 className="text-2xl font-semibold">2. camp</h3>
                    <p>
                        Manages email campaigns. A campaign defines the subject line, template,
                        attachments, and CC/BCC configuration.
                    </p>

                    <div className="bg-black/50 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                        <code className="block whitespace-pre-wrap">
                            {`# Create a campaign
bite> camp --create

# Show campaign details
bite> camp --show welcome_campaign

# List all campaigns
bite> camp --list

# Delete a campaign
bite> camp --delete welcome_campaign`}
                        </code>
                    </div>
                </section>

                {/* send */}
                <section className="space-y-3">
                    <h3 className="text-2xl font-semibold">3. send</h3>
                    <p>
                        Sends emails immediately using the active campaign.
                        MuffinBite does not schedule or queue emails.
                    </p>

                    <div className="bg-black/50 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                        <code className="block whitespace-pre-wrap">
                            {`# Send test emails
bite> send --test

# Send real emails
bite> send --real`}
                        </code>
                    </div>
                </section>

                {/* config */}
                <section className="space-y-4">
                    <h3 className="text-2xl font-semibold">4. config</h3>
                    <p>
                        Configures user identity, provider settings, signatures,
                        debug mode, and email sending behavior.
                    </p>

                    <div className="bg-black/50 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                        <code className="block whitespace-pre-wrap">
                            {`bite> config --user-name "John Doe"
bite> config --user-email john@example.com
bite> config --time-delay 1.5
bite> config --signature "<p>Regards,<br/>John</p>"
bite> config --signature-on
bite> config --show`}
                        </code>
                    </div>

                    <ul className="list-disc list-inside space-y-1 text-base text-gray-300">
                        <li><strong>--user-name</strong>: Display name used in emails</li>
                        <li><strong>--user-email</strong>: Sender email address</li>
                        <li><strong>--time-delay</strong>: Delay between emails (minimum 0.42s)</li>
                        <li><strong>--signature</strong>: Global HTML signature</li>
                        <li><strong>--debug</strong>: Enable detailed error logging</li>
                    </ul>

                    <p className="text-sm text-gray-400">
                        Note: Gmail users do not need to configure SMTP server, login, or port.
                    </p>
                </section>

                {/* reset */}
                <section className="space-y-3">
                    <h3 className="text-2xl font-semibold">5. reset</h3>
                    <p>
                        Deletes the configuration file stored in your system.
                        Use this if you want a clean setup.
                    </p>

                    <div className="bg-black/50 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                        <code className="block whitespace-pre-wrap">
                            {`bite> reset`}
                        </code>
                    </div>
                </section>

                {/* exit */}
                <section className="space-y-3">
                    <h3 className="text-2xl font-semibold">6. exit</h3>
                    <p>
                        Exits the MuffinBite CLI.
                    </p>

                    <div className="bg-black/50 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                        <code className="block whitespace-pre-wrap">
                            {`bite> exit`}
                        </code>
                    </div>
                </section>

                {/* shell */}
                <section className="space-y-3">
                    <h3 className="text-2xl font-semibold">Shell Commands (!command)</h3>
                    <p>
                        You can execute system shell commands directly from the CLI using <code>!</code>.
                        The shell used depends on your operating system.
                    </p>

                    <div className="bg-black/50 rounded-xl p-4 font-mono text-sm overflow-x-auto">
                        <code className="block whitespace-pre-wrap">
                            {`# Linux / macOS
!ls
!clear

# Windows
!dir
!cls`}
                        </code>
                    </div>

                    <p className="text-sm text-gray-400">
                        Command syntax varies by OS. MuffinBite does not translate shell commands.
                    </p>
                </section>
            </div>

            {/* Navigation */}
            <div className="mt-10 flex justify-between w-full text-base">
                <Link href="/docs/use" className="flex items-center gap-2">
                    <ArrowLeft size={18} /> Usage & Examples
                </Link>

                <Link href="/developer" className="flex items-center gap-2">
                    Developer <ArrowRight size={18} />
                </Link>
            </div>
        </>
    )
}
