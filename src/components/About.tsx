'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section 
      id="about" 
      className="py-20 relative overflow-hidden"
      style={{ backgroundImage: 'url(/images/background1.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="section-overlay"></div>
      <div className="container mx-auto px-4 section-content">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="text-primary font-medium">Get To Know</span>
          <h2 className="section-heading text-white mt-2">About Me</h2>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-5/12 mb-10 md:mb-0">
            <div className="relative">
              <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg border-4 border-white">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-tertiary/20 mix-blend-overlay z-10"></div>
                  <div 
                    className="aspect-[3/4] bg-cover bg-center relative"
                    style={{ 
                      backgroundImage: `url(/images/about.jpg)`,
                      backgroundColor: '#f9fafb'
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-24 h-24 text-primary opacity-10">
                        <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                        <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                        <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Design elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-tertiary/10 rounded-full blur-xl"></div>
              </motion.div>
            </div>
          </div>
          
          <div className="md:w-7/12 md:pl-12">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
              
              <div className="card-dark p-6 rounded-xl mb-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Hi, I'm Vedant Sahai, a Computer Science and Engineering graduate student at Pennsylvania State University with extensive experience in <span className="text-ml-accent font-medium">Machine Learning</span> and Software Development. As a <span className="text-primary font-medium">Machine Learning Engineer</span> at Julep AI, I've enhanced user engagement by developing AI-driven workflows and optimizing system interactions.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mt-4">
                  Previously, I contributed to JP Morgan Chase's <span className="text-primary font-medium">AIML team</span>, advancing transaction risk detection with cutting-edge machine learning models. At Plexflo, I scaled IoT data analytics platforms and improved renewable energy solutions using AI. My work includes innovative solutions like Datacertus, an AI-driven disaster response tool, and EVIdence, a real-time meter data management system.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mt-4">
                  I'm passionate about leveraging ML technology to solve real-world challenges and have a strong track record in creating impactful solutions. My expertise includes deep learning, computer vision, NLP, and data engineering with a focus on production-ready deployments and scalable ML systems.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  href="/Vedant_Sahai_Resume.pdf" 
                  className="bg-primary hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-soft hover:shadow-hover text-center"
                  target="_blank"
                >
                  Download CV
                </a>
                <a 
                  href="#contact" 
                  className="bg-transparent hover:bg-white hover:text-primary text-white font-medium py-3 px-6 rounded-lg border-2 border-white transition-all text-center"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}