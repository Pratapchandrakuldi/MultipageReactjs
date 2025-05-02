// // components/common/Navigation.jsx
// import { Shield } from 'lucide-react';
// import { useState } from 'react';
// // import Button from './Button';
// // Update the import in Navigation.jsx
// import { Button } from '@mui/material';

// export default function Navigation() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-sm fixed w-full z-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <Shield className="h-8 w-8 text-blue-600" />
//             <span className="ml-2 text-xl font-bold text-gray-900">CyberForensics</span>
//           </div>

//           <div className="hidden md:flex items-center space-x-8">
//             <a href="#" className="text-gray-700 hover:text-blue-600">HOME</a>
//             <a href="#" className="text-gray-700 hover:text-blue-600">RESEARCH & ADVOCACY</a>
//             <a href="#" className="text-gray-700 hover:text-blue-600">KEY SERVICES</a>
//             <a href="#" className="text-gray-700 hover:text-blue-600">MEDIA & GALLERY</a>

//             <div className="relative">
//               <button 
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="text-gray-700 hover:text-blue-600 focus:outline-none"
//               >
//                 MORE ▼
//               </button>

//               {isMenuOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
//                   <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About Us</a>
//                   <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Careers</a>
//                   <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Resources</a>
//                   <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Partners</a>
//                 </div>
//               )}
//             </div>

//             <Button variant="primary">Emergency Response</Button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }





// import { Shield, Menu, X } from 'lucide-react';
// import { useState } from 'react';
// import { Button } from '@mui/material';

// export default function Navigation() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           {/* Logo Section */}
//           <div className="flex items-center">
//             <Shield className="h-8 w-8 text-blue-600" />
//             <span className="ml-2 text-xl font-bold text-gray-900">CyberForensics</span>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-6">
//             <a href="#" className="text-gray-700 hover:text-blue-600">HOME</a>
//             <a href="#" className="text-gray-700 hover:text-blue-600">RESEARCH & ADVOCACY</a>
//             <a href="#" className="text-gray-700 hover:text-blue-600">KEY SERVICES</a>
//             <a href="#" className="text-gray-700 hover:text-blue-600">MEDIA & GALLERY</a>

//             {/* Dropdown Menu for Desktop */}
//             <div className="relative">
//               <button 
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 className="text-gray-700 hover:text-blue-600 focus:outline-none"
//               >
//                 MORE ▼
//               </button>

//               {isDropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
//                   <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About Us</a>
//                   <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Careers</a>
//                   <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Resources</a>
//                   <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Partners</a>
//                 </div>
//               )}
//             </div>

//             {/* Emergency Button */}
//             <Button variant="contained" color="primary">Emergency Response</Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-blue-600 focus:outline-none">
//               {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu (Slide Down) */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white shadow-md py-4 px-6 absolute w-full top-16 left-0 transition-all duration-300">
//           <a href="#" className="block text-gray-700 hover:text-blue-600 py-2">HOME</a>
//           <a href="#" className="block text-gray-700 hover:text-blue-600 py-2">RESEARCH & ADVOCACY</a>
//           <a href="#" className="block text-gray-700 hover:text-blue-600 py-2">KEY SERVICES</a>
//           <a href="#" className="block text-gray-700 hover:text-blue-600 py-2">MEDIA & GALLERY</a>

//           {/* Mobile Dropdown Menu */}
//           <div className="py-2">
//             <button 
//               onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//               className="w-full text-left text-gray-700 hover:text-blue-600 focus:outline-none"
//             >
//               MORE ▼
//             </button>

//             {isDropdownOpen && (
//               <div className="pl-4">
//                 <a href="#" className="block text-gray-700 hover:text-blue-600 py-1">About Us</a>
//                 <a href="#" className="block text-gray-700 hover:text-blue-600 py-1">Careers</a>
//                 <a href="#" className="block text-gray-700 hover:text-blue-600 py-1">Resources</a>
//                 <a href="#" className="block text-gray-700 hover:text-blue-600 py-1">Partners</a>
//               </div>
//             )}
//           </div>

//           {/* Emergency Button in Mobile View */}
//           <div className="mt-4">
//             <Button fullWidth variant="contained" color="primary">Emergency Response</Button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }




import { Shield, Menu, X, Sun, Moon } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@mui/material';
import { useTheme } from '../../context/ThemeContext';
import { NavLink } from 'react-router-dom';
import crcidfLogo from '../../assets/images/logo.png';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <div className="bg-white p-0 rounded-full flex items-center justify-center">
                <img src={crcidfLogo} alt="CRCIDF Logo" className="h-10 md:h-12 lg:h-14 object-contain" />
              </div>
              <span className="ml-2 text-xl font-bold">CRCIDF</span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/" className="hover:text-blue-600 dark:hover:text-blue-400">HOME</NavLink>
            <NavLink to="/research" className="hover:text-blue-600 dark:hover:text-blue-400">RESEARCH & ADVOCACY</NavLink>
            <NavLink to="/key-services" className="hover:text-blue-600 dark:hover:text-blue-400">KEY SERVICES</NavLink>
            <NavLink to="/media-gallery" className="hover:text-blue-600 dark:hover:text-blue-400">MEDIA & GALLERY</NavLink>

            {/* Dropdown Menu for Desktop */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onMouseEnter={() => setIsDropdownOpen(true)}
                className="hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
              >
                MORE ▼
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <NavLink to="/testimonialsection" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Testimonial</NavLink>
                  <NavLink to="/events" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Events</NavLink>
                  <NavLink to="/awards" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Awards</NavLink>
                  <NavLink to="/careers" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Careers</NavLink>
                  <NavLink to="/contact" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Contact Us</NavLink>
                </div>
              )}
            </div>

            {/* Theme Toggle Button */}
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
              {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
            </button>

            {/* Emergency Button */}
            <Button variant="contained" color="primary">Emergency Response</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
              {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
            </button>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Slide Down) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md py-4 px-6 absolute w-full top-16 left-0 transition-all duration-300">
          <NavLink to="/" className="block hover:text-blue-600 dark:hover:text-blue-400 py-2">HOME</NavLink>
          <NavLink to="/research" className="block hover:text-blue-600 dark:hover:text-blue-400 py-2">RESEARCH & ADVOCACY</NavLink>
          <NavLink to="/services" className="block hover:text-blue-600 dark:hover:text-blue-400 py-2">KEY SERVICES</NavLink>
          <NavLink to="/media" className="block hover:text-blue-600 dark:hover:text-blue-400 py-2">MEDIA & GALLERY</NavLink>

          {/* Mobile Dropdown Menu */}
          <div className="py-2">
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="w-full text-left hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none">
              MORE ▼
            </button>

            {isDropdownOpen && (
              <div className="pl-4">
                <NavLink to="/events" className="block hover:text-blue-600 dark:hover:text-blue-400 py-1">Events</NavLink>
                <NavLink to="/awards" className="block hover:text-blue-600 dark:hover:text-blue-400 py-1">Awards</NavLink>
                <NavLink to="/careers" className="block hover:text-blue-600 dark:hover:text-blue-400 py-1">Careers</NavLink>
                <NavLink to="/contact" className="block hover:text-blue-600 dark:hover:text-blue-400 py-1">Contact Us</NavLink>
              </div>
            )}
          </div>

          {/* Emergency Button in Mobile View */}
          <div className="mt-4">
            <Button fullWidth variant="contained" color="primary">Emergency Response</Button>
          </div>
        </div>
      )}
    </nav>
  );
}

