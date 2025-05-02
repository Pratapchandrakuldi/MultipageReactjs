// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// // Sample images (replace with actual URLs)
// const mediaItems = [
//   { id: 1, category: "Events", src: "https://via.placeholder.com/300", alt: "Event 1" },
//   { id: 2, category: "Awards", src: "https://via.placeholder.com/300", alt: "Award 1" },
//   { id: 3, category: "Conferences", src: "https://via.placeholder.com/300", alt: "Conference 1" },
//   { id: 4, category: "Events", src: "https://via.placeholder.com/300", alt: "Event 2" },
//   { id: 5, category: "Awards", src: "https://via.placeholder.com/300", alt: "Award 2" },
//   { id: 6, category: "Conferences", src: "https://via.placeholder.com/300", alt: "Conference 2" },
// ];

// export default function MediaGallery() {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [filteredItems, setFilteredItems] = useState(mediaItems);
//   const [lightboxImage, setLightboxImage] = useState(null);

//   useEffect(() => {
//     document.title = "Media & Gallery | CRCIDF";
//     if (selectedCategory === "All") {
//       setFilteredItems(mediaItems);
//     } else {
//       setFilteredItems(mediaItems.filter(item => item.category === selectedCategory));
//     }
//   }, [selectedCategory]);

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
//       <div className="max-w-7xl mx-auto px-6 py-12">
//         {/* Header */}
//         <header className="text-center">
//           <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400">Media & Gallery</h1>
//           <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Explore our latest events, awards, and conferences.</p>
//         </header>

//         {/* Category Filters */}
//         <div className="mt-8 flex justify-center space-x-4">
//           {["All", "Events", "Awards", "Conferences"].map(category => (
//             <button
//               key={category}
//               className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
//                 selectedCategory === category ? "bg-blue-600 text-white" : "bg-gray-300 dark:bg-gray-700"
//               }`}
//               onClick={() => setSelectedCategory(category)}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Gallery Section */}
//         <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {filteredItems.map(item => (
//             <motion.div
//               key={item.id}
//               className="relative cursor-pointer rounded-lg overflow-hidden shadow-lg"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//               onClick={() => setLightboxImage(item.src)}
//             >
//               <img src={item.src} alt={item.alt} className="w-full h-64 object-cover" />
//               <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition">
//                 <p className="text-white text-lg font-semibold">{item.category}</p>
//               </div>
//             </motion.div>
//           ))}
//         </section>
//       </div>

//       {/* Lightbox (Full-screen Preview) */}
//       {lightboxImage && (
//         <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => setLightboxImage(null)}>
//           <motion.img
//             src={lightboxImage}
//             alt="Enlarged"
//             className="max-w-full max-h-full rounded-lg"
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.8, opacity: 0 }}
//           />
//           <button className="absolute top-4 right-4 bg-white text-black p-2 rounded-full" onClick={() => setLightboxImage(null)}>✖</button>
//         </div>
//       )}
//     </div>
//   );
// }










// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// // Media Gallery Images
// const mediaItems = [
//   { 
//     id: 1, 
//     category: "Events", 
//     src: "src/assets/testimonials/1.jpeg", 
//     alt: "Cyber Security Conference 2023" 
//   },
//   { 
//     id: 2, 
//     category: "Award", 
//     src: "src/assets/testimonials/2.jpeg", 
//     alt: "Cyber Security Conference 2023" 
//   },{ 
//     id: 3, 
//     category: "Events", 
//     src: "src/assets/testimonials/3.jpeg", 
//     alt: "Cyber Security Conference 2023" 
//   },{ 
//     id: 4, 
//     category: "Events", 
//     src: "src/assets/testimonials/4.jpeg", 
//     alt: "Cyber Security Conference 2023" 
//   },{ 
//     id: 5, 
//     category: "Events", 
//     src: "src/assets/testimonials/5.jpeg", 
//     alt: "Cyber Security Conference 2023" 
//   },
//   // ... other media items
// ];

// // Testimonial Images
// const testimonials = [
//   {
//     id: 1,
//     name: "John Doe",
//     role: "Cyber Security Head, National Police",
//     text: "CRCIDF's training programs have revolutionized our approach to digital forensics.",
//     image: "src/assets/testimonials/1.jpeg",
//   },
//   // ... other testimonials
// ];

// export default function MediaGallery() {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [filteredItems, setFilteredItems] = useState(mediaItems);
//   const [lightboxImage, setLightboxImage] = useState(null);

//   useEffect(() => {
//     document.title = "Media & Gallery | CRCIDF";
//     if (selectedCategory === "All") {
//       setFilteredItems(mediaItems);
//     } else {
//       setFilteredItems(mediaItems.filter(item => item.category === selectedCategory));
//     }
//   }, [selectedCategory]);

