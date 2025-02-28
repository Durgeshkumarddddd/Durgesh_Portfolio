import { motion } from 'framer-motion';
import { FaGithub, FaCode, FaClock, FaCalendarAlt, FaCodeBranch, FaCheckCircle } from 'react-icons/fa';

const Contribution = () => {
  // Sample contribution data
  const contributionData = {
    totalCommits: 1247,
    dailyAverage: '4.2 hours',
    streak: 42,
    repositories: 28,
    pullRequests: 156,
    issues: 89,
  };

  // Sample contribution calendar (simplified)
  const contributionCalendar = Array(52).fill(0).map(() => 
    Array(7).fill(0).map(() => Math.floor(Math.random() * 5))
  );

  return (
    <section id="contribution" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          Open Source Contributions
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contribution Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <FaGithub className="w-8 h-8 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  GitHub Activity
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <FaCode className="text-purple-600" />
                    <span className="text-gray-700 dark:text-gray-300">Total Commits</span>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {contributionData.totalCommits}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <FaClock className="text-purple-600" />
                    <span className="text-gray-700 dark:text-gray-300">Daily Average</span>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {contributionData.dailyAverage}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <FaCalendarAlt className="text-purple-600" />
                    <span className="text-gray-700 dark:text-gray-300">Current Streak</span>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {contributionData.streak} days
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <FaCodeBranch className="text-purple-600" />
                    <span className="text-gray-700 dark:text-gray-300">Repositories</span>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {contributionData.repositories}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <FaCheckCircle className="text-purple-600" />
                    <span className="text-gray-700 dark:text-gray-300">Pull Requests</span>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {contributionData.pullRequests}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Top Languages
              </h3>
              <div className="space-y-4">
                {[
                  { name: 'JavaScript', percentage: 40 },
                  { name: 'TypeScript', percentage: 25 },
                  { name: 'Python', percentage: 15 },
                  { name: 'HTML/CSS', percentage: 12 },
                  { name: 'Other', percentage: 8 },
                ].map((language, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700 dark:text-gray-300">{language.name}</span>
                      <span className="text-gray-700 dark:text-gray-300">{language.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${language.percentage}%` }}
                        viewport={{ once: true }}
                        className="bg-purple-600 h-2.5 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contribution Calendar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Contribution Calendar
              </h3>
              
              <div className="overflow-x-auto">
                <div className="min-w-max">
                  <div className="flex mb-2">
                    {['', 'Mon', '', 'Wed', '', 'Fri', ''].map((day, i) => (
                      <div key={i} className="text-xs text-gray-500 dark:text-gray-400 w-4 text-center">
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col space-y-1">
                    {contributionCalendar.map((week, weekIndex) => (
                      <div key={weekIndex} className="flex space-x-1">
                        {week.map((day, dayIndex) => {
                          let bgColor;
                          switch (day) {
                            case 0: bgColor = 'bg-gray-200 dark:bg-gray-600'; break;
                            case 1: bgColor = 'bg-purple-200 dark:bg-purple-900'; break;
                            case 2: bgColor = 'bg-purple-300 dark:bg-purple-800'; break;
                            case 3: bgColor = 'bg-purple-400 dark:bg-purple-700'; break;
                            case 4: bgColor = 'bg-purple-600 dark:bg-purple-500'; break;
                            default: bgColor = 'bg-gray-200 dark:bg-gray-600';
                          }
                          return (
                            <motion.div
                              key={dayIndex}
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: (weekIndex * 7 + dayIndex) * 0.0005 }}
                              className={`w-4 h-4 rounded-sm ${bgColor} hover:ring-2 hover:ring-purple-300 dark:hover:ring-purple-700 transition-all`}
                              title={`${day} contributions`}
                            />
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Recent Activity
                </h4>
                <div className="space-y-4">
                  {[
                    { action: 'Pushed 5 commits to', repo: 'project/repo-name', time: '2 hours ago' },
                    { action: 'Created pull request in', repo: 'organization/project', time: '1 day ago' },
                    { action: 'Reviewed pull request in', repo: 'team/application', time: '3 days ago' },
                    { action: 'Merged branch in', repo: 'personal/website', time: '5 days ago' },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-2 mt-1">
                        <FaGithub className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <p className="text-gray-700 dark:text-gray-300">
                          {activity.action} <span className="font-semibold">{activity.repo}</span>
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contribution;