'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const contactInfo = [
  {
    icon: "fab fa-linkedin",
    title: "LinkedIn",
    value: "Vedant Sahai",
    link: "https://www.linkedin.com/in/vedantsahai18"
  },
  {
    icon: "far fa-envelope",
    title: "Email",
    value: "vedantsahai18@gmail.com",
    link: "mailto:vedantsahai18@gmail.com"
  },
  {
    icon: "fas fa-globe",
    title: "Website",
    value: "vedantsahai18.github.io",
    link: "https://vedantsahai18.github.io"
  },
  {
    icon: "fab fa-github",
    title: "GitHub",
    value: "Vedantsahai18",
    link: "https://github.com/Vedantsahai18"
  }
]

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section 
      id="contact" 
      className="py-20 relative"
      style={{ backgroundImage: 'url(/images/background1.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Contact Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm shadow-lg rounded-lg p-6 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="mx-auto mb-4 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl sm:text-2xl">
                  <i className={item.icon}></i>
                </div>
                <h3 className="text-lg font-medium mb-1 text-white">{item.title}</h3>
                <p className="text-gray-300">{item.value}</p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}