//   return (
//     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white mt-16">
//       <div className="max-w-7xl mx-auto px-6 py-12">
//         {/* Header with transparency */}
//         <header className="text-center">
//           <h1 className="text-4xl font-bold text-blue-600/90 dark:text-blue-400/95">
//             Media & Gallery
//           </h1>
//           <p className="mt-4 text-lg text-gray-600/80 dark:text-gray-300/90">
//             Explore our latest events, awards, and conferences.
//           </p>
//         </header>

//         {/* Category Filters with transparency */}
//         <div className="mt-8 flex justify-center space-x-4">
//           {["All", "Events", "Awards", "Conferences"].map(category => (
//             <button
//               key={category}
//               className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
//                 ${selectedCategory === category 
//                   ? "bg-blue-600/90 text-white hover:bg-blue-600/80" 
//                   : "bg-gray-300/50 text-gray-700 hover:bg-gray-300/70 dark:bg-gray-700/60 dark:hover:bg-gray-700/80"}`}
//               onClick={() => setSelectedCategory(category)}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Gallery Section with transparent overlay */}
//         <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {filteredItems.map(item => (
//             <motion.div
//               key={item.id}
//               className="relative cursor-pointer rounded-lg overflow-hidden shadow-lg group"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//               onClick={() => setLightboxImage(item.src)}
//             >
//               <img 
//                 src={item.src} 
//                 alt={item.alt} 
//                 className="w-full h-64 object-cover"
//                 loading="lazy"
//               />
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-white text-lg font-semibold backdrop-blur-sm px-4 py-2 rounded-lg">
//                   {item.category}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </section>

//         {/* Testimonials with transparent effects */}
        

//         {/* Lightbox (unchanged) */}
//         {lightboxImage && (
//           <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" 
//                onClick={() => setLightboxImage(null)}>
//             <motion.img
//               src={lightboxImage}
//               alt="Enlarged"
//               className="max-w-full max-h-full rounded-lg"
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//             />
//             <button className="absolute top-4 right-4 bg-white text-black p-2 rounded-full" 
//                     onClick={() => setLightboxImage(null)}>
//               ✖
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }







import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const mediaItems = [
  // Events
  { 
    id: 1, 
    category: "Events", 
    src: "src/assets/media-gallery/1.jpeg", 
    alt: "Cyber Security Workshop 2023" 
  },
  { 
    id: 2, 
    category: "Events", 
    src: "src/assets/media-gallery/2.jpeg", 
    alt: "National Cyber Conference" 
  },
  { 
    id: 3, 
    category: "Events", 
    src: "src/assets/media-gallery/3.jpeg", 
    alt: "Digital Forensics Training" 
  },

  // Awards
  { 
    id: 4, 
    category: "Awards", 
    src: "src/assets/media-gallery/4.jpeg", 
    alt: "Best Cyber Initiative Award 2023" 
  },
  { 
    id: 5, 
    category: "Awards", 
    src: "src/assets/media-gallery/5.jpeg", 
    alt: "Cyber Security Excellence Award" 
  },

  // Conferences
  { 
    id: 6, 
    category: "Conferences", 
    src: "src/assets/media-gallery/6.jpeg", 
    alt: "International Cyber Summit" 
  },
  { 
    id: 7, 
    category: "Conferences", 
    src: "/images/conferences/conference2.jpg", 
    alt: "Tech Security Symposium" 
  },
];

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Cyber Security Head, National Police",
    text: "CRCIDF's training programs have revolutionized our approach to digital forensics.",
    image: "/images/testimonials/testimonial1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Digital Forensics Expert",
    text: "The research initiatives at CRCIDF are paving the way for next-gen cyber security solutions.",
    image: "/images/testimonials/testimonial2.jpg",
  },
];

export default function MediaGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState(mediaItems);
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    document.title = "Media & Gallery | CRCIDF";
    setFilteredItems(
      selectedCategory === "All" 
        ? mediaItems 
        : mediaItems.filter(item => item.category === selectedCategory)
    );
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-600/90 dark:text-blue-400/95 mb-4">
            CRCIDF Media Gallery
          </h1>
          <p className="text-lg text-gray-600/80 dark:text-gray-300/90">
            Exploring Our Journey in Cybersecurity Excellence
          </p>
        </header>

        {/* Category Filters */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {["All", "Events", "Awards", "Conferences"].map(category => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Media Gallery Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredItems.map(item => (
            <motion.div
              key={item.id}
              className="relative group overflow-hidden rounded-2xl shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-72 object-cover cursor-pointer"
                onClick={() => setLightboxImage(item.src)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-medium text-lg">
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Testimonials Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            What People Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map(testimonial => (
              <motion.div
                key={testimonial.id}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-6 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-400">
                  {testimonial.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Lightbox */}
        {lightboxImage && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative max-w-4xl w-full"
            >
              <img
                src={lightboxImage}
                alt="Enlarged view"
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
              <button
                className="absolute -top-4 -right-4 bg-white text-black rounded-full p-2 hover:bg-gray-100 transition-colors"
                onClick={() => setLightboxImage(null)}
              >
                ✖
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}