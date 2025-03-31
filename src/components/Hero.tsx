'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  const slide = {
    title: 'Vedant Sahai',
    subtitle: ['ML Engineer', 1000, 'AI Enthusiast', 1000, "MLE @ Julep AI", 1000],
    cta1: { text: 'Contact me', href: '#contact' },
    cta2: { text: 'My Projects', href: '#projects' }
  }

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0 from-dark to-gray-800"
        style={{ 
          backgroundImage: `url(/images/hero.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Overlay with gradient - darker now */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      
      {/* Glowing circle */}
      <div className="absolute top-[20%] -right-20 w-96 h-96 rounded-full bg-primary opacity-20 filter blur-3xl"></div>
      <div className="absolute bottom-[10%] -left-20 w-80 h-80 rounded-full bg-tertiary opacity-20 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-start"
          >
            <div className="inline-block mb-2 py-1 px-3 bg-primary bg-opacity-20 rounded-lg text-primary font-medium text-sm">
              Welcome to my portfolio
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 inline-block relative">
              {slide.title}
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary"></span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 h-12 relative">
              {Array.isArray(slide.subtitle) ? (
                <div className="relative inline-block">
                  <TypeAnimation 
                    sequence={slide.subtitle}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="inline-block"
                  />
                  <span className="absolute right-[-4px] top-0 h-full w-[2px] bg-primary/80 animate-pulse"></span>
                </div>
              ) : (
                slide.subtitle
              )}
            </h2>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href={slide.cta1.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-soft hover:shadow-hover"
              >
                {slide.cta1.text}
              </motion.a>
              <motion.a
                href={slide.cta2.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent hover:bg-white hover:text-primary text-white font-medium py-3 px-6 rounded-lg border-2 border-white transition-all"
              >
                {slide.cta2.text}
              </motion.a>
            </div>
            
            {/* Social links */}
            <motion.div 
              className="mt-12 flex items-center gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.a 
                href="https://github.com/vedantsahai18" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors p-2 bg-white/10 rounded-full hover:bg-primary/20 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/vedantsahai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors p-2 bg-white/10 rounded-full hover:bg-primary/20 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </motion.a>
              <motion.a 
                href="mailto:vedantsahai18@gmail.com" 
                className="text-gray-300 hover:text-white transition-colors p-2 bg-white/10 rounded-full hover:bg-primary/20 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white opacity-70">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}