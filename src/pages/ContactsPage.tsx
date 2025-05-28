import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const ContactsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real application, you would send this data to a server
    setFormSubmitted(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    // Reset submission state after 5 seconds
    setTimeout(() => setFormSubmitted(false), 5000);
  };

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
            FALE CONOSCO
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
            Get in touch with the Os Papas Motorcycle Club. We'd love to hear from you!
          </motion.p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeIn}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-heading mb-4">ENTRE EM CONTATO</h2>
                <div className="w-24 h-1 bg-primary mb-6"></div>
                <p className="text-gray-700 mb-8">
                  Have questions about Os Papas Motorcycle Club or interested in joining? We'd love to hear from you. Fill out the form or use our contact details below.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/20 p-3 rounded-full mr-4">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Phone</h3>
                    <a href="tel:+1234567890" className="text-gray-700 hover:text-primary transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/20 p-3 rounded-full mr-4">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Email</h3>
                    <a href="mailto:info@ospapas.com" className="text-gray-700 hover:text-primary transition-colors">
                      info@ospapas.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/20 p-3 rounded-full mr-4">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Address</h3>
                    <p className="text-gray-700">
                      123 Ride Street, Motorcycle City, MC 12345
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary/10 hover:bg-primary/20 p-3 rounded-full transition-colors"
                  >
                    <Facebook size={24} className="text-primary" />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary/10 hover:bg-primary/20 p-3 rounded-full transition-colors"
                  >
                    <Instagram size={24} className="text-primary" />
                  </a>
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary/10 hover:bg-primary/20 p-3 rounded-full transition-colors"
                  >
                    <Youtube size={24} className="text-primary" />
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeIn}
            >
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-heading mb-6">Nos envie uma mensagem</h3>
                
                {formSubmitted ? (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                    <p>Thank you for your message! We'll get back to you soon.</p>
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">Email *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-2">Phone</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-gray-700 mb-2">Subject *</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="membership">Membership Information</option>
                        <option value="events">Events & Rides</option>
                        <option value="sponsorship">Sponsorship</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">Message *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button 
                      type="submit" 
                      className="btn btn-primary w-full"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
            <h2 className="text-4xl font-heading mb-4">FREQUENTLY ASKED QUESTIONS</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-300">
              Common questions about Os Papas Motorcycle Club.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="bg-gray-800 rounded-lg mb-4 overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeIn}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">How can I join Os Papas Motorcycle Club?</h3>
                <p className="text-gray-300">
                  To join Os Papas, you need to attend one of our open events or visit our clubhouse during operating hours. You'll need to meet with current members, express your interest, and go through our prospect period before becoming a full member.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-gray-800 rounded-lg mb-4 overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeIn}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">Do I need a specific type of motorcycle to join?</h3>
                <p className="text-gray-300">
                  While we welcome all riders, we do require members to own and regularly ride a motorcycle. We don't restrict based on make or model, but we appreciate a passion for riding and maintenance.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-gray-800 rounded-lg mb-4 overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              variants={fadeIn}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">Are your events open to non-members?</h3>
                <p className="text-gray-300">
                  Some of our events are open to the public, especially our charity rides and community events. Club meetings and certain rides are reserved for members only. Check our event calendar for details on which events welcome guests.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-gray-800 rounded-lg overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
              variants={fadeIn}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">How often do you organize rides?</h3>
                <p className="text-gray-300">
                  We have regular weekly rides every Saturday and Sunday, weather permitting. We also organize longer trips several times a year, including multi-day adventures and international tours.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Us Call to Action */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <motion.div 
            className="bg-dark rounded-lg p-12 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading text-white mb-4">JOIN OUR BROTHERHOOD</h2>
            <p className="text-xl mb-8 text-gray-300">
              Become part of Os Papas Motorcycle Club and experience the freedom of the road with brothers who share your passion.
            </p>
            <a href="#" className="btn btn-primary">Apply for Membership</a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactsPage;