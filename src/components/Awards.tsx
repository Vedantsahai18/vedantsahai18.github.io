'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const awards = [
  {
    title: "Smart India Hackathon 2019",
    position: "Winner",
    description: "Team Leader and Winner of Smart India Hackathon 2019 software edition, conducted by MHRD, Gov. of India, at Chennai."
  },
  {
    title: "India Singapore Hackathon 2019",
    position: "5th Position",
    description: "Secured 5th position in India Singapore Hackathon 2019 conducted by MHRD, Govt. of India and Govt. of Singapore, at IIT Madras, Chennai."
  },
  {
    title: "Knowledge Mining for Defining Systemic Engineering Practices",
    position: "2020 4th International Conference on Electronics, Communication and Aerospace Technology (ICECA)",
    description: "S. Kaur, V. Sahai, A. Jaiswal and S. Chanda, \"Knowledge Mining for Defining Systemic Engineering Practices,\" 2020 4th International Conference on Electronics, Communication and Aerospace Technology (ICECA), Coimbatore, 2020, pp. 1346-1352, doi: 10.1109/ICECA49313.2020.9297380."
  },
  {
    title: "Leveraging Deep Learning and IoT for monitoring COVID19 Safety Guidelines within College Campus",
    position: "IACC 2020. Communications in Computer and Information Science",
    description: "Vedant S., Jason D., Mayank S., Mahendra M., Dhananjay K. (2021) Leveraging Deep Learning and IoT for Monitoring COVID19 Safety Guidelines Within College Campus. In: Garg D., Wong K., Sarangapani J., Gupta S.K. (eds) Advanced Computing. IACC 2020. Communications in Computer and Information Science, vol 1367. Springer, Singapore. https://doi.org/10.1007/978-981-16-0401-0_3"
  },
  {
    title: "Home Security System using IOT and AWS Cloud Services",
    position: "2019 International Conference on Advances in Computing, Communication and Control (ICAC3)",
    description: "M. Mehra, V. Sahai, P. Chowdhury and E. Dsouza, \"Home Security System using IOT and AWS Cloud Services,\" 2019 International Conference on Advances in Computing, Communication and Control (ICAC3), Mumbai, India, 2019, pp. 1-6, doi: 10.1109/ICAC347590.2019.9089839."
  },
  {
    title: "AI Hackathon",
    position: "4th Position",
    description: "Secured 4th position in AI Hackathon conducted by Tata Motors and Symbiosis Institute of Technology, Pune."
  }
]

export default function Awards() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section 
      id="awards" 
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
          <h2 className="text-4xl font-bold mb-6">Awards</h2>
          <p className="max-w-2xl mx-auto">
            Beware of those who criticize your achievements instead of offering praise, for their desire for recognition may be masked behind their words of judgment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark bg-opacity-60 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold text-yellow-400 mb-2">{award.title}</h3>
              <p className="text-gray-300 mb-4">{award.position}</p>
              <p className="text-gray-200">{award.description}</p>
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