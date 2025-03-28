
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroSection = ({ 
  title, 
  subtitle, 
  ctaText = "Get Started", 
  ctaLink = "/contact" 
}: HeroSectionProps) => {
  return (
    <div className="relative px-4 py-24 md:py-32 bg-gradient-to-br from-finblue-50 to-blue-100 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute right-0 top-0 w-80 h-80 bg-fingold-300 rounded-full filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute left-0 bottom-0 w-80 h-80 bg-finblue-300 rounded-full filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gradient animate-fade-up">
            {title}
          </h1>
          <p className="text-xl text-gray-700 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {subtitle}
          </p>
          <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button asChild className="bg-finblue-600 hover:bg-finblue-700 text-white px-8 py-6 rounded-md text-lg">
              <Link to={ctaLink}>
                {ctaText} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
