import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

// Default theme
const Artwork = () => {
  const splideOptions = {
    type: "loop",
    perPage: 1, // Number of items visible per page
    perMove: 1, // Move one item at a time
    rewind: true, // Rewind to start when the end is reached
    pagination: false,
  };
  return (
    <div id="artwork" className="bg-blue-800 h-auto flex-col flex justify-center items-center">
      <h1 className="text-4xl font-bold text-white mt-20">Artwork</h1>
      <div className="h-full w-full relative flex items-center justify-center bg-blue-800 mt-10 mb-10">
        {/* Container for the carousel with a fixed width */}
        <div className="w-5/6">
          {/* Splide component with configuration options */}
          <Splide options={splideOptions}>
            <SplideSlide>
              <div className="w-full h-screen text-3xl bg-slate-600 flex items-center justify-center">1</div>
            </SplideSlide>
            <SplideSlide>
              <div className="w-full h-screen text-3xl bg-slate-600 flex items-center justify-center">2</div>
            </SplideSlide>
            <SplideSlide>
              <div className="w-full h-screen text-3xl bg-slate-600 flex items-center justify-center">3</div>
            </SplideSlide>
            <SplideSlide>
              <div className="w-full h-screen text-3xl bg-slate-600 flex items-center justify-center">4</div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  )
}

export default Artwork