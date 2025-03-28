
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-finblue-700">Fingoal</span>
            <span className="text-2xl font-bold text-fingold-500">Solutions</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-finblue-600 font-medium">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-finblue-600 font-medium">Services</Link>
            <Link to="/about" className="text-gray-700 hover:text-finblue-600 font-medium">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-finblue-600 font-medium">Contact</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+919000000000" className="flex items-center text-sm text-gray-600 hover:text-finblue-600">
              <Phone className="h-4 w-4 mr-1" />
              +91 90000 00000
            </a>
            <Button variant="default" className="bg-finblue-600 hover:bg-finblue-700">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
          
          <button className="md:hidden text-gray-700" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-finblue-600 font-medium py-2" onClick={toggleMenu}>Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-finblue-600 font-medium py-2" onClick={toggleMenu}>Services</Link>
            <Link to="/about" className="text-gray-700 hover:text-finblue-600 font-medium py-2" onClick={toggleMenu}>About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-finblue-600 font-medium py-2" onClick={toggleMenu}>Contact</Link>
            <div className="flex items-center space-x-2 pt-2 border-t border-gray-200">
              <a href="tel:+919000000000" className="flex items-center text-sm text-gray-600">
                <Phone className="h-4 w-4 mr-1" />
                +91 90000 00000
              </a>
              <a href="mailto:info@fingoalsolutions.com" className="flex items-center text-sm text-gray-600">
                <Mail className="h-4 w-4 mr-1" />
                info@fingoalsolutions.com
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
