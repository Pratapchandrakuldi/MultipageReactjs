// components/common/Footer.jsx
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CRCIDF</h3>
            <p className="text-gray-400">Advanced digital forensics and cybersecurity solutions</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-blue-500">About Us</Link></li>
              <li><Link to="/key-services" className="text-gray-400 hover:text-blue-500">Services</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-blue-500">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">24/7 Support: +1-555-1234</li>
              <li className="text-gray-400">Email: info@crcidf.com</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CRCIDF. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}