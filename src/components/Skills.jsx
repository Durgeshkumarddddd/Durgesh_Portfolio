import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, FaDatabase, FaDocker, FaAws, FaHtml5, 
  FaCss3, FaFigma, FaGitAlt, FaJs, FaLinux, FaLightbulb, FaProjectDiagram, FaJava 
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiMongodb, SiRedis, SiExpress, SiGraphql, 
  SiPostgresql, SiNextdotjs, SiKubernetes, SiDjango, SiC, SiCplusplus 
} from 'react-icons/si';

const skills = [
  { icon: FaReact, name: 'React', level: 100},
  { icon: SiExpress, name: 'Express.js', level: 100 },
  { icon: FaNodeJs, name: 'Node.js', level: 100 },
  { icon: SiMongodb, name: 'MongoDB', level: 100 },
  { icon: FaDatabase, name: 'SQL', level: 100 },
  { icon: FaJs, name: 'JavaScript', level: 100 },
  { icon: SiTailwindcss, name: 'Tailwind CSS', level: 100 },
  { icon: FaHtml5, name: 'HTML', level: 100 },
  { icon: FaCss3, name: 'CSS', level: 100 },
  { icon: FaPython, name: 'Python', level: 100 },
  { icon: FaJava, name: 'Java', level: 100 }, // Fixed Java icon
  { icon: SiC, name: 'C', level: 100 }, // Added C
  { icon: SiCplusplus, name: 'C++', level: 100 }, // Added C++
  { icon: FaProjectDiagram, name: 'DSA', level: 100 }, // DSA
  { icon: FaLightbulb, name: 'Problem Solving', level: 100 }, // Problem Solving
  // { icon: FaAws, name: 'AWS', level: 80 },
  { icon: FaFigma, name: 'Figma', level: 100 },
  { icon: FaGitAlt, name: 'Git', level: 100 },
  // { icon: SiTypescript, name: 'TypeScript', level: 75 },
  // { icon: SiRedis, name: 'Redis', level: 70 },
  // { icon: SiGraphql, name: 'GraphQL', level: 72 },
  // { icon: SiPostgresql, name: 'PostgreSQL', level: 74 },
  // { icon: SiNextdotjs, name: 'Next.js', level: 77 },
  // { icon: SiKubernetes, name: 'Kubernetes', level: 65 },
  { icon: FaLinux, name: 'Linux', level: 100 },
  // { icon: SiDjango, name: 'Django', level: 76 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center mb-4">
                <skill.icon className="w-12 h-12 text-purple-600 mb-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center">
                  {skill.name}
                </h3>
              </div>
              
              <div className="relative pt-1">
                {/* <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200 dark:bg-purple-900">
                      Proficiency
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-purple-600">
                      {skill.level}%
                    </span>
                  </div>
                </div> */}
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200 dark:bg-purple-900">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-600"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
