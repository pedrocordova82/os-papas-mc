import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/2519374/pexels-photo-2519374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Motorcycle on mountain road"
  },
  {
    id: 2,
    src: "https://i0.statig.com.br/bancodeimagens/53/bf/bs/53bfbsnaf7blbm6wbebcgf7sy.jpg",
    alt: "Motorcycle racing"
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/595807/pexels-photo-595807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Group of motorcycles parked"
  },
  {
    id: 4,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnOkMk2rk4igRRsZ3y3W98wr55J5mCvY8SBGIs8pNlwK9vt-4LTWbkHZNiwOWPWAE7rB8&usqp=CAU",
    alt: "Motorcyclist riding on road"
  },
  {
    id: 5,
    src: "https://motos.net.br/wp-content/uploads/melhores-motos-retro-modernas-bmw-r.jpg",
    alt: "Vintage motorcycle"
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/2393816/pexels-photo-2393816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Motorcycle club gathering"
  }
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<{id: number; src: string; alt: string} | null>(null);

  const openLightbox = (image: {id: number; src: string; alt: string}) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <>
      <section id="gallery" className="py-20 bg-texture bg-dark text-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-heading mb-4">NOSSA GALERIA</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-300">
              Moments captured from our rides, events, and gatherings.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {galleryImages.map((image) => (
              <motion.div 
                key={image.id} 
                className="overflow-hidden rounded-lg cursor-pointer h-64 relative group"
                variants={item}
                onClick={() => openLightbox(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/50 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="text-white font-semibold">View Image</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <a href="#" className="btn btn-outline">View All Photos</a>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-primary"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          <div 
            className="max-w-4xl max-h-[80vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;