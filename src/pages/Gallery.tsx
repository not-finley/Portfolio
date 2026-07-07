import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaXmark, FaArrowLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

// Types for our media items
interface MediaItem {
  id: number;
  img: string;
  previewImg: string;
  alt: string;
  title: string;
  category: "3d" | "photography";
}

const Gallery = () => {
  const [filter, setFilter] = useState<"all" | "3d" | "photography">("all");
  const [selectedImage, setSelectedImage] = useState<MediaItem | null>(null);
  const [isHighResLoaded, setIsHighResLoaded] = useState(false);
  
  // Zoom feature state hooks
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomOrigin, setZoomOrigin] = useState({ x: "50%", y: "50%" });

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      if (pathname === '/gallery') {
        window.scrollTo(0, 0);
      }
    }, [pathname]);
    return null;
  };

  const mediaItems: MediaItem[] = [
    { 
      id: 7, 
      img: "https://immich.finleyharrison.ca/api/assets/a82faad6-53db-42a6-bb52-ac4489b95d93/thumbnail?key=FQ9oIeoxG-H9T1aLUJsKwRlNdHOvfbaRRg1NH_yIo_HMeiZuQ783ix4iyFa9gX7ht4I&size=original&edited=true",
      previewImg: "https://immich.finleyharrison.ca/api/assets/a82faad6-53db-42a6-bb52-ac4489b95d93/thumbnail?key=FQ9oIeoxG-H9T1aLUJsKwRlNdHOvfbaRRg1NH_yIo_HMeiZuQ783ix4iyFa9gX7ht4I&size=preview&c=lBgODQLPeWh2h2iGdmiHiM97%2Ba3Z&edited=true",
      alt: "Sword behind bookshelf", title: "Sword in the Library", category: "photography" 
    },
    { 
      id: 8, 
      img: "https://immich.finleyharrison.ca/api/assets/adaeca7f-2bb6-48da-91f0-772b176d0726/thumbnail?key=tcSYboOAYk6bgkp6zyGfuBkH0IYEb80Bw215EO58ucH4kIgsQU_0diZGM6Q9WskO2Tk&size=original&edited=true",
      previewImg: "https://immich.finleyharrison.ca/api/assets/adaeca7f-2bb6-48da-91f0-772b176d0726/thumbnail?key=tcSYboOAYk6bgkp6zyGfuBkH0IYEb80Bw215EO58ucH4kIgsQU_0diZGM6Q9WskO2Tk&size=preview&c=2OcRBYKPZYdWdYgyl3mohnT1%2Fnj9&edited=true",
      alt: "Photo of a Go train", title: "Conductor's View", category: "photography" 
    },
    { 
      id: 9, 
      img: "https://immich.finleyharrison.ca/api/assets/f751f4a3-8676-46f5-b33b-fe243605dc99/thumbnail?key=tcSYboOAYk6bgkp6zyGfuBkH0IYEb80Bw215EO58ucH4kIgsQU_0diZGM6Q9WskO2Tk&size=original&edited=true",
      previewImg: "https://immich.finleyharrison.ca/api/assets/f751f4a3-8676-46f5-b33b-fe243605dc99/thumbnail?key=tcSYboOAYk6bgkp6zyGfuBkH0IYEb80Bw215EO58ucH4kIgsQU_0diZGM6Q9WskO2Tk&size=preview&c=mvgNDYR1iIeAiIeWiZd3eKqPaQZn&edited=true",
      alt: "Photo of Pigeons in a park", title: "Pigeon Parade", category: "photography" 
    },
    { 
      id: 10, 
      img: "https://immich.finleyharrison.ca/api/assets/5ba7df7b-2960-4970-8b2c-2f585a19e394/thumbnail?key=tcSYboOAYk6bgkp6zyGfuBkH0IYEb80Bw215EO58ucH4kIgsQU_0diZGM6Q9WskO2Tk&size=original&edited=true",
      previewImg: "https://immich.finleyharrison.ca/api/assets/5ba7df7b-2960-4970-8b2c-2f585a19e394/thumbnail?key=tcSYboOAYk6bgkp6zyGfuBkH0IYEb80Bw215EO58ucH4kIgsQU_0diZGM6Q9WskO2Tk&size=preview&c=FwgKBQJqho%2BJSHV4aZl3hpwI%2FBrQ&edited=true",
      alt: "Photo of the stop button on a streetcar", title: "Streetcar Stop", category: "photography" 
    },
    { 
      id: 11, 
      img: "https://immich.finleyharrison.ca/api/assets/63e90360-2a4b-4e1e-8952-081311692b7f/thumbnail?key=YQhxRJKAJC7mHncfoV8Hs-OxyYePPXExRhMhcg29ZfDaTlz0zBnwyDThnq-D01HLBoQ&size=original&edited=true",
      previewImg: "https://immich.finleyharrison.ca/api/assets/63e90360-2a4b-4e1e-8952-081311692b7f/thumbnail?key=YQhxRJKAJC7mHncfoV8Hs-OxyYePPXExRhMhcg29ZfDaTlz0zBnwyDThnq-D01HLBoQ&size=preview&c=YxgWDYL1lmiYeHiHh4h3dwtmpZCG&edited=true",
      alt: "Photo of a cat face close up", title: "Sunlit Cat", category: "photography" 
    },
    { 
      id: 12, 
      img: "https://immich.finleyharrison.ca/api/assets/15623ee3-95fc-419f-8a2f-7f425bf92810/thumbnail?key=YQhxRJKAJC7mHncfoV8Hs-OxyYePPXExRhMhcg29ZfDaTlz0zBnwyDThnq-D01HLBoQ&size=original&edited=true",
      previewImg: "https://immich.finleyharrison.ca/api/assets/15623ee3-95fc-419f-8a2f-7f425bf92810/thumbnail?key=YQhxRJKAJC7mHncfoV8Hs-OxyYePPXExRhMhcg29ZfDaTlz0zBnwyDThnq-D01HLBoQ&size=preview&c=lKkKHQ6OiZd5BqhoaHeZdn%2BX9JZa&edited=true",
      alt: "Photo of a sitting cat from the back with it's shadow", title: "Super Cat", category: "photography" 
    },
    { 
      id: 13, 
      img: "https://immich.finleyharrison.ca/api/assets/cc32ca3a-8f74-419b-a0b7-812a1e443e28/thumbnail?key=YQhxRJKAJC7mHncfoV8Hs-OxyYePPXExRhMhcg29ZfDaTlz0zBnwyDThnq-D01HLBoQ&size=original&edited=true",
      previewImg: "https://immich.finleyharrison.ca/api/assets/cc32ca3a-8f74-419b-a0b7-812a1e443e28/thumbnail?key=YQhxRJKAJC7mHncfoV8Hs-OxyYePPXExRhMhcg29ZfDaTlz0zBnwyDThnq-D01HLBoQ&size=preview&c=5AcSDQJWd4%2BIV4l4eHeHZ5tw5wtX&edited=true",
      alt: "Photo of Kensington Market", title: "Welcome to Kensington", category: "photography" 
    },
    { 
      id: 14, 
      img: "https://immich.finleyharrison.ca/api/assets/17d0bb16-d0f2-4787-8c5e-71f600c51185/thumbnail?key=YQhxRJKAJC7mHncfoV8Hs-OxyYePPXExRhMhcg29ZfDaTlz0zBnwyDThnq-D01HLBoQ&size=original&edited=true",
      previewImg: "https://immich.finleyharrison.ca/api/assets/17d0bb16-d0f2-4787-8c5e-71f600c51185/thumbnail?key=YQhxRJKAJC7mHncfoV8Hs-OxyYePPXExRhMhcg29ZfDaTlz0zBnwyDThnq-D01HLBoQ&size=preview&c=pdYFBYAEaGd8h3iEd5d4diJTAHeH&edited=true",
      alt: "Photo of a plane landing", title: "Landing in Toronto", category: "photography" 
    },
    { id: 1, img: "assets/images/ViClay.png", previewImg: "assets/images/ViClay_thumb.jpeg", alt: "3d sculpture of Vi", title: "Vi Clay Sculpt", category: "3d" },
    { id: 2, img: "assets/images/Vi.png", previewImg: "assets/images/Vi_thumb.jpeg", alt: "Painted 3d sculpture of Vi", title: "Vi Textured Render", category: "3d" },
    { id: 3, img: "assets/images/Fractal.jpeg", previewImg: "assets/images/Fractal_thumb.jpeg", alt: "3d render of a fractal", title: "Mandelbulb Exploration I", category: "3d" },
    { id: 4, img: "assets/images/Fractal2.png", previewImg: "assets/images/Fractal2_thumb.jpeg", alt: "3d render of a fractal", title: "Mandelbulb Exploration II", category: "3d" },
    { id: 5, img: "assets/images/Perfume.png", previewImg: "assets/images/Perfume_thumb.jpeg", alt: "City of Perfume bottles at day", title: "Perfume Metropolis (Day)", category: "3d" },
    { id: 6, img: "assets/images/Perfume2.png", previewImg: "assets/images/Perfume2_thumb.jpeg", alt: "City of Perfume bottles at night", title: "Perfume Metropolis (Night)", category: "3d" },
  ];

  const filteredItems = mediaItems.filter(
    (item) => filter === "all" || item.category === filter
  );

  // Reset loading and zoom parameters on modal image switch
  useEffect(() => {
    setIsHighResLoaded(false);
    setIsZoomed(false);
    setZoomOrigin({ x: "50%", y: "50%" });
  }, [selectedImage?.id]);

  // Dynamic tracking of mouse relative to bounding image box
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHighResLoaded) return;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomOrigin({ x: `${x}%`, y: `${y}%` });
  };

  const toggleZoom = (e: React.MouseEvent) => {
    e.stopPropagation(); // Stop overlay click close
    if (isHighResLoaded) {
      setIsZoomed(!isZoomed);
    }
  };

  // Navigation Logic
  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation(); 
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex]);
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, filteredItems]);

  return (
    <>
    <ScrollToTop />
    <div className="min-h-screen bg-blue-950 pt-28 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6 group font-medium"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">Creative Gallery</h1>
            <p className="text-slate-400 max-w-xl">
              A space for my personal creative work: mostly 3D graphics, digital art and photography.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex bg-blue-900/40 p-1.5 rounded-xl border border-white/5 backdrop-blur-sm self-stretch md:self-auto justify-center gap-2">
            {(["all", "3d", "photography"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold capitalize transition-all duration-200 ${
                  filter === cat
                    ? "bg-blue-500 text-white shadow-md shadow-blue-500/10"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {cat === "3d" ? "3D Art" : cat}
                <span className="ml-2 text-xs bg-white/10 px-1.5 py-0.5 rounded-full">
                    {mediaItems.filter(i => cat === "all" || i.category === cat).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedImage(item)}
                className="group relative aspect-[4/3] bg-slate-900 rounded-2xl overflow-hidden border border-white/5 cursor-pointer shadow-xl shadow-black/20"
              >
                <img
                  src={item.previewImg} 
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-1">
                    {item.category === "3d" ? "3D Model/Render" : "Photography"}
                  </span>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-8"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 p-3 rounded-full transition-all text-xl z-50"
                aria-label="Close modal"
              >
                <FaXmark />
              </button>

              {/* Desktop Navigation Arrows (Hidden during Zoomed state for pristine viewing) */}
              <button
                onClick={handlePrev}
                className={`${isZoomed ? 'hidden' : 'hidden md:flex'} absolute left-8 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 p-4 rounded-full transition-all text-2xl z-50`}
                aria-label="Previous image"
              >
                <FaChevronLeft />
              </button>

              <button
                onClick={handleNext}
                className={`${isZoomed ? 'hidden' : 'hidden md:flex'} absolute right-8 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 p-4 rounded-full transition-all text-2xl z-50`}
                aria-label="Next image"
              >
                <FaChevronRight />
              </button>

              {/* Modal Content Box */}
              <motion.div
                key={selectedImage.id}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()} 
                className="w-full max-w-4xl flex flex-col gap-4 items-center justify-center"
              >
                {/* Image Wrapper Container */}
                <div 
                  onMouseMove={handleMouseMove}
                  onClick={toggleZoom}
                  className={`relative w-full max-w-full aspect-[4/3] md:aspect-auto flex items-center justify-center max-h-[65vh] md:max-h-[75vh] overflow-hidden rounded-xl shadow-2xl border border-white/10 bg-slate-900/50 ${
                    isHighResLoaded ? "cursor-zoom-in" : "cursor-wait"
                  } ${isZoomed ? "cursor-zoom-out" : ""}`}
                >
                  
                  {/* 1. Low-res blurred preview */}
                  <img
                    src={selectedImage.previewImg}
                    alt=""
                    className={`w-full h-full max-h-[65vh] md:max-h-[75vh] object-contain blur-md scale-105 transition-opacity duration-500 pointer-events-none ${
                      isHighResLoaded ? "opacity-0 absolute" : "opacity-70"
                    }`}
                  />

                  {/* 2. Loading subtle spinner overlay */}
                  {!isHighResLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-10">
                      <div className="w-10 h-10 border-4 border-slate-500/30 border-t-blue-500 rounded-full animate-spin" />
                    </div>
                  )}

                  {/* 3. High-res target image with zoom attributes */}
                  <img
                    src={selectedImage.img}
                    alt={selectedImage.alt}
                    onLoad={() => setIsHighResLoaded(true)}
                    style={{
                      transformOrigin: `${zoomOrigin.x} ${zoomOrigin.y}`,
                    }}
                    className={`w-full max-w-full max-h-[65vh] md:max-h-[75vh] object-contain transition-all duration-200 ease-out ${
                      isHighResLoaded ? "opacity-100" : "opacity-0 w-0 h-0"
                    } ${isZoomed ? "scale-[2.25]" : "scale-100"}`}
                  />
                </div>
                
                <div className="text-center px-4 mt-2">
                  <h2 className="text-lg md:text-xl font-bold text-white leading-tight">{selectedImage.title}</h2>
                  <p className="text-xs md:text-sm text-slate-400 mt-1 capitalize">
                    {isHighResLoaded ? (isZoomed ? "Click image to zoom out" : "Click image to inspect closely") : "Loading high resolution..."}
                  </p>
                </div>
              </motion.div>

              {/* Mobile Bottom Navigation Controls */}
              <div className={`${isZoomed ? 'hidden' : 'flex md:hidden'} items-center gap-6 mt-6 z-50`}>
                <button
                  onClick={handlePrev}
                  className="text-slate-400 hover:text-white bg-white/5 active:bg-white/10 p-3.5 rounded-full transition-all text-lg"
                  aria-label="Previous image"
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={handleNext}
                  className="text-slate-400 hover:text-white bg-white/5 active:bg-white/10 p-3.5 rounded-full transition-all text-lg"
                  aria-label="Next image"
                >
                  <FaChevronRight />
                </button>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
    </>
  );
};

export default Gallery;