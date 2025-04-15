import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaAward, FaCertificate, FaLink, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const certificates = [
  {
    title: "Full Stack developement ",
    issuer: "INeuron Pvt. Ltd.",
    date: " Aug-2024",
    image: "/iNeuronCertificate.jpg",
    credentialId: "iNeuron Pvt Ltd ",
    skills: ["Node js", "Express js", "JavaScript", "Ejs", "MongoDb", "Html", "CSS",],
    url: "#"
  },
  {
    title: "Backend  Development",
    issuer: "PW Skills",
    date: "March - 2024",
    image: "/pwCertificate.jpg",
    credentialId: "FCC-7654321",
    skills: ["MERN Stack", "Web Development"],
    url: "#"
  },
  {
    title: "DBMS",
    issuer: "NPTEL Anna University",
    date: "July-2024",
    image: "/DBMScertificate.jpg",
    credentialId: "RJ10040031",
    skills: ["DBMS"],
    url: "#"
  },
  {
    title: "Problem Solving in C",
    issuer: "IIT KHARAGPUR",
    date: "APRIL-2023",
    image: "/problemSolvingInC.jpg",
    credentialId: "NPTEL23CS53543792587",
    skills: ["Problem Solving in C "],
    url: "#"
  },
  {
    title: "Python",
    issuer: "Learn & Build",
    date: "2022",
    image: "/PythonCertificate.jpg",
    credentialId: "LNBID:IN23PM11245662452",
    skills: ["PYTHON"],
    url: "#"
  }
];

const Certifications = () => {
  const swiperRef = useRef<SwiperType>();

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of professional certifications that showcase my expertise and continuous learning journey.
          </p>
        </motion.div>

        <div className="relative group">
          {/* Custom Navigation Buttons */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1 }}
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-x-16"
          >
            <FaChevronLeft className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1 }}
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-16"
          >
            <FaChevronRight className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </motion.button>

          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 25,
              stretch: 0,
              depth: 350,
              modifier: 1,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={false}
            modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
            className="certification-swiper !pb-16"
          >
            {certificates.map((cert, index) => (
              <SwiperSlide key={index} className="w-[340px] sm:w-[400px]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-52">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-purple-900/80" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white text-2xl font-bold mb-1">{cert.title}</h3>
                      <div className="flex items-center text-purple-200">
                        <FaAward className="w-4 h-4 mr-2" />
                        <p>{cert.issuer}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex items-center">
                        <FaCertificate className="text-purple-600 dark:text-purple-400 w-5 h-5 mr-2" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          Issued {cert.date}
                        </span>
                      </div>
                      <a
                        href={cert.url}
                        className="flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                      >
                        <FaLink className="w-4 h-4 mr-1" />
                        <span className="text-sm">Verify</span>
                      </a>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Touch/Drag Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-8 text-gray-600 dark:text-gray-400"
          >
            <p className="text-sm">
              Swipe left/right or use arrow buttons to navigate through certificates
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;