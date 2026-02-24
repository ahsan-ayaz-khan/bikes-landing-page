import Image from "next/image";

const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Faqs", href: "#faqs" },
];

const socialLinks = [
    {
        name: "Facebook",
        href: "#",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
        ),
    },
    {
        name: "Instagram",
        href: "#",
        icon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
            >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
    {
        name: "X",
        href: "#",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        name: "LinkedIn",
        href: "#",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
    },
];

export default function Footer() {
    return (
        <footer
            className="border-t border-white/10 px-6 py-12"
            style={{ backgroundColor: "#14121F" }}
        >
            <div className="mx-auto max-w-7xl">
                {/* Top row */}
                <div className="mb-8 flex flex-col items-center justify-between gap-8 md:flex-row">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2 text-[#E2DDFE]">
                        <Image src="/images/footer-logo.png" alt="Bike Bliss Logo" width={60} height={32} />
                        {/* <svg
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#56468B"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="5.5" cy="17.5" r="3.5" />
                            <circle cx="18.5" cy="17.5" r="3.5" />
                            <path d="M9 17.5l3-9h4l2 5h2" />
                            <path d="M9 8.5l-4 1" />
                            <path d="M18 12.5l2-5" />
                        </svg> */}
                        <span className="text-md font-semibold">Bike Bliss</span>
                    </a>

                    {/* Nav links */}
                    <div className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-md text-white/60 transition-colors hover:text-white"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Social icons */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                aria-label={social.name}
                                className="text-white/50 transition-colors hover:text-white"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bottom row */}
                <div className="border-t border-white/10 pt-8 text-center">
                    <div className="flex flex-wrap items-center justify-center gap-6 text-md text-white/40">
                        <a href="#" className="transition-colors hover:text-white/70">
                            Privacy Policy
                        </a>
                        <a href="#" className="transition-colors hover:text-white/70">
                            Terms of Service
                        </a>
                        <a href="#" className="transition-colors hover:text-white/70">
                            Cookies Settings
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
