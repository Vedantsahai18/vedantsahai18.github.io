'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const experiences = [
  {
    title: 'ML Engineer',
    company: 'Julep AI Inc.',
    period: 'Present - October 2024',
    achievements: [
      'Increased User Engagement by 15% within a month of launch by developing the "Browser Use" feature, enabling automation of browser tasks through AI-driven workflows.',
      'Optimized the workflow performance to accelerate executions from hours to under 45 minutes for 2.5k runs by migrating the database from CozoDB to TimescaleDB.',
      'Developed Julep Python-based CLI and 10+ AI workflow templates, improving developer participation to 5k GitHub stars.',
      'Enhanced platform features by 20% by programming a FastAPI-Docker service enabling interaction between AI workflows and external tools.'
    ]
  },
  {
    title: 'AI/ML Summer Associate',
    company: 'JP Morgan & Chase Co.',
    period: 'June 2023 - August 2023',
    achievements: [
      'Improved the Transaction Detection Rate (TDR) by 100-150 basis points by implementing the Online ML XGBoost algorithm for the Transaction Risk model (TRS).',
      'Attained 90% accuracy by programming a TabNet-based Deep Neural Network as a challenger for the TRS XGBoost model.',
      'Ensured 95% code coverage by implementing a PyTest-based testing framework for the TRS Feature Engineering codebase.'
    ]
  },
  {
    title: 'ML Engineer',
    company: 'Plexflo LLC.',
    period: 'October 2021 - July 2022',
    achievements: [
      'Developed Evidence, a Meter Data Management & Analytics (MDMS) software with a latency of less than 90ms, by leveraging ITRON, Sensus Xylem, and Siemens data streams, powered by AWS, Apache Flink, and a custom ML model',
      'Achieved an F1 score of 85% for a non-intrusive load monitoring model by leveraging a Variational Autoencoder (VAE) model.',
      'Scaled a Flask + AWS Timestream backend to support up to 20,000 IoT devices for MDMS over Grafana.'
    ]
  },
  {
    title: 'ML Research Intern',
    company: 'Sync Energy AI',
    period: 'July 2020 - September 2021',
    achievements: [
      'Optimized the power outage extraction, resulting in a 40% faster response, by deploying an AWS Lambda-Python-REST API.',
      'Improved accuracy to 83% in estimating the locations of utility poles from Google Street View images by employing Mask R-CNN and Image Processing.',
      'Constructed a knowledge graph of 500+ wildfire papers, utilizing Neo4j to identify 150+ interconnected variables.'
    ]
  },
  {
    title: 'SDE Intern',
    company: 'Mumbai International Airport Limited (GVK)',
    period: 'June 2019 - July 2019',
    achievements: [
      'Increased system efficiency by 10% by unifying the Airside Safety Management Application (AngularJS and Microsoft SQL Server framework system) with the Incident Monitoring System (Microsoft SQL Server database and .NET system).',
      'Scheduled Python-Shell scripts using Crontab to send SOAP requests to the Flight Feed server, retrieve XML data, and store it in a .txt file.'
    ]
  }
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: '50px',
  })

  return (
    <section 
      id="experience" 
      className="py-20 text-white"
      style={{ backgroundImage: 'url(/images/background1.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="section-overlay"></div>
      <div className="container mx-auto px-4 section-content">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">Professional Journey</span>
          <h2 className="section-heading text-white mt-2">Experience</h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Building expertise through practical applications in machine learning, data science, and software engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="card-dark p-6 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-primary mb-2">{exp.title}</h3>
              <p className="text-gray-300 mb-1">{exp.company}</p>
              <p className="text-gray-400 mb-4">{exp.period}</p>
              <ul className="list-disc pl-5 space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-200">{achievement}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/Vedant_Sahai_Resume.pdf" 
            target="_blank"
            className="inline-block bg-primary hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition-all"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}