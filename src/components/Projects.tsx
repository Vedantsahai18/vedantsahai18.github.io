'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const projects = [
  {
    title: "Intelligent Classrooms",
    github: "https://github.com/Vedantsahai18/Intelligent-Classrooms",
    description: "Recipient of Singapore-India Hackathon Finalist (Top 5) accolade, accompanied by a prestigious $2,000 cash prize. Our groundbreaking project, acknowledged by Prime Minister Modi himself, pioneers an end-to-end architectural system. Our creation integrates cutting-edge technologies, including human pose estimation, emotion recognition, and head gaze analysis, into a tailor-made neural network. Dubbed Intelligent Classrooms, our innovation empowers educators with real-time insights into student engagement levels. Through a suite of three computer vision models, we provide a comprehensive understanding of student dynamics, depicted through a dynamic heatmap displayed in classrooms. Moreover, our system generates predictive analytics to guide educators in optimizing lesson pacing, ensuring an ideal balance between instruction and breaks. With our solution, we're revolutionizing classroom dynamics and fostering enhanced learning experiences.",
    tags: ["Computer Vision", "Machine Learning", "Neural Networks", "Real-time Analytics"],
    category: "machine-learning"
  },
  {
    title: "Leveraging Conversational AI for Secure Healthcare Assistance",
    github: "https://github.com/Vedantsahai18/Leveraging-Conversational-AI-for-Secure-Healthcare-Assistance",
    description: "In a time where medical data generation is skyrocketing, particularly during crises, hospitals face a dire challenge in managing this influx while understaffed. This predicament leaves healthcare data vulnerable to tampering and delays in reaching users, hindering their ability to seek timely medical assistance elsewhere. Our solution lies in integrating Electronic Health Records (EHR) with blockchain technology. Leveraging the immutability of BigchainDB, a decentralized database akin to traditional blockchains, we've engineered an end-to-end system for the secure storage, transfer, and tracking of patient healthcare data. All records are fortified with AES-256 encryption, ensuring maximum security. Access to this encrypted data is facilitated through blockchain and asymmetric cryptography, bolstering confidentiality and integrity. Recognizing the limitations of blockchain data storage, files are intelligently stored in IPFS, ensuring scalability without compromising security. Furthermore, to streamline data entry processes and enhance user experience, we've developed a user-friendly chatbot. This chatbot not only alleviates the burden of manual form filling but also maintains its performance credibility by tracking and storing conversational history on the blockchain. With our innovative solution, we're not just safeguarding sensitive medical data, but also empowering users with seamless access to their healthcare information, even in the most challenging circumstances.",
    tags: ["Blockchain", "Conversational AI", "Secure Data", "Healthcare"],
    category: "ai-solutions"
  },
  {
    title: "Context Classification from Audio Conversations",
    github: "https://github.com/Vedantsahai18/AI-Hackathon-Pune",
    description: "Our project for the SYMBIOSIS AI HACKATHON 2019 focused on enhancing call center operations by automating the classification of customer conversations. By leveraging Google's 'Speech-to-text' technology and our OpenNMT NLP model, we accurately classify customer inquiries into specific categories related to the automotive industry. From new vehicle purchases to roadside assistance, our solution streamlines call center operations, ensuring prompt and efficient customer service.",
    tags: ["NLP", "Speech-to-Text", "Classification", "Customer Service"],
    category: "machine-learning"
  },
  {
    title: "Presenting Obstacles Around an Airport Aerodrome Using Google Earth Pro and HereMaps API on a web-based App",
    github: "https://github.com/Vedantsahai18/Aviation-Winners",
    description: "The system provides essential guidance to aerodrome operators and development authorities, ensuring proper control of obstacles surrounding airports. Aligned with Aerodrome and Air Navigation Services Regulation (AAR) and Ministry of Civil Aviation standards, our solution facilitates adherence to Annex 14 recommendations. By leveraging the records maintained in the AD 2.10 section of the AIP documentation, available on the Airport Authority of India's website in PDF format, our system allows for convenient representation of obstacle data on popular 2D or 3D mapping engines like Google Earth Engine and Google Maps. From obstacle marking and lighting to surveys and reporting, our comprehensive approach enables operators to establish robust obstacle control processes, safeguarding the aerodrome and its vicinity for safe aircraft operations.",
    tags: ["Web App", "GIS", "API Integration", "Aviation"],
    category: "web-development"
  }
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: '50px',
  })
  
  const [filter, setFilter] = useState('all')
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'machine-learning', name: 'Machine Learning' },
    { id: 'ai-solutions', name: 'AI Solutions' },
    { id: 'web-development', name: 'Web Development' }
  ]

  return (
    <section 
      id="projects" 
      className="py-20 relative overflow-hidden"
      style={{ backgroundImage: 'url(/images/background1.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="section-overlay"></div>
      
      <div className="container mx-auto px-4 section-content">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium">ML Applications</span>
          <h2 className="section-heading text-white mt-2">Featured Projects</h2>
          <p className="max-w-2xl mx-auto text-gray-300 mt-4">
            A showcase of my work in machine learning, AI solutions, and real-world applications.
            Each project demonstrates solving complex problems through innovative ML approaches.
          </p>
        </motion.div>
        
        {/* Filter buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category.id 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="card-dark p-6 rounded-xl transition-all duration-300 text-white"
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className={tag.includes("Machine Learning") || tag.includes("AI") || tag.includes("Neural") || tag.includes("NLP") || tag.includes("Computer Vision") ? "ml-tag" : "bg-primary/30 text-white text-xs px-2 py-1 rounded-md font-medium"}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
              </div>
              
              <div className="flex justify-end">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-blue-400 font-medium text-sm"
                >
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-center mt-12"
        >
          <a 
            href="https://github.com/Vedantsahai18/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white px-5 py-3 rounded-lg shadow-soft hover:shadow-hover text-gray-800 hover:text-primary font-medium transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            More projects on GitHub
          </a>
        </motion.div>
      </div>
      
      {/* Add custom scrollbar styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c5c5c5;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #3498db;
        }
      `}</style>
    </section>
  )
}