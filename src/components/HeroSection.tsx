
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
    <div className="relative px-4 py-16 md:py-24 bg-gradient-to-br from-black to-[#1a1a1a] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute right-0 top-0 w-80 h-80 bg-fingold-400 rounded-full filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute left-0 bottom-0 w-80 h-80 bg-fingold-400 rounded-full filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left column with text */}
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gradient animate-fade-up">
              {title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              {subtitle}
            </p>
            <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Button asChild className="bg-fingold-500 hover:bg-fingold-600 text-black px-8 py-6 rounded-md text-lg font-medium">
                <Link to={ctaLink}>
                  {ctaText} <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Right column with image */}
          <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative bg-[#111] rounded-lg shadow-xl overflow-hidden border border-fingold-500/20">
              <AspectRatio ratio={16/9} className="bg-[#111]">
                <img 
                  src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=1000&auto=format&fit=crop"
                  alt="Financial Growth" 
                  className="object-cover h-full w-full rounded-lg opacity-80"
                />
              </AspectRatio>
              <div className="absolute inset-0 bg-gradient-to-tr from-fingold-600/20 to-transparent rounded-lg"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-fingold-400 font-medium text-shadow">Financial growth and stability</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
