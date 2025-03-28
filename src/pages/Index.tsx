
import { BarChart4, Book, Briefcase, FileText, Shield, CalculatorIcon } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const services = [
    {
      icon: Book,
      title: "CA Services",
      description: "Comprehensive chartered accountancy services including auditing, accounting, and financial reporting.",
      link: "/services#ca"
    },
    {
      icon: Briefcase,
      title: "Loan Processing",
      description: "End-to-end loan processing services from various banks and NBFCs with the best interest rates.",
      link: "/services#loans"
    },
    {
      icon: BarChart4,
      title: "Portfolio Management",
      description: "Expert portfolio management to optimize your investments and maximize returns.",
      link: "/services#portfolio"
    },
    {
      icon: Shield,
      title: "Insurance Solutions",
      description: "Tailored insurance solutions from both government and private firms to protect what matters most.",
      link: "/services#insurance"
    },
    {
      icon: FileText,
      title: "Tax Planning",
      description: "Strategic tax planning and compliance services to minimize tax liabilities legally.",
      link: "/services#tax"
    },
    {
      icon: CalculatorIcon,
      title: "Financial Advisory",
      description: "Personalized financial advisory services to help you achieve your financial goals.",
      link: "/services#advisory"
    }
  ];

  const testimonials = [
    {
      quote: "Fingoal Solutions helped me secure a business loan at an excellent interest rate. Their process was smooth and hassle-free.",
      author: "Rahul Sharma",
      position: "Business Owner",
      rating: 5
    },
    {
      quote: "Their tax planning services saved our company significant money. Highly professional team with deep expertise.",
      author: "Priya Patel",
      position: "CFO, TechStart Ltd",
      rating: 5
    },
    {
      quote: "The portfolio management service has consistently delivered above-market returns for my investments.",
      author: "Amit Kumar",
      position: "Retired Professor",
      rating: 4
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <HeroSection 
          title="Your Complete Financial Solution Partner"
          subtitle="Expert financial services including CA work, loan processing, portfolio management, and insurance solutions, all under one roof."
        />

        {/* Services Section */}
        <section className="py-16 bg-white" id="services">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From CA services to insurance solutions, we offer comprehensive financial services tailored to your needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard 
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  link={service.link}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-finblue-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Choose Fingoal Solutions?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine expertise, personalized service, and modern solutions to meet all your financial needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-finblue-100 flex items-center justify-center mb-4">
                  <span className="text-finblue-600 font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                <p className="text-gray-600">
                  Our team consists of experienced CAs, financial advisors, and insurance experts with deep industry knowledge.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-finblue-100 flex items-center justify-center mb-4">
                  <span className="text-finblue-600 font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">One-Stop Solution</h3>
                <p className="text-gray-600">
                  All your financial needs are addressed under one roof, saving you time and ensuring integrated solutions.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-finblue-100 flex items-center justify-center mb-4">
                  <span className="text-finblue-600 font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Tailored Approach</h3>
                <p className="text-gray-600">
                  We understand that each client is unique, so we customize our solutions to match your specific requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">What Our Clients Say</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't just take our word for it - hear from our satisfied clients.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  position={testimonial.position}
                  rating={testimonial.rating}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50" id="contact">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Get In Touch</h2>
                <p className="text-xl text-gray-600 mb-6">
                  Have questions or need a consultation? Fill out the form and we'll get back to you promptly.
                </p>
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <ContactForm />
                </div>
              </div>
              
              <div className="flex flex-col justify-center">
                <div className="bg-white p-8 rounded-lg shadow-sm h-full">
                  <h3 className="text-2xl font-semibold mb-6">Our Office</h3>
                  <div className="aspect-w-16 aspect-h-9 mb-6">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3178502285!2d78.24323996681364!3d17.412281017471756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1660228617226!5m2!1sen!2sin" 
                      width="100%" 
                      height="300" 
                      style={{ border: 0 }} 
                      allowFullScreen={true} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Office Location"
                      className="rounded-md"
                    ></iframe>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      <strong>Address:</strong> 123 Financial District, Hyderabad, Telangana 500032
                    </p>
                    <p className="text-gray-700">
                      <strong>Email:</strong> info@fingoalsolutions.com
                    </p>
                    <p className="text-gray-700">
                      <strong>Phone:</strong> +91 90000 00000
                    </p>
                    <p className="text-gray-700">
                      <strong>Hours:</strong> Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
