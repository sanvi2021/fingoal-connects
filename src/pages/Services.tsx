
import { BarChart4, Book, Briefcase, FileText, Shield, CalculatorIcon } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const services = [
    {
      id: "ca",
      icon: Book,
      title: "CA Services",
      description: "Our team of experienced Chartered Accountants provides comprehensive accounting, auditing, and advisory services. We handle everything from financial statements and tax filings to compliance matters and business consulting.",
      features: [
        "Financial statement preparation and analysis",
        "Tax planning and compliance",
        "Statutory and internal audits",
        "Business restructuring advisory",
        "GST registration and filing"
      ]
    },
    {
      id: "loans",
      icon: Briefcase,
      title: "Loan Processing",
      description: "We simplify loan acquisition by handling the entire process from application to disbursement. Our partnerships with leading banks and NBFCs allow us to secure competitive interest rates for various loan types.",
      features: [
        "Home loans with competitive interest rates",
        "Business loans for expansion and working capital",
        "Personal loans for various needs",
        "Education loans for higher studies",
        "Project financing for businesses"
      ]
    },
    {
      id: "portfolio",
      icon: BarChart4,
      title: "Portfolio Management",
      description: "Our expert portfolio managers create and maintain investment portfolios designed to meet your financial goals. We focus on long-term growth while managing risk according to your comfort level.",
      features: [
        "Customized investment strategies",
        "Regular portfolio performance review",
        "Asset allocation optimization",
        "Risk assessment and management",
        "Long-term wealth planning"
      ]
    },
    {
      id: "insurance",
      icon: Shield,
      title: "Insurance Solutions",
      description: "We offer a wide range of insurance solutions from both government and private firms. Our advisors help you select the right coverage to protect your assets, health, and future.",
      features: [
        "Health insurance for individuals and families",
        "Life insurance policies with investment components",
        "Property and casualty insurance",
        "Business liability insurance",
        "Group insurance for organizations"
      ]
    },
    {
      id: "tax",
      icon: FileText,
      title: "Tax Planning",
      description: "Our tax planning services help individuals and businesses minimize tax liabilities legally. We stay updated with the latest tax laws to provide effective strategies for tax efficiency.",
      features: [
        "Individual income tax planning",
        "Corporate tax strategy development",
        "Tax-saving investment guidance",
        "Estate tax planning",
        "Tax compliance and filing"
      ]
    },
    {
      id: "advisory",
      icon: CalculatorIcon,
      title: "Financial Advisory",
      description: "Our financial advisors provide personalized guidance to help you achieve your financial goals. We take a holistic approach to understand your needs and develop comprehensive strategies.",
      features: [
        "Retirement planning",
        "Educational funding strategies",
        "Debt management solutions",
        "Budgeting and cash flow analysis",
        "Estate planning and wealth transfer"
      ]
    }
  ];

  return (
    <>
      <Header />
      <main>
        <HeroSection 
          title="Our Comprehensive Financial Services"
          subtitle="Explore our range of specialized financial services designed to secure your financial future and achieve your goals."
          ctaText="Contact Us Now"
        />

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Service Offerings</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                At Fingoal Solutions, we provide a complete suite of financial services to address all your needs under one roof.
              </p>
            </div>

            <div className="space-y-16">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  id={service.id}
                  className={`scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={`flex flex-col justify-center ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-finblue-100 flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-finblue-600" />
                      </div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-6 text-lg">
                      {service.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-lg">Our Offerings Include:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="h-6 w-6 rounded-full bg-finblue-100 flex items-center justify-center mr-3 mt-0.5">
                              <span className="text-finblue-600 text-sm">✓</span>
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button asChild className="self-start bg-finblue-600 hover:bg-finblue-700">
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </div>
                  <div className={`bg-gradient-to-br from-finblue-50 to-blue-100 rounded-2xl p-8 flex items-center justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <service.icon className="h-48 w-48 text-finblue-400 opacity-80" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-finblue-50">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to Transform Your Financial Future?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Contact us today for a free consultation and discover how our services can help you achieve your financial goals.
            </p>
            <Button asChild className="bg-finblue-600 hover:bg-finblue-700 text-white px-8 py-6 rounded-md text-lg">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default ServicesPage;
