
import { Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  rating: number;
}

const TestimonialCard = ({ quote, author, position, rating }: TestimonialCardProps) => {
  return (
    <Card className="border-gray-200 h-full">
      <CardHeader className="pb-2">
        <div className="flex mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating ? "text-fingold-400 fill-fingold-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <blockquote className="italic text-gray-700 mb-4">"{quote}"</blockquote>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-gray-500">{position}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
