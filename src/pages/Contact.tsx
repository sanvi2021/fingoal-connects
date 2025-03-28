
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { PhoneCall, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: PhoneCall,
      title: "Phone",
      details: "+91 90000 00000",
      action: "tel:+919000000000",
      actionText: "Call us"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@fingoalsolutions.com",
      action: "mailto:info@fingoalsolutions.com",
      actionText: "Send an email"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "123 Financial District, Hyderabad, Telangana 500032",
      action: "https://maps.google.com",
      actionText: "Get directions"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday: 9:00 AM - 6:00 PM",
      action: null,
      actionText: null
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "+91 90000 00000",
      action: "https://wa.me/919000000000",
      actionText: "Message us"
    }
  ];

  const faqItems = [
    {
      question: "What types of loans can you help process?",
      answer: "We assist with various types of loans including home loans, business loans, personal loans, education loans, and more. Our partnerships with multiple banks and NBFCs allow us to find the best options for your specific needs."
    },
    {
      question: "How do you charge for your services?",
      answer: "Our fee structure varies depending on the service. For some services like loan processing, we receive commissions from the financial institutions. For others like CA services and portfolio management, we charge either a fixed fee or a percentage-based fee. We are completely transparent about our fees before you engage our services."
    },
    {
      question: "Do you offer remote consultations?",
      answer: "Yes, we provide both in-person and remote consultations via video call. Many of our services can be delivered entirely remotely for your convenience."
    },
    {
      question: "How soon can I expect a response after submitting an inquiry?",
      answer: "We typically respond to all inquiries within 24 business hours. For urgent matters, please call our office directly."
    }
  ];

  return (
    <>
      <Header />
      <main>
        <HeroSection 
          title="Contact Fingoal Solutions"
          subtitle="Reach out to us for any inquiries or to schedule a consultation. Our team is ready to assist you with all your financial needs."
          ctaText="Schedule a Call"
          ctaLink="#contact-form"
        />

        {/* Contact Information Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Get In Touch</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Whether you have a question or need assistance, we're here to help. Choose the method that works best for you.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-finblue-100 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-finblue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.details}</p>
                  {item.action && (
                    <a 
                      href={item.action} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-finblue-600 hover:underline font-medium"
                    >
                      {item.actionText}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Map Section */}
        <section className="py-16 bg-finblue-50" id="contact-form">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Send Us a Message</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Fill out the form below and our team will get back to you as soon as possible.
                </p>
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <ContactForm />
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Visit Our Office</h2>
                <p className="text-lg text-gray-600 mb-6">
                  We're conveniently located in the Financial District of Hyderabad. Feel free to stop by during business hours.
                </p>
                <div className="bg-white p-4 rounded-lg shadow-sm h-[460px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3178502285!2d78.24323996681364!3d17.412281017471756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1660228617226!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                    className="rounded-md"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about our services.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              {faqItems.map((item, index) => (
                <div key={index} className="mb-6 border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                  <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default ContactPage;
