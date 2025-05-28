import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Calendar, Users } from 'lucide-react';

const HeadOfficePage = () => {
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
      <section className="relative h-[60vh] bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 to-dark/90"></div>
        <div className="container-custom relative h-full flex flex-col justify-center">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-heading text-white mb-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            SEDES
          </motion.h1>
          <motion.div 
            className="w-24 h-1 bg-primary mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          ></motion.div>
          <motion.p 
            className="text-xl text-gray-200 max-w-2xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            Visit our clubhouse, the heart of Os Papas Motorcycle Club.
          </motion.p>
        </div>
      </section>

      {/* Location Info Section */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeIn}
            >
              <h2 className="text-4xl font-heading mb-4">VISIT OUR CLUBHOUSE</h2>
              <div className="w-24 h-1 bg-primary mb-6"></div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/20 p-3 rounded-full mr-4">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Address</h3>
                    <p className="text-gray-700">123 Ride Street, Motorcycle City, MC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/20 p-3 rounded-full mr-4">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Open Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 4 PM - 11 PM</p>
                    <p className="text-gray-700">Saturday - Sunday: 12 PM - 1 AM</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/20 p-3 rounded-full mr-4">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Contact</h3>
                    <p className="text-gray-700">Phone: +1 (234) 567-890</p>
                    <p className="text-gray-700">Email: office@ospapas.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <a href="/contacts" className="btn btn-primary">Fale Conosco</a>
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeIn}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              {/* We'll embed a map here - in a real implementation this would be an actual map component */}
              <div className="aspect-video bg-gray-300 w-full h-[400px] flex items-center justify-center">
                <img 
                  src="https://images.pexels.com/photos/14286166/pexels-photo-14286166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Head Office Location" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-dark/40 flex items-center justify-center">
                  <p className="text-white text-xl font-semibold">Interactive Map</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-dark text-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-heading mb-4">OUR FACILITIES</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-300">
              Our clubhouse offers everything a rider needs, from maintenance facilities to relaxation areas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-gray-800 rounded-lg p-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeIn}
            >
              <div className="aspect-video mb-6 overflow-hidden rounded-md">
                <img 
                  src="https://images.pexels.com/photos/12303693/pexels-photo-12303693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Maintenance Garage" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-heading text-primary mb-3">Maintenance Garage</h3>
              <p className="text-gray-400">
                Fully equipped workshop where members can maintain and customize their bikes with professional tools and assistance.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-800 rounded-lg p-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeIn}
            >
              <div className="aspect-video mb-6 overflow-hidden rounded-md">
                <img 
                  src="https://images.pexels.com/photos/4571925/pexels-photo-4571925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Club Lounge" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-heading text-primary mb-3">Club Lounge</h3>
              <p className="text-gray-400">
                A comfortable space for members to relax, socialize, and share stories from the road with fellow riders.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-800 rounded-lg p-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              variants={fadeIn}
            >
              <div className="aspect-video mb-6 overflow-hidden rounded-md">
                <img 
                  src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Meeting Room" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-heading text-primary mb-3">Meeting Hall</h3>
              <p className="text-gray-400">
                Where we hold our monthly club meetings, plan our rides, and organize community events and charity initiatives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-heading mb-4">WEEKLY SCHEDULE</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-700">
              Regular events at our clubhouse. Members and guests are always welcome!
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <motion.div 
                  className="p-8 flex flex-col space-y-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={1}
                  variants={fadeIn}
                >
                  <div className="flex items-start">
                    <div className="bg-primary/20 p-3 rounded-full mr-4">
                      <Calendar className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Monday</h3>
                      <p className="text-gray-600">Maintenance Workshop (6 PM - 9 PM)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/20 p-3 rounded-full mr-4">
                      <Calendar className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Wednesday</h3>
                      <p className="text-gray-600">New Member Orientation (7 PM - 8 PM)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/20 p-3 rounded-full mr-4">
                      <Calendar className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Friday</h3>
                      <p className="text-gray-600">Social Night (8 PM - Late)</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="p-8 flex flex-col space-y-6 bg-gray-50"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={2}
                  variants={fadeIn}
                >
                  <div className="flex items-start">
                    <div className="bg-primary/20 p-3 rounded-full mr-4">
                      <Calendar className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Thursday</h3>
                      <p className="text-gray-600">Club Meeting (7 PM - 9 PM)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/20 p-3 rounded-full mr-4">
                      <Calendar className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Saturday</h3>
                      <p className="text-gray-600">Group Ride (10 AM - 5 PM)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/20 p-3 rounded-full mr-4">
                      <Calendar className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Sunday</h3>
                      <p className="text-gray-600">Brunch Ride (11 AM - 3 PM)</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Info */}
      <section className="py-20 bg-texture bg-dark text-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-heading mb-4">CLUB MEMBERSHIP</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-300">
              Interested in becoming an Os Papas member? Learn about our membership process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-gray-800/60 rounded-lg p-8 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeIn}
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={24} className="text-primary" />
              </div>
              <h3 className="text-2xl font-heading text-white mb-3">Prospect Period</h3>
              <p className="text-gray-300">
                New members go through a 3-month prospect period to learn about the club and demonstrate their commitment to our values.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-primary text-dark rounded-lg p-8 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeIn}
            >
              <div className="w-16 h-16 bg-dark/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar size={24} className="text-dark" />
              </div>
              <h3 className="text-2xl font-heading text-dark mb-3">Requirements</h3>
              <p className="text-dark/80">
                Members must own a motorcycle, attend monthly meetings, participate in group rides, and uphold the club's values and code of conduct.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-gray-800/60 rounded-lg p-8 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              variants={fadeIn}
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin size={24} className="text-primary" />
              </div>
              <h3 className="text-2xl font-heading text-white mb-3">How to Apply</h3>
              <p className="text-gray-300">
                Visit our clubhouse during open hours or attend one of our open events to meet current members and express your interest in joining.
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            variants={fadeIn}
          >
            <a href="/contacts" className="btn btn-primary">Contact for More Information</a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HeadOfficePage;