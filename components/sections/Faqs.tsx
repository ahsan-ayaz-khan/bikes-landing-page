"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const faqs = [
    {
        question: "What types of bikes do you offer?",
        answer:
            "We offer a wide range of premium bikes including street bikes, sport bikes, cruisers, and trail bikes. Each model is crafted for performance, style, and durability.",
    },
    {
        question: "Do you offer test rides before purchase?",
        answer:
            "Yes! We encourage all customers to test ride our bikes before making a purchase. Visit any of our showrooms to schedule a test ride with one of our expert staff.",
    },
    {
        question: "What payment methods do you accept?",
        answer:
            "We accept all major credit cards, bank transfers, and flexible financing options. Contact our team for more details on monthly payment plans.",
    },
    {
        question: "Is there a warranty on your bikes?",
        answer:
            "All our bikes come with a comprehensive 2-year manufacturer warranty covering parts and labor. Extended warranty options are also available.",
    },
    {
        question: "How can I contact customer support?",
        answer:
            "Our customer support team is available Monday–Friday, 9am–6pm. You can reach us via email, phone, or through the contact form on our website.",
    },
];

export default function Faqs() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section
            id="faqs"
            className="px-6 py-24"
            style={{ backgroundColor: "#14121F" }}
        >
            <div className="mx-auto max-w-3xl">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">
                        Frequently asked questions
                    </h2>
                    <p className="text-lg text-white/60">
                        Find answers to common questions about our bikes, services, and
                        more.
                    </p>
                </div>

                {/* Accordion */}
                <div className="divide-y divide-white/10 border-t border-white/10">
                    {faqs.map((faq, i) => (
                        <div key={i}>
                            <button
                                onClick={() => toggle(i)}
                                className="flex cursor-pointer w-full items-center justify-between py-5 text-left"
                            >
                                <span className="text-lg text-white/80">{faq.question}</span>
                                <svg
                                    className={`ml-4 h-5 w-5 flex-shrink-0 text-white/50 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""
                                        }`}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </button>
                            {openIndex === i && (
                                <div className="pb-5 text-sm leading-relaxed text-white/50">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Still have questions */}
                <div className="mt-20 text-center">
                    <h3 className="mb-8 text-3xl font-bold text-white">
                        Still have questions?
                    </h3>
                    <p className="mb-8 text-lg text-white/60">
                        Support details to capture customers that might be on the fence.
                    </p>
                    <Button variant="outline">Contact</Button>
                </div>
            </div>
        </section>
    );
}
