"use client";

import { useState, useEffect } from "react";
// import Image from "next/image";
import { getWeather, type WeatherData } from "@/app/api/getWeather";
import Button from "@/components/ui/Button";

export default function Header() {
    const [weather, setWeather] = useState<WeatherData | null>(null);

    // fetch weather on component mount
    useEffect(() => {
        const load = async (lat: number, lon: number) => {
            try {
                setWeather(await getWeather(lat, lon));
            } catch {
                // Weather is non-critical — fail silently
            }
        };

        if (typeof navigator !== "undefined" && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => load(pos.coords.latitude, pos.coords.longitude),
                () => load(40.7128, -74.006) // Fallback: New York
            );
        } else {
            load(40.7128, -74.006);
        }
    }, []);

    /* ------------------------------------------------------------------------------------------ */
    /*                                              X                                             */
    /* ------------------------------------------------------------------------------------------ */

    return (
        <header
            className="sticky top-0 z-50 border-b border-white/10"
            style={{ backgroundColor: "#14121F" }}
        >
            {/* Weather bar */}
            {weather && (
                <div className="border-b border-white/5 py-1.5 text-center text-xs text-white/50">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={weather.iconUrl}
                        alt={weather.condition}
                        className="mr-1 inline-block h-5 w-5 align-middle"
                    />
                    <span className="font-medium text-white/80">{weather.temperature}°C</span>
                    <span className="mx-2 text-white/25">·</span>
                    <span>{weather.condition}</span>
                    <span className="mx-2 text-white/25">·</span>
                    <span>Wind {weather.windSpeed} km/h</span>
                </div>
            )}

            {/* Nav */}
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 text-[#E2DDFE]">
                    {/* <Image src="/logo.png" alt="Bike Bliss Logo" width={32} height={32} /> */}
                    <span className="text-base font-semibold">Bike Bliss</span>
                </a>

                {/* Nav links */}
                <div className="hidden gap-8 md:flex">
                    <a href="#features" className="text-sm text-white/70 transition-colors hover:text-white">Features</a>
                    <a href="#testimonials" className="text-sm text-white/70 transition-colors hover:text-white">Testimonials</a>
                    <a href="#faqs" className="text-sm text-white/70 transition-colors hover:text-white">Faqs</a>
                </div>

                {/* CTA */}
                <Button>Contact</Button>
            </nav>
        </header>
    );
}
