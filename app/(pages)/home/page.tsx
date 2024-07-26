"use client";

import HeroBanner from "@/app/components/Home/HeroBanner";
import { useEffect, useState } from "react";
import { iFilmItems, iFilmResponse, iHeroBanner } from "./home.types";
import FilmItems from "@/app/components/Home/FilmItems";
import customFetch, { ApiResponse } from "@/app/lib/customFetch";

export default function Home() {
    const [dataHeroBanner, setDataHeroBanner] = useState<Array<iHeroBanner>>([]);
    const [filmCatOne, setFilmCatOne] = useState<Array<iFilmItems>>([]);
    const [filmCatTwo, setFilmCatTwo] = useState<Array<iFilmItems>>([]);

    useEffect(() => {
        customFetch<{}, ApiResponse<iFilmResponse>>({
            url: `${process.env.NEXT_PUBLIC_BASE_URL_API}/films`,
            apiName: "Get Films",
            cache: "no-store",
        }).then((res) => {
            const { data } = res;
            if (data) {
                const { results: films, count: films_total } = data as unknown as iFilmResponse;

                // Mapping Data Film
                for (let count_film = 0; count_film < films_total; count_film++) {
                    const temp_film: iHeroBanner = {
                        title: films[count_film].title,
                        opening_crawl: films[count_film].opening_crawl,
                        release_date: films[count_film].release_date,
                        link: films[count_film].url,
                    };

                    const temp_film_cat_one: iFilmItems = {
                        title: films[count_film].title,
                        link: films[count_film].url,
                        isExlusive: [1, 3].includes(count_film) ? true : false,
                    };

                    const temp_film_cat_two: iFilmItems = {
                        title: films[count_film].title,
                        link: films[count_film].url,
                        isExlusive: [2, 4, 5].includes(count_film) ? true : false,
                    };

                    setFilmCatOne((old) => [...old, temp_film_cat_one]);
                    setFilmCatTwo((old) => [...old, temp_film_cat_two]);
                    dataHeroBanner.length < 4 && setDataHeroBanner((old) => [...old, temp_film]);
                }
            }
        });
    }, []);

    return (
        <div className="w-full px-4 sm:px-0">
            <HeroBanner dataFilms={dataHeroBanner} />
            <FilmItems title="Category 1" dataFilm={filmCatOne} />
            <FilmItems title="Category 2" dataFilm={filmCatTwo} />
        </div>
    );
}
