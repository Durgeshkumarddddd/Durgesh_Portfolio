import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaClock, FaTrophy, FaLaptopCode, FaHackerrank, FaProjectDiagram } from 'react-icons/fa';

const stats = [
  { icon: FaCode, value: '34+', label: 'Skills Mastered' },
  { icon: FaClock, value: '1223+', label: 'Coding Hours' },
  { icon: FaLaptopCode, value: '100+', label: 'LeetCode Solutions' },
  { icon: FaTrophy, value: '8+', label: 'Competition Wins' },
  { icon: FaHackerrank, value: '6+', label: 'Hackathons' },
  { icon: FaProjectDiagram, value: '12+', label: 'Projects Completed' }
];

const Stats = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <stat.icon className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-4" />
              <motion.span
                className="text-3xl font-bold text-gray-900 dark:text-white"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                {stat.value}
              </motion.span>
              <span className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;