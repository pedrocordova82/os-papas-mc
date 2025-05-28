import { motion } from 'framer-motion';

const OurStoryPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 * custom, duration: 0.5 }
    })
  };

  const milestones = [
    {
      year: "2014",
      title: "The Founding",
      description: "Os Papas was founded by a group of friends with a shared passion for motorcycles and brotherhood."
    },
    {
      year: "2016",
      title: "First Annual Rally",
      description: "We organized our first annual rally, bringing together motorcycle enthusiasts from all over the region."
    },
    {
      year: "2018",
      title: "Charity Initiative",
      description: "Launched our first major charity ride, raising funds for local children's hospitals."
    },
    {
      year: "2020",
      title: "International Chapter",
      description: "Expanded our reach with our first international chapter, strengthening our global brotherhood."
    },
    {
      year: "2022",
      title: "Club Headquarters",
      description: "Established our permanent club headquarters, providing a home base for all members."
    },
    {
      year: "2024",
      title: "10 Year Anniversary",
      description: "Celebrated a decade of brotherhood, adventures, and making a positive impact in our communities."
    }
  ];

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
            NOSSA HISTÓRIA
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
            The journey of Os Papas Motorcycle Club from our humble beginnings to the brotherhood we are today.
          </motion.p>
        </div>
      </section>

      {/* Origin Story Section */}
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
              <h2 className="text-4xl font-heading mb-4">THE BEGINNING</h2>
              <div className="w-24 h-1 bg-primary mb-6"></div>
              <p className="text-gray-700 mb-6">
                The story of Os Papas began in 2014 when a small group of friends with a shared passion for motorcycles and adventure decided to formalize their brotherhood. What started as weekend rides soon evolved into something much more significant.
              </p>
              <p className="text-gray-700 mb-6">
                The name "Os Papas" was chosen to reflect the founding members' role as "fathers" or mentors in the motorcycling community, always looking out for their brothers and sisters on the road.
              </p>
              <p className="text-gray-700">
                From the very beginning, we established our core values: Brotherhood, Respect, Adventure, and Community Service. These principles continue to guide us today in everything we do.
              </p>
            </motion.div>
            
            <motion.div
              className="rounded-lg overflow-hidden shadow-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeIn}
            >
              <img 
                src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Os Papas founding members" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
            <h2 className="text-4xl font-heading mb-4">NOSSA JORNADA</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-300">
              The key milestones that shaped our club through the years.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30"></div>
            
            {/* Timeline events */}
            <div className="space-y-24 relative">
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={index} 
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index + 1}
                  variants={fadeIn}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <span className="text-primary text-3xl font-heading">{milestone.year}</span>
                    <h3 className="text-2xl font-semibold mt-2">{milestone.title}</h3>
                    <p className="text-gray-400 mt-2">{milestone.description}</p>
                  </div>
                  
                  <div className="mx-auto my-4 md:my-0">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center relative z-10">
                      <span className="text-dark font-semibold">{index + 1}</span>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
            <h2 className="text-4xl font-heading mb-4">OUR VALUES</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-700">
              The core principles that define who we are and guide our actions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md border-t-4 border-primary"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeIn}
            >
              <h3 className="text-2xl font-heading mb-4">Brotherhood</h3>
              <p className="text-gray-700">
                We are a family bound not by blood but by choice. We support each other through good times and bad, on and off the road. The bonds we form as Os Papas members are unbreakable and last a lifetime.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md border-t-4 border-secondary"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeIn}
            >
              <h3 className="text-2xl font-heading mb-4">Respect</h3>
              <p className="text-gray-700">
                We treat each other, other riders, and the communities we visit with dignity and respect. We honor the traditions of motorcycling while welcoming diversity and new perspectives.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md border-t-4 border-secondary"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              variants={fadeIn}
            >
              <h3 className="text-2xl font-heading mb-4">Adventure</h3>
              <p className="text-gray-700">
                We embrace the spirit of adventure and the freedom of the open road. We seek out new experiences, routes, and destinations, always pushing ourselves to explore beyond our comfort zones.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md border-t-4 border-primary"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
              variants={fadeIn}
            >
              <h3 className="text-2xl font-heading mb-4">Community Service</h3>
              <p className="text-gray-700">
                We believe in giving back to the communities that support us. Through charity rides and volunteer work, we strive to make a positive impact wherever we go.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-dark text-white">
        <div className="container-custom">
          <motion.div 
            className="bg-gradient-to-r from-primary to-primary/80 text-dark rounded-lg p-12 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading mb-4">BECOME PART OF OUR STORY</h2>
            <p className="text-xl mb-8 text-dark/80">
              Join Os Papas Motorcycle Club and write the next chapter of our journey together.
            </p>
            <a href="/contacts" className="btn bg-dark text-white hover:bg-dark/80">Join Us Today</a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurStoryPage;