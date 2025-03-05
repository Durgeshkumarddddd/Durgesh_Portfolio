import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar } from 'react-icons/fa';

const experiences = [
  {
    title: ' Full Stack Developer',
    company: 'iNeuron Pvt. Ltd.',
    period: 'july 2024 - oct 2024',
    description: 'Online Cake Order applications using Node.js, Express.js, JavaScript, Ejs, MongoDB',
  },
  {
    title: 'Backend Developer',
    company: 'PW Skills',
    period: 'Jan-2024 - March 2024',
    description: 'Developed Ecommerce site using Node.js, Express.js, JavaScript, MongoDB',
  },
  {
    title: 'Python Developer',
    company: 'Learn & Build',
    period: 'july-2023 - August-2019',
    description: 'Created responsive Weather tracker app and improved performance through code optimization.',
  },
  // {
  //   title: 'Junior Developer',
  //   company: 'StartUp Inc',
  //   period: '2017 - 2018',
  //   description: "Worked on various client projects using React and contributed to the company's core product.",
  // },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          Professional Experience
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-purple-200 dark:bg-purple-900" />

          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative grid md:grid-cols-2 items-start gap-8 ${
                index % 2 === 0 ? 'md:grid-flow-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`${index % 2 === 0 ? 'md:col-start-2' : ''}`}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center space-x-2 mb-2">
                    <FaBriefcase className="text-purple-600" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                  </div>
                  <h4 className="text-lg font-semibold text-purple-600 mb-2">
                    {exp.company}
                  </h4>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mb-4">
                    <FaCalendar />
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {exp.description}
                  </p>
                </div>
              </div>

              {/* Timeline Point */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white dark:border-gray-900"
                style={{ top: '2rem' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;