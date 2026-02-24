import Button from "@/components/ui/Button";

export default function Cta() {
    return (
        <section
            className="relative overflow-hidden px-6 py-28 text-center"
            style={{
                background:
                    "linear-gradient(135deg, rgb(30 35 64) 0%, rgb(43 25 100) 100%)",
            }}
        >
            {/* Ambient glow */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div
                    className="h-80 w-80 rounded-full blur-[100px]"
                    style={{ backgroundColor: "rgba(86,70,139,0.5)" }}
                />
            </div>

            <div className="relative z-10 mx-auto max-w-3xl">
                <h2 className="mb-8 text-3xl font-bold leading-tight text-white md:text-4xl">
                    Explore our collection and find the perfect bike for you.
                </h2>
                <Button>Get Started!</Button>
            </div>
        </section>
    );
}
