
import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const AboutPage = () => {
  const values = [
    {
      title: "Integrity",
      description: "We maintain the highest standards of honesty and ethical conduct in all our dealings."
    },
    {
      title: "Excellence",
      description: "We strive for excellence in every service we provide to our clients."
    },
    {
      title: "Client-Centricity",
      description: "Our clients' needs and goals are at the center of everything we do."
    },
    {
      title: "Innovation",
      description: "We constantly innovate to deliver the best financial solutions in an evolving market."
    },
    {
      title: "Collaboration",
      description: "We believe in working together with our clients to achieve mutual success."
    },
    {
      title: "Continuous Learning",
      description: "We constantly update our knowledge to stay ahead in the financial industry."
    }
  ];

  const team = [
    {
      name: "Ravi Kumar",
      position: "Founder & CEO",
      bio: "With over 15 years of experience in financial services, Ravi founded Fingoal Solutions with a vision to provide integrated financial solutions."
    },
    {
      name: "Priya Sharma",
      position: "Head of CA Services",
      bio: "Priya is a Chartered Accountant with expertise in taxation, auditing, and financial consulting for businesses of all sizes."
    },
    {
      name: "Amit Patel",
      position: "Loan Processing Specialist",
      bio: "Amit has built strong relationships with major banks and NBFCs to ensure our clients get the best loan terms available."
    },
    {
      name: "Neha Singh",
      position: "Portfolio Manager",
      bio: "Neha brings her wealth of experience in investment management to create optimized portfolios for our clients."
    }
  ];

  return (
    <>
      <Header />
      <main>
        <HeroSection 
          title="About Fingoal Solutions"
          subtitle="Your trusted partner for comprehensive financial services since 2015. Learn about our mission, values, and expert team."
          ctaText="Meet Our Team"
          ctaLink="#team"
        />

        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Fingoal Solutions was founded in 2015 with a simple yet powerful vision: to provide integrated financial solutions that address the diverse needs of individuals and businesses alike.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  What began as a small team of financial experts has grown into a comprehensive financial services firm trusted by hundreds of clients across the country.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Our journey has been marked by a commitment to excellence, integrity, and client satisfaction. We understand that financial decisions are some of the most important ones you'll make, and we take our role in guiding those decisions seriously.
                </p>
                <p className="text-lg text-gray-700">
                  Today, we continue to expand our services and expertise, staying ahead of market trends and regulatory changes to ensure our clients receive the best possible financial guidance.
                </p>
              </div>
              <div className="bg-finblue-50 p-8 rounded-2xl relative">
                <div className="absolute -top-5 -left-5 w-24 h-24 bg-fingold-100 rounded-lg transform rotate-6"></div>
                <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-finblue-100 rounded-lg transform -rotate-6"></div>
                <div className="relative bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold mb-4 text-finblue-700">Our Mission</h3>
                  <p className="text-gray-700 mb-6">
                    To empower individuals and businesses with tailored financial solutions that foster growth, security, and prosperity.
                  </p>
                  <h3 className="text-2xl font-bold mb-4 text-finblue-700">Our Vision</h3>
                  <p className="text-gray-700">
                    To be the most trusted financial solutions provider, recognized for our integrity, expertise, and client-centric approach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 bg-finblue-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide everything we do at Fingoal Solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <CheckCircle2 className="h-6 w-6 text-finblue-600 mr-2" />
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                  </div>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white" id="team">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our expert team brings together decades of experience in various financial disciplines.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-64 bg-finblue-200 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center text-4xl text-finblue-600 font-bold">
                      {member.name.charAt(0)}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-finblue-600 mb-4">{member.position}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-finblue-600 to-finblue-800 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Financial Future?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Partner with Fingoal Solutions and take the first step toward achieving your financial goals.
            </p>
            <Button asChild variant="outline" className="bg-white text-finblue-700 hover:bg-gray-100 border-white px-8 py-6 rounded-md text-lg">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default AboutPage;
