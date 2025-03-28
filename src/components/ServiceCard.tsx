
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ icon: Icon, title, description, link }: ServiceCardProps) => {
  return (
    <Card className="border-gray-200 transition-all duration-300 hover:shadow-md hover:border-finblue-300">
      <CardHeader className="pb-2">
        <div className="w-12 h-12 rounded-full bg-finblue-100 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-finblue-600" />
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 mb-4">{description}</CardDescription>
        <Button variant="outline" asChild className="text-finblue-600 hover:text-finblue-700 border-finblue-200 hover:border-finblue-300 hover:bg-finblue-50">
          <Link to={link}>
            Learn More
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
