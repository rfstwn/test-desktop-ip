export interface iHeroBanner {
    title: string;
    opening_crawl: string;
    release_date: string;
    link: string;
}

export interface iFilmItems {
    title: string;
    link: string;
    isExlusive: boolean;
}

export interface iFilmResponse {
    count: number;
    next: null;
    previous: null;
    results: iFilmResult[];
}

export interface iFilmResult {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: string;
    edited: string;
    url: string;
}
