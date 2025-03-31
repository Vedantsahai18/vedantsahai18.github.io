'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const education = [
  {
    degree: "Master's in Science in Computer Science",
    institution: "The Pennsylvania State University",
    period: "2022 - 2024",
    gpa: "GPA 3.75",
    details: [
      "Teaching Assistant for the Courses CMPSC 132: Programming and Computation II: Data Structures",
      "Teaching Assistant for the Courses CMPSC 131: Programming and Computation I: Programming and Computation",
      "Learning Assistant for the Course CMPSC 431W: Database Management System"
    ]
  },
  {
    degree: "Bachelor's of Engg. in Computer Science",
    institution: "University of Mumbai",
    period: "2017 - 2021",
    gpa: "CGPA 9.58",
    details: [
      "Secured 3rd Rank in the Class",
      "Joe Sportsmanship Award at \"Association for Unmanned Vehicles Systems International Student Unmanned Aerial System Competition 2019\"",
      "Member of college technical team Mavericks UAS, working in the field of Autonomous Unmanned Aerial Vehicles from June 2018 to June 2019",
      "Conducted workshops on \"Introduction to Arduino\" and \"Deep Learning\" with Team Mavericks UAS at Fr.CRCE"
    ]
  }
]

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section 
      id="education" 
      className="py-20 text-white relative"
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
          <h2 className="text-4xl font-bold mb-6">Education</h2>
          <p className="max-w-3xl mx-auto">
            Education is the foundation upon which I build my professional skills and knowledge.
            My academic journey has equipped me with both theoretical understanding and practical expertise
            in computer science, preparing me for the challenges of the tech industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-dark bg-opacity-60 p-6 rounded-lg"
            >
              <span className="inline-block bg-primary px-3 py-1 text-sm rounded mb-4">{edu.period}</span>
              <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
              <p className="text-gray-300 mb-1">{edu.institution}</p>
              <p className="text-yellow-400 font-medium mb-4">{edu.gpa}</p>
              <ul className="list-disc pl-5 space-y-2">
                {edu.details.map((detail, i) => (
                  <li key={i} className="text-gray-200">{detail}</li>
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