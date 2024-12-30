import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Artwork = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const slides = [
    { id: 1, img: "assets/images/ViClay.png", alt: "3d sculpture of Vi"},
    { id: 2, img: "assets/images/Vi.png", alt: "Painted 3d sculpture of Vi" },
    { id: 3, img: "assets/images/Fractal.png", alt: "3d render of a fractal" },
    { id: 4, img: "assets/images/Fractal2.png", alt: "3d render of a fractal"  },
    { id: 5, img: "assets/images/Perfume.png", alt: "City of Perfume bottles at day"  },
    { id: 6, img: "assets/images/Perfume2.png", alt: "City of Perfume bottles at night" }
  ];

  return (
    <div id="artwork" className="bg-blue-800 flex flex-col items-center justify-center h-auto">
      <h1 className="text-4xl font-bold text-white mb-8 mt-24">Artwork</h1>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={4000}
        showDots
        dotListClass="custom-dot-list-style"
        containerClass="carousel-container mb-20"
      >
        {slides.map((item) => {
          return (
            <div key={item.id} className="h-full text-center flex items-center justify-center">
              <img src={item.img} className="h-fit" alt={item.alt}/>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Artwork