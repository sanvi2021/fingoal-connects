
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
        <div className="text-center px-4">
          <h1 className="text-9xl font-bold text-finblue-600 mb-4">404</h1>
          <p className="text-3xl text-gray-800 mb-8">Page Not Found</p>
          <p className="text-xl text-gray-600 max-w-md mx-auto mb-10">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="bg-finblue-600 hover:bg-finblue-700">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
