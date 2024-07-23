const randomImage = (index: number) => {
    const image = ["film1.jpg", "film2.jpg", "film3.jpg", "film4.jpg", "film5.jpg"];
    if (index > image.length - 1) {
        return `/image/${image[Math.floor(Math.random() * image.length)]}`;
    } else {
        return `/image/${image[index]}`;
    }
};

export default randomImage;
