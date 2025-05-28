import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

type EventCardProps = {
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  delay: number;
};

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  location,
  description,
  image,
  delay
}) => {
  return (
    <motion.div 
      className="bg-dark-800 rounded-lg overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay * 0.1, duration: 0.5 }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-heading text-primary mb-2">{title}</h3>
        
        <div className="flex items-center mb-2 text-gray-300">
          <Calendar size={16} className="mr-2" />
          <span>{date}</span>
        </div>
        
        <div className="flex items-center mb-4 text-gray-300">
          <MapPin size={16} className="mr-2" />
          <span>{location}</span>
        </div>
        
        <p className="text-gray-400 mb-6">{description}</p>
        
        <a 
          href="#" 
          className="inline-block text-primary border-b-2 border-primary pb-1 hover:text-primary/80 hover:border-primary/80 transition-colors"
        >
          Learn More
        </a>
      </div>
    </motion.div>
  );
};

export default EventCard;