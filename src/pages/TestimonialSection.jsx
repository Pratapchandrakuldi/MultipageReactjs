// import { useState } from 'react';

// const testimonials = [
//   {
//     id: 1,
//     name: 'John Doe',
//     feedback: 'Great service! Highly recommended.',
//     image: 'src/assets/testimonials/1.jpeg',
//   },
//   {
//     id: 2,
//     name: 'Jane Smith',
//     feedback: 'Amazing experience. Will use again.',
//     image: '/images/user2.jpg',
//   },
//   {
//     id: 3,
//     name: 'Alex Johnson',
//     feedback: 'Top-notch quality and support.',
//     image: '/images/user3.jpg',
//   },
// ];

// export default function TestimonialSection() {
//   const [selectedImage, setSelectedImage] = useState(null);

//   return (
//     <section className="py-10 bg-gray-100">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {testimonials.map((testimonial) => (
//             <div key={testimonial.id} className="bg-gray p-4 rounded-lg shadow-lg">
//               <img
//                 src={testimonial.image}
//                 alt={testimonial.name}
//                 className="w-24 h-24 mx-auto rounded-full cursor-pointer"
//                 onClick={() => setSelectedImage(testimonial.image)}
//               />
//               <p className="mt-4 text-gray-700">"{testimonial.feedback}"</p>
//               <h3 className="mt-2 font-semibold">- {testimonial.name}</h3>
//             </div>
//           ))}
//         </div>
//       </div>

//       {selectedImage && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="relative">
//             <img src={selectedImage} alt="Selected" className="max-w-full max-h-screen rounded-lg" />
//             <button
//               className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md text-red"
//               onClick={() => setSelectedImage(null)}
//             >
//               ✖
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }





import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    feedback: "Amazing service! Highly recommended.",
    image: "src/assets/testimonials/1.jpeg",
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback: "Professional and efficient!",
    image: "src/assets/testimonials/2.jpeg",
  },
  {
    id: 3,
    name: "Michael Brown",
    feedback: "Great experience with the team.",
    image: "src/assets/testimonials/3.jpeg",
  },
];

export default function Testimonials() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-12 bg-gray-100 mt-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-4 rounded-lg shadow-lg text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto cursor-pointer"
                onClick={() => setSelectedImage(testimonial.image)}
              />
              <h3 className="text-lg font-semibold mt-4">{testimonial.name}</h3>
              <p className="text-gray-600">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="relative p-4 bg-gray-300 rounded-lg">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-red-100% text-2xl font-bold cursor-pointer"
            >
              ✖
            </button>
            <img src={selectedImage} alt="Testimonial" className="max-w-full max-h-[80vh] rounded" />
          </div>
        </div>
      )}
    </section>
  );
}

