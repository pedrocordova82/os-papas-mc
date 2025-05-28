import { motion } from 'framer-motion';
import { Calendar, Users, MapPin, Image } from 'lucide-react';
import EventCard from '../components/EventCard';
import GallerySection from '../components/GallerySection';
import TestimonialCard from '../components/TestimonialCard';

const HomePage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 * custom, duration: 0.5 }
    })
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 to-dark/80"></div>
        <div className="container-custom relative h-full flex flex-col justify-center items-center text-center">
          <motion.div 
            className="w-48 h-48 md:w-64 md:h-64 mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <img 
              src="https://mcospapas.com.br/wp-content/uploads/2020/06/Logo-OsPapas-282x300.png" 
              alt="Os Papas Motorcycle Club" 
              className="w-full h-full object-contain"
            />
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-heading text-white mb-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            OS PAPAS
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            FRATRES IN VIA <span className="text-primary">•</span> BROTHERS ON THE ROAD
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            <a href="#about" className="btn btn-primary mr-4">Explore Mais</a>
            <a href="/contacts" className="btn btn-outline">Rode com a Gente</a>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-light">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-heading mb-4">SOBRE OS PAPAS</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-700">
              Founded in 2014, Os Papas is more than just a motorcycle club. We are a brotherhood united by our passion for the open road and the freedom that comes with it.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <motion.div 
              className="bg-white rounded-lg shadow-md p-8 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeIn}
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Founded</h3>
              <p className="text-gray-600">Established in 2014 with a vision of brotherhood and adventure.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-md p-8 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeIn}
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Members</h3>
              <p className="text-gray-600">A growing community of passionate riders from all walks of life.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-md p-8 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              variants={fadeIn}
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rides</h3>
              <p className="text-gray-600">Countless miles traveled across countries, creating memories that last a lifetime.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-md p-8 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
              variants={fadeIn}
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Image size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Events</h3>
              <p className="text-gray-600">Regular gatherings, charity rides, and annual celebrations for members and friends.</p>
            </motion.div>
          </div>

          <motion.div 
            className="mt-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={5}
            variants={fadeIn}
          >
            <a href="/our-story" className="btn btn-primary">Leia Nossa História Compelta</a>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-dark text-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-heading mb-4">PRÓXIMOS GIROS E EVENTOS</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-300">
              Join us for our upcoming adventures and gatherings. All rides are open to members and invited guests.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EventCard 
              title="Sunday Mountain Ride"
              date="May 15, 2025"
              location="Blue Ridge Mountains"
              description="A scenic ride through the beautiful mountains with stops at local diners and viewpoints."
              image="https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              delay={1}
            />
            
            <EventCard 
              title="Annual Charity Ride"
              date="June 10, 2025"
              location="Downtown to Lakeside"
              description="Our biggest event of the year supporting local children's hospital with a 200 mile ride."
              image="https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              delay={2}
            />
            
            <EventCard 
              title="Weekend Camping Trip"
              date="July 22-24, 2025"
              location="Pine Forest Campgrounds"
              description="Three days of riding, camping, and brotherhood in the wilderness."
              image="https://images.pexels.com/photos/5807534/pexels-photo-5807534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              delay={3}
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <GallerySection />

      {/* Testimonials Section */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-heading mb-4">WHAT OUR BROTHERS SAY</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-700">
              Hear from our members about what makes Os Papas more than just a motorcycle club.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Joining Os Papas changed my life. The brotherhood and support I've found here goes beyond motorcycles – it's family."
              name="Miguel Santos"
              title="Member since 2016"
              image="https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              delay={1}
            />
            
            <TestimonialCard 
              quote="The rides are amazing, but it's the people that make this club special. We look out for each other on and off the road."
              name="Carlos Rodriguez"
              title="Member since 2018"
              image="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              delay={2}
            />
            
            <TestimonialCard 
              quote="From my first ride with Os Papas, I knew I'd found my people. The camaraderie and shared passion for riding is unmatched."
              name="Andre Ferreira"
              title="Member since 2019"
              image="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              delay={3}
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-dark text-white">
        <div className="container-custom">
          <motion.div 
            className="bg-gradient-to-r from-secondary/80 to-secondary rounded-lg p-12 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading mb-4">READY TO RIDE WITH OS PAPAS?</h2>
            <p className="text-xl mb-8 text-gray-100">
              Join our brotherhood and experience the freedom of the open road together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contacts" className="btn btn-primary">Fale Conosco</a>
              <a href="/head-office" className="btn btn-outline border-white text-white hover:bg-white hover:text-secondary">Visite Nosso Moto Clube</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;