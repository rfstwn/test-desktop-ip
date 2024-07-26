"use client";

import { Carousel, CustomFlowbiteTheme } from "flowbite-react";
import Image from "next/image";
import { FaPlay, FaShareNodes } from "react-icons/fa6";
import Button from "../Elements/Button";
import { iHeroBanner } from "@/app/(pages)/home/home.types";
import useRandomImage from "@/app/hooks/useRandomImage";

const customCarouselTheme: CustomFlowbiteTheme["carousel"] = {
    root: {
        leftControl: "hidden",
        rightControl: "hidden",
    },
    indicators: {
        active: {
            off: "bg-white",
            on: "bg-secondary",
        },
        wrapper: "absolute bottom-5 left-10 gap-3 hidden sm:flex",
    },
    scrollContainer: {
        base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg sm:rounded-none",
    },
};
const HeroBanner = ({ dataFilms }: { dataFilms: Array<iHeroBanner> }) => {
    const randomImage = useRandomImage();
    return (
        <div className="hero-banner">
            <Carousel theme={customCarouselTheme}>
                {dataFilms.map((film: any, index: number) => (
                    <div className="hero-banner--item" key={index}>
                        <div className="hero-banner--item--content">
                            <div className="hero-banner--item--content--info">
                                <h1 className="line-clamp-2">{film.title}</h1>
                                <div className="hero-banner--item--content--info--timing">
                                    <span>{new Date(film.release_date).getFullYear()}</span>
                                    <span>2H 14m</span>
                                </div>
                                <p className="line-clamp-3 md:line-clamp-4">{film.opening_crawl}</p>

                                <div className="flex gap-2">
                                    <Button
                                        onClick={() => {
                                            window.open(film.link, "_blank");
                                        }}
                                    >
                                        <FaPlay /> Play
                                    </Button>
                                    <Button className="block sm:hidden" style="secondary" onClick={() => alert("Share it")}>
                                        <FaShareNodes /> Share
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <Image src={randomImage(index)} alt="film" sizes="100vw" fill={true} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default HeroBanner;
