import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Artwork = () => {
  const responsive = {
    lagedesktop: {
      breakpoint: { max: 8000, min: 3000 },
      items: 3,
      slidesToSlide: 1 
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1 
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  const slides = [
    { id: 1, img: "assets/images/ViClay.png", alt: "3d sculpture of Vi"},
    { id: 2, img: "assets/images/Vi.png", alt: "Painted 3d sculpture of Vi" },
    { id: 3, img: "assets/images/Fractal.jpeg", alt: "3d render of a fractal" },
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
            <div key={item.id} className="aspect-w-16 aspect-h-9 overflow-hidden h-full flex flex-col items-center justify-center">
              <img loading="lazy" src={item.img} className="w-full h-auto" alt={item.alt}/>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Artwork