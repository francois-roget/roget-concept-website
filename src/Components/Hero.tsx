import React from "react";
import Image from "next/image";

const Hero = () => {
    return (
        <header className="   ">
            <div
                className="container mx-auto grid h-full gap-10 pt-5 w-full grid-cols-1 items-center lg:grid-cols-2">
                <div className="row-start-2 lg:row-auto">

                    <p className="text-3xl font-semibold leading-relaxed text-primary">
                        Welcome to Roget Concept
                    </p>
                    <p className="pt-2.5">
                        I&apos;m François Roget, a passionate web developer based in Brussels
                    </p>

                </div>
                <Image
                    width={500}
                    height={500}
                    alt="team work"
                    src="/fro-pro.JPG"
                    className="h-[36rem] w-full rounded-xl object-cover"
                />
            </div>
        </header>
    );
}

export default Hero;