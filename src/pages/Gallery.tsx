import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaXmark, FaArrowLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

// Types for our media items
interface MediaItem {
  id: number;
  img: string;
  alt: string;
  title: string;
  category: "3d" | "photography";
}

const Gallery = () => {
  const [filter, setFilter] = useState<"all" | "3d" | "photography">("all");
  const [selectedImage, setSelectedImage] = useState<MediaItem | null>(null);

  // Updated with your 3D artwork assets and photography paths
  const mediaItems: MediaItem[] = [
    { id: 7, img: "https://immich.finleyharrison.ca/api/assets/a82faad6-53db-42a6-bb52-ac4489b95d93/thumbnail?key=FQ9oIeoxG-H9T1aLUJsKwRlNdHOvfbaRRg1NH_yIo_HMeiZuQ783ix4iyFa9gX7ht4I&size=preview&c=lBgODQLPeWh2h2iGdmiHiM97%2Ba3Z&edited=true",alt: "Sword behind bookshelf", title: "Sword in the Library", category: "photography" },
    { id: 8, img: "https://immich.finleyharrison.ca/api/assets/adaeca7f-2bb6-48da-91f0-772b176d0726/thumbnail?key=tcSYboOAYk6bgkp6zyGfuBkH0IYEb80Bw215EO58ucH4kIgsQU_0diZGM6Q9WskO2Tk&size=preview&c=2OcRBYKPZYdWdYgyl3mohnT1%2Fnj9&edited=true", alt: "Photo of a Go train", title: "Conductor's View", category: "photography" },
    { id: 9, img: "https://immich.finleyharrison.ca/api/assets/f751f4a3-8676-46f5-b33b-fe243605dc99/thumbnail?key=tcSYboOAYk6bgkp6zyGfuBkH0IYEb80Bw215EO58ucH4kIgsQU_0diZGM6Q9WskO2Tk&size=preview&c=mvgNDYR1iIeAiIeWiZd3eKqPaQZn&edited=true", alt: "Photo of Pigeons in a park", title: "Pigeon Parade", category: "photography" },
    { id: 10, img: "https://immich.finleyharrison.ca/api/assets/5ba7df7b-2960-4970-8b2c-2f585a19e394/thumbnail?key=tcSYboOAYk6bgkp6zyGfuBkH0IYEb80Bw215EO58ucH4kIgsQU_0diZGM6Q9WskO2Tk&size=preview&c=FwgKBQJqho%2BJSHV4aZl3hpwI%2FBrQ&edited=true", alt: "Photo of the stop button on a streetcar", title: "Streetcar Stop", category: "photography" },
    { id: 11, img: "https://immich.finleyharrison.ca/api/assets/63e90360-2a4b-4e1e-8952-081311692b7f/thumbnail?key=YQhxRJKAJC7mHncfoV8Hs-OxyYePPXExRhMhcg29ZfDaTlz0zBnwyDThnq-D01HLBoQ&size=preview&c=YxgWDYL1lmiYeHiHh4h3dwtmpZCG&edited=true", alt: "Photo of a cat face close up", title: "Sunlit Cat", category: "photography" },
    { id: 12, img: "https://immich.finleyharrison.ca/api/assets/15623ee3-95fc-419f-8a2f-7f425bf92810/thumbnail?key=YQhxRJKAJC7mHncfoV8Hs-OxyYePPXExRhMhcg29ZfDaTlz0zBnwyDThnq-D01HLBoQ&size=preview&c=lKkKHQ6OiZd5BqhoaHeZdn%2BX9JZa&edited=true", alt: "Photo of a sitting cat from the back with it's shadow", title: "Super Cat", category: "photography" },
    { id: 13, img: "https://immich.finleyharrison.ca/api/assets/cc32ca3a-8f74-419b-a0b7-812a1e443e28/thumbnail?key=YQhxRJKAJC7mHncfoV8Hs-OxyYePPXExRhMhcg29ZfDaTlz0zBnwyDThnq-D01HLBoQ&size=preview&c=5AcSDQJWd4%2BIV4l4eHeHZ5tw5wtX&edited=true", alt: "Photo of Kensington Market", title: "Welcome to Kensington", category: "photography" },
    { id: 14, img: "https://immich.finleyharrison.ca/api/assets/17d0bb16-d0f2-4787-8c5e-71f600c51185/thumbnail?key=YQhxRJKAJC7mHncfoV8Hs-OxyYePPXExRhMhcg29ZfDaTlz0zBnwyDThnq-D01HLBoQ&size=preview&c=pdYFBYAEaGd8h3iEd5d4diJTAHeH&edited=true", alt: "Photo of a plane landing", title: "Landing in Toronto", category: "photography" },
    { id: 1, img: "assets/images/ViClay.png", alt: "3d sculpture of Vi", title: "Vi Clay Sculpt", category: "3d" },
    { id: 2, img: "assets/images/Vi.png", alt: "Painted 3d sculpture of Vi", title: "Vi Textured Render", category: "3d" },
    { id: 3, img: "assets/images/Fractal.jpeg", alt: "3d render of a fractal", title: "Mandelbulb Exploration I", category: "3d" },
    { id: 4, img: "assets/images/Fractal2.png", alt: "3d render of a fractal", title: "Mandelbulb Exploration II", category: "3d" },
    { id: 5, img: "assets/images/Perfume.png", alt: "City of Perfume bottles at day", title: "Perfume Metropolis (Day)", category: "3d" },
    { id: 6, img: "assets/images/Perfume2.png", alt: "City of Perfume bottles at night", title: "Perfume Metropolis (Night)", category: "3d" },
  ];

  const filteredItems = mediaItems.filter(
    (item) => filter === "all" || item.category === filter
  );

  // Navigation Logic
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid triggering modal close
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid triggering modal close
    if (!selectedImage) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
  };
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!selectedImage) return;
            if (e.key === "ArrowRight") {
            // Trigger your next logic
            const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage.id);
            setSelectedImage(filteredItems[(currentIndex + 1) % filteredItems.length]);
            } else if (e.key === "ArrowLeft") {
            // Trigger your prev logic
            const currentIndex = filteredItems.findIndex((item) => item.id === selectedImage.id);
            setSelectedImage(filteredItems[(currentIndex - 1 + filteredItems.length) % filteredItems.length]);
            } else if (e.key === "Escape") {
            setSelectedImage(null);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedImage, filteredItems]);

  return (
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
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
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
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlaid Title Card */}
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
              className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 p-3 rounded-full transition-all text-xl z-50"
                aria-label="Close modal"
              >
                <FaXmark />
              </button>

              {/* Navigation Left Arrow */}
              <button
                onClick={handlePrev}
                className="absolute left-4 md:left-8 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 p-4 rounded-full transition-all text-xl md:text-2xl z-50"
                aria-label="Previous image"
              >
                <FaChevronLeft />
              </button>

              {/* Navigation Right Arrow */}
              <button
                onClick={handleNext}
                className="absolute right-4 md:right-8 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 p-4 rounded-full transition-all text-xl md:text-2xl z-50"
                aria-label="Next image"
              >
                <FaChevronRight />
              </button>

              {/* Modal Box */}
              <motion.div
                key={selectedImage.id} // Added key here so framer-motion treats image swaps with layout changes smoothly
                initial={{ scale: 0.95, y: 10, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 10, opacity: 0 }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()} 
                className="max-w-5xl max-h-[85vh] flex flex-col gap-4 items-center px-12"
              >
                <img
                  src={selectedImage.img}
                  alt={selectedImage.alt}
                  className="rounded-xl object-contain max-w-full max-h-[70vh] shadow-2xl border border-white/10"
                />
                <div className="text-center">
                  <h2 className="text-xl font-bold text-white">{selectedImage.title}</h2>
                  <p className="text-sm text-slate-400 mt-0.5 capitalize">
                    {selectedImage.category === "3d" ? "3D Graphics Modeling" : "Camera Capture"}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default Gallery;