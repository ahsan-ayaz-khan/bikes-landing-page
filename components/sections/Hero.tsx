import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
    return (
        <section
            className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-32 pt-20 text-center"
            style={{ backgroundColor: "#14121F" }}
        >

            <div className="flex w-full max-w-5xl flex-col items-center gap-6">
                <h1 className="text-[60px] font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
                    Ride with passion
                    <br />
                    Ride with us
                </h1>
                <p className="text-lg text-white md:text-lg">
                    Experience the thrill of the open road with our premium selection of bikes.
                </p>
                <Button className="mt-2">Buy Now</Button>

                {/* Hero bike placeholder */}
                <div className="mt-8 w-full max-w-4xl relative z-10">
                    {/* Radial ambient glow */}
                    <div className="pointer-events-none absolute inset-0 bottom-40 flex items-center justify-center">
                        <div
                            className="h-60 w-full rounded-full blur-[100px]"
                            style={{ backgroundColor: "#E2DDFE" }}
                        />
                    </div>
                    <Image className="relative z-10" src="/images/hero.webp" alt="Bike" width={900} height={503} />
                </div>
            </div>
        </section>
    );
}