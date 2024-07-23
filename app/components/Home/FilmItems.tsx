import "react-multi-carousel/lib/styles.css";
import { iFilmItems } from "@/app/(pages)/home/home.types";
import randomImage from "@/app/libs/randomImage";
import Carousel from "react-multi-carousel";
import Image from "next/image";

interface iFilmItemsComponent {
    title: string;
    dataFilm: Array<iFilmItems>;
}

const FilmItems = ({ title, dataFilm }: iFilmItemsComponent) => {
    const responsiveConfigCarousel = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
            slidesToSlide: 3,
        },
        mobile: {
            breakpoint: { max: 767, min: 0 },
            items: 2,
            slidesToSlide: 1,
        },
    };

    return (
        <section className="carousel-films-wrapper">
            <h3>{title}</h3>
            <Carousel
                responsive={responsiveConfigCarousel}
                autoPlay={true}
                swipeable={true}
                draggable={true}
                showDots={false}
                infinite={true}
                partialVisible={false}
            >
                {dataFilm.map((data, index) => {
                    return (
                        <div className="carousel-films-item" key={index}>
                            <Image width={300} height={300} src={randomImage(index)} alt="Item Film" />
                            <div className="carousel-films-item--info">
                                <h5>{data.title}</h5>
                                {data.isExlusive && <div className="carousel-films-item--info--exclusive">Exclusive</div>}
                            </div>
                        </div>
                    );
                })}
            </Carousel>
        </section>
    );
};

export default FilmItems;
