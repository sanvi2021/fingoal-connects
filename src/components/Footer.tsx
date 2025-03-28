
import { Link } from "react-router-dom";
import { PhoneCall, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white">Fingoal</span>
              <span className="text-2xl font-bold text-fingold-400">Solutions</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Providing comprehensive financial solutions for individuals and businesses since 2015.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-xl mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#ca" className="text-gray-300 hover:text-white transition-colors">CA Services</Link>
              </li>
              <li>
                <Link to="/services#loans" className="text-gray-300 hover:text-white transition-colors">Loan Processing</Link>
              </li>
              <li>
                <Link to="/services#portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio Management</Link>
              </li>
              <li>
                <Link to="/services#insurance" className="text-gray-300 hover:text-white transition-colors">Insurance Solutions</Link>
              </li>
              <li>
                <Link to="/services#tax" className="text-gray-300 hover:text-white transition-colors">Tax Planning</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-semibold text-xl mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <PhoneCall className="h-5 w-5 mr-3 text-fingold-400 mt-1" />
                <span className="text-gray-300">+91 90000 00000</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-fingold-400 mt-1" />
                <span className="text-gray-300">info@fingoalsolutions.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-fingold-400 mt-1" />
                <span className="text-gray-300">
                  123 Financial District,<br />
                  Hyderabad, Telangana 500032
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-6">
          <p className="text-gray-400 text-center text-sm">
            &copy; {currentYear} Fingoal Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
