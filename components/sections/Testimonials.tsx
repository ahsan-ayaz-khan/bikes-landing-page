import Image from "next/image";

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="px-6 py-24"
            style={{ backgroundColor: "#14121F" }}
        >
            <div className="mx-auto max-w-3xl text-center">
                {/* Avatar placeholder */}
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full">
                    <Image src="/images/testimonial.png" alt="Testimonial avatar" width={64} height={64} />
                </div>

                <p className="mb-1 text-lg font-semibold text-white">John S.</p>
                <p className="mb-8 text-lg text-white/40">Position, Company name</p>

                <blockquote className="text-2xl font-medium leading-relaxed text-white md:text-3xl">
                    &ldquo;Absolutely love my ThunderBolt! Smooth ride, sleek design, and
                    unbeatable performance&rdquo;
                    <br />
                    {/* <span className="mt-3 block text-lg text-white/60"> */}— John S.{/* </span> */}
                </blockquote>
            </div>
        </section>
    );
}
