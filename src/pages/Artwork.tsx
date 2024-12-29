import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Artwork = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const slides = [
    { id: 1, content: "1" },
    { id: 2, content: "2" },
    { id: 3, content: "3" },
    { id: 4, content: "4" },
  ];

  return (
    <div id="artwork" className="bg-blue-800 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-white mb-8">Artwork</h1>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={5000}
        showDots
        dotListClass="custom-dot-list-style"
        containerClass="carousel-container"
      >
        {slides.map((_id, content) => {
          return (
            <div className="text-center">
              {content}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Artwork