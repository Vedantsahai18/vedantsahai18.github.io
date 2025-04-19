'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Reorganized with ML focus
const technicalSkills = [
  { name: 'Machine Learning', level: 90, category: 'ml' },
  { name: 'PyTorch', level: 85,  category: 'ml' },
  { name: 'TensorFlow/Keras', level: 80,  category: 'ml' },
  { name: 'NLP', level: 75, category: 'ml' },
  { name: 'Computer Vision', level: 75, category: 'ml' },
  { name: 'LLMs', level: 80, category: 'ml' },
  { name: 'Data Science', level: 85, category: 'ml' },
  { name: 'Python', level: 90, category: 'dev' }
]

const developmentTools = [
  { name: 'Docker', level: 80, category: 'devops' },
  { name: 'Flask/FastAPI', level: 75, category: 'backend' },
  { name: 'RASA Framework', level: 85, category: 'ml' },
  { name: 'PostgresSQL/MongoDB', level: 70, category: 'database' },
  { name: 'Knowledge Graph (Neo4J)', level: 75, category: 'ml' },
  { name: 'AWS Services', level: 75, category: 'cloud' }
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section 
      id="skills" 
      className="py-20 relative overflow-hidden"
      style={{ backgroundImage: 'url(/images/background1.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="section-overlay"></div>
      
      <div className="container mx-auto px-4 section-content">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">Technical Expertise</span>
          <h2 className="section-heading text-white mt-2">Machine Learning Skills</h2>
          <p className="max-w-2xl mx-auto text-gray-300 mt-4">
            Specialized in machine learning algorithms, deep learning frameworks, and data engineering with practical experience in production environments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Primary skills with circular progress */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-semibold mb-8 flex items-center"
            >
              <div className="w-8 h-8 rounded-lg bg-ml-accent/10 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-ml-accent">
                  <path d="M12 1.5a.75.75 0 01.75.75V4.5a.75.75 0 01-1.5 0V2.25A.75.75 0 0112 1.5zM5.636 4.136a.75.75 0 011.06 0l1.592 1.591a.75.75 0 01-1.061 1.06l-1.591-1.59a.75.75 0 010-1.061zm12.728 0a.75.75 0 010 1.06l-1.591 1.592a.75.75 0 01-1.06-1.061l1.59-1.591a.75.75 0 011.061 0zm-6.816 4.496a.75.75 0 01.82.311l5.228 7.917a.75.75 0 01-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 01-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 01-1.247-.606l.569-9.47a.75.75 0 01.554-.68zM3 10.5a.75.75 0 01.75-.75H6a.75.75 0 010 1.5H3.75A.75.75 0 013 10.5zm14.25 0a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H18a.75.75 0 01-.75-.75zm-8.962 3.712a.75.75 0 010 1.061l-1.591 1.591a.75.75 0 11-1.061-1.06l1.591-1.592a.75.75 0 011.06 0z" />
                </svg>
              </div>
              <span className="text-white">Machine Learning Expertise</span>
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="relative mb-3">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                      <circle 
                        cx="50" cy="50" r="40" 
                        className="stroke-gray-600" 
                        strokeWidth="10" 
                        fill="none" 
                      />
                      <motion.circle 
                        cx="50" cy="50" r="40" 
                        className="stroke-primary" 
                        strokeWidth="10" 
                        fill="none" 
                        strokeLinecap="round"
                        strokeDasharray={251.2}
                        strokeDashoffset={251.2 - (251.2 * skill.level) / 100}
                        initial={{ strokeDashoffset: 251.2 }}
                        animate={inView ? { strokeDashoffset: 251.2 - (251.2 * skill.level) / 100 } : { strokeDashoffset: 251.2 }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="font-bold text-lg text-primary">{skill.level}%</span>
                    </div>
                  </div>
                  <h4 className="font-medium text-center text-white">{skill.name}</h4>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Secondary skills with bars */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-semibold mb-8 flex items-center"
            >
              <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-secondary">
                  <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                </svg>
              </div>
              <span className="text-white">Development Tools & Infrastructure</span>
            </motion.h3>
            
            <div className="space-y-6">
              {developmentTools.map((skill, index) => (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-6"
                >
                  <div className="flex justify-between mb-2">
                    <h3 className="text-lg font-medium text-white">{skill.name}</h3>
                    <span className="text-primary font-medium">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-3 shadow-inner">
                    <motion.div 
                      className="bg-gradient-to-r from-primary to-tertiary h-3 rounded-full relative"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    >
                      <div className="absolute right-0 -top-0.5 w-4 h-4 rounded-full bg-white border-2 border-primary shadow-md"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Additional skills tags */}
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold mb-6 text-center text-white">Additional ML Skills & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              // ML skills first
              'Pandas', 'NumPy', 'scikit-learn', 'XGBoost', 'Neural Networks', 'LLMs', 'Computer Vision', 'NLP', 
              'Feature Engineering', 'Data Visualization', 'Time Series Analysis', 'Transfer Learning',
              // Supporting skills
              'Git', 'GitHub', 'Jupyter', 'REST APIs', 'CI/CD', 'Linux'
            ].map((tag, index) => (
              <motion.span 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.6 + (index * 0.05) }}
                className={index < 12 ? "ml-tag" : "bg-white/10 px-4 py-2 rounded-full text-gray-300 text-sm font-medium shadow-soft hover:shadow-hover border border-white/5 hover:border-primary hover:text-primary transition-all duration-300"}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}