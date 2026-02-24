import Image from "next/image";
import Button from "@/components/ui/Button";

const bikes = [
    {
        name: "StreetRider",
        description: "Embrace the perfect blend of style and performance. Conquer every journey with ease.",
        reversed: false,
        image: "/images/feature1.webp",
    },
    {
        name: "ThunderBolt",
        description: "Unleash the power within. Dominate the streets with unmatched agility and design.",
        reversed: true,
        image: "/images/feature2.webp",
    },
    {
        name: "TrailBlazer",
        description: "Elevate your riding experience. Precision engineering meets unparalleled comfort and control.",
        reversed: false,
        image: "/images/feature3.webp",
    },
];

export default function MainFeature() {
    return (
        <section
            id="features"
            className="px-6 py-24"
            style={{ backgroundColor: "#14121F" }}
        >
            <div className="mx-auto max-w-6xl">
                {/* Section header */}
                <div className="mb-20 text-center">
                    <p className="mb-3 text-sm font-medium" style={{ color: "#56468B" }}>
                        Main feature
                    </p>
                    <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                        Discover The Perfect Ride
                    </h2>
                    <p className="mx-auto max-w-xl text-lg text-white/60">
                        Explore the key features that make our bikes stand out from the
                        crowd.
                    </p>
                </div>

                {/* Bike rows */}
                <div className="flex flex-col gap-24">
                    {bikes.map((bike) => (
                        <div
                            key={bike.name}
                            className={`flex flex-col items-center gap-12 md:flex-row ${bike.reversed ? "md:flex-row-reverse" : ""}`}
                        >
                            {/* Image placeholder */}
                            <div className="w-full md:w-1/2">
                                <Image className="relative z-10" src={bike.image} alt="Bike" width={900} height={503} />
                            </div>

                            {/* Content */}
                            <div className="w-full space-y-4 md:w-1/2">
                                <h3 className="text-2xl font-bold text-white md:text-3xl">
                                    {bike.name}
                                </h3>
                                <p className="max-w-full md:max-w-md text-lg text-white/60">{bike.description}</p>
                                <Button>Buy Now</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
