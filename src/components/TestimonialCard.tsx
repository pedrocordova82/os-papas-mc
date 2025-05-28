import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

type TestimonialCardProps = {
  quote: string;
  name: string;
  title: string;
  image: string;
  delay: number;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  title,
  image,
  delay
}) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md p-8 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay * 0.1, duration: 0.5 }}
    >
      <div className="absolute -top-5 left-8">
        <div className="bg-primary rounded-full p-2">
          <Quote size={20} className="text-dark" />
        </div>
      </div>
      <p className="text-gray-700 mb-6 pt-4">{quote}</p>
      <div className="flex items-center">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-dark">{name}</h4>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;