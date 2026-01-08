"use client";
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Youtube, Clock, Share2, Mountain } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isBlurring, setIsBlurring] = useState(false);
  const [animated, setAnimated] = useState(false);

  const slides = [
    {
      image: 'rccg5.jpg',
      title: 'MAKE HEAVEN BIGGER',
      subtitle: 'BY CARING BETTER'
    },
    {
      image: 'rccg4.jpg',
      title: 'FIND YOUR PURPOSE',
      subtitle: 'IN COMMUNITY'
    },
    {
      image: 'rccg6.jpg',
      title: 'GROW TOGETHER',
      subtitle: 'IN FAITH AND LOVE'
    }
  ];

  const carouselItems = [
    { label: 'Baptism', color: 'bg-gradient-to-br from-blue-900 to-blue-700' },
    { label: 'Baby Dedication', color: 'bg-gradient-to-br from-gray-700 to-gray-600' },
    { label: 'Next Steps', color: 'bg-gradient-to-br from-gray-600 to-gray-500' },
    { label: 'Rock Springs Account', color: 'bg-gradient-to-br from-white to-gray-50' },
    { label: 'Prayer Partner', color: 'bg-gradient-to-br from-teal-800 to-teal-700' },
    { label: 'Above & Beyond', color: 'bg-gradient-to-br from-yellow-700 to-yellow-600' }
  ];

  useEffect(() => {
    setAnimated(true);
    const interval = setInterval(() => {
      setIsBlurring(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsBlurring(false);
        setAnimated(true);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const carouselPrev = () => {
    const carousel = document.getElementById('carousel');
    carousel?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const carouselNext = () => {
    const carousel = document.getElementById('carousel');
    carousel?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const cardSlideUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full lg:h-screen h-[85vh] overflow-hidden">
        {/* Background Image Container */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-all duration-500 ${isBlurring ? 'blur-md' : 'blur-0'
            }`}
          style={{
            backgroundImage: `url('${slides[currentSlide].image}')`,
            backgroundAttachment: 'cover'
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-black via-black/80 to-transparent" />

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-end lg:justify-center pb-24 sm:pb-32 lg:pb-0 px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h1
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-6xl lg:text-7xl font-semibold text-white lg:mb-6 leading-tight tracking-tight"
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.p
              key={`subtitle-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-2xl lg:text-3xl text-gray-200 font-semibold"
            >
              {slides[currentSlide].subtitle}
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
          >
            <button className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm sm:text-base transition duration-300 uppercase tracking-wider rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              New Here?
            </button>
            <button className="px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-bold text-sm sm:text-base transition duration-300 uppercase tracking-wider rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              How We Care
            </button>
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3 lg:block hidden">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setAnimated(false);
                setIsBlurring(true);
                setTimeout(() => {
                  setCurrentSlide(index);
                  setIsBlurring(false);
                  setAnimated(true);
                }, 500);
              }}
              className={`rounded-full transition-all duration-300 ${index === currentSlide
                ? 'bg-white w-10 h-3'
                : 'bg-white bg-opacity-50 w-3 h-3 hover:bg-opacity-75'
                }`}
            />
          ))}
        </div>

      </div>

      {/* Spacer to ensure seamless blend if needed, though usually handled by gradient */}
      <div className="bg-black h-px"></div>
      {/* Parallax Background Section */}
      <div
        className="fixed inset-0 w-full h-full -z-10 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("/rccg5.jpg")',
          backgroundAttachment: 'fixed',
          filter: 'blur(8px) brightness(0.4)',
          transform: 'scale(1.1)'
        }}
      />

      {/* Carousel Section */}
      <div className="relative w-full bg-transparent py-10 sm:py-16 px-4 sm:px-6 lg:px-8 z-10">
        {/* Top Gradient Overlay */}
        <div className="absolute top-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto z-10">
          {/* Section Title */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Explore Our Ministries
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-teal-700 mx-auto rounded-full" />
          </motion.div>

          {/* Carousel Container */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Previous Button */}
            <button
              onClick={carouselPrev}
              className="absolute -left-6 sm:left-0 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button
              onClick={carouselNext}
              className="absolute -right-6 sm:right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40"
            >
              <ChevronRight size={24} />
            </button>

            <div
              id="carousel"
              className="carousel-scroll flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 px-4"
              style={{ scrollBehavior: 'smooth' }}
            >
              {carouselItems.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 group cursor-pointer"
                >
                  <div className="relative w-40 sm:w-48 h-40 sm:h-48 rounded-2xl overflow-hidden snap-center">
                    <div
                      className={`w-full h-full ${item.color} flex items-center justify-center text-center px-6 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105`}
                    >
                      <div>
                        <h3 className="text-white font-black text-lg sm:text-xl text-center leading-tight group-hover:text-teal-200 transition-colors duration-300">
                          {item.label}
                        </h3>
                      </div>
                    </div>
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Service Times Section */}
      <div className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl text-center sm:text-5xl font-black text-white mb-12 tracking-tight"
          >
            Service Times
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the grid is visible
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* ORIGINAL CAMPUS - MILNER */}
            <motion.div variants={cardSlideUp} className="relative group">
              <div className="absolute inset-0 bg-black/30 backdrop-blur-sm transform transition-transform duration-300 group-hover:-translate-y-2" />
              <div className="relative p-8 h-full flex flex-col transform transition-transform duration-300 group-hover:-translate-y-2 border-l-4 border-transparent group-hover:border-teal-500">
                <h3 className="text-lg font-light text-white mb-6 uppercase tracking-wider">Sunday Service</h3>

                <div className="mb-6 space-y-1">
                  <p className="text-white font-medium text-lg uppercase">Sunday School</p>
                  <p className="text-white text-lg">9:30 AM - 10 AM</p>
                </div>

                <div className="mb-6 space-y-1">
                  <p className="text-white font-medium text-lg uppercase">Worship Service</p>
                  <p className="text-white text-lg">10:00 AM - 12:00 PM</p>
                </div>

                <div className="mb-6 space-y-1">
                  <p className="text-white font-medium text-lg">Address:</p>
                  <p className="text-white text-lg font-light">94 Salisbury Ave, Warden Hill,</p>
                  <p className="text-white text-lg font-light">Cheltenham GL51 3BY</p>

                </div>

                <p className="text-white text-lg font-light  mb-8">+44 1242 569000</p>

                <div className="mt-auto">
                  <button className="group/btn flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest border border-white/30 px-6 py-3 hover:bg-white hover:text-black transition-all duration-300">
                    Learn More
                    <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* MACON CAMPUS */}
            <motion.div variants={cardSlideUp} className="relative group">
              <div className="absolute inset-0 bg-black/30 backdrop-blur-sm transform transition-transform duration-300 group-hover:-translate-y-2" />
              <div className="relative p-8 h-full flex flex-col transform transition-transform duration-300 group-hover:-translate-y-2 border-l-4 border-transparent group-hover:border-teal-500">
                <h3 className="text-lg font-light text-white mb-6 uppercase tracking-wider">Midweek Service</h3>

                <div className="mb-6 space-y-1">
                  <p className="text-white font-medium text-lg uppercase">Bible Study</p>
                  <p className="text-white text-lg font-medium ">7 PM</p>
                </div>

                <div className="mb-6 space-y-1">
                  <p className="text-white font-medium text-lg uppercase">Wednesday</p>
                  <p className="text-white text-lg font-medium">7 PM</p>
                </div>

                <div className="mb-6 space-y-1">
                  <p className="text-white font-medium text-lg">Address:</p>
                  <p className="text-white text-lg font-light">94 Salisbury Ave, Warden Hill,</p>
                  <p className="text-white text-lg font-light">Cheltenham GL51 3BY</p>

                </div>
                <p className="text-white text-lg font-light mb-8">+44 1242 569000</p>

                <div className="mt-auto">
                  <button className="group/btn flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest border border-white/30 px-6 py-3 hover:bg-white hover:text-black transition-all duration-300">
                    Learn More
                    <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* BRANCH CAMPUS */}
            <motion.div variants={cardSlideUp} className="relative group">
              <div className="absolute inset-0 bg-black/30 backdrop-blur-sm transform transition-transform duration-300 group-hover:-translate-y-2" />
              <div className="relative p-8 h-full flex flex-col transform transition-transform duration-300 group-hover:-translate-y-2 border-l-4 border-transparent group-hover:border-teal-500">
                <h3 className="text-lg font-light text-white mb-6 uppercase tracking-wider">Monthly</h3>

                <div className="mb-6 space-y-1">
                  <p className="text-white font-medium text-lg uppercase">Prayer Meeting</p>
                  <p className="text-white text-lg font-medium">7 PM</p>
                </div>

                <div className="mb-6 space-y-1">
                  <p className="text-white font-medium text-lg uppercase">Every Last Friday</p>
                  <p className="text-white text-lg font-medium">7 PM</p>
                </div>

                <div className="mb-6 space-y-1">
                  <p className="text-white font-medium text-lg">Address:</p>
                  <p className="text-white text-lg font-light">94 Salisbury Ave, Warden Hill,</p>
                  <p className="text-white text-lg font-light">Cheltenham GL51 3BY</p>

                </div>

                <p className="text-white text-lg font-light mb-8">+44 1242 569000</p>

                <div className="mt-auto">
                  <button className="group/btn flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest border border-white/30 px-6 py-3 hover:bg-white hover:text-black transition-all duration-300">
                    Learn More
                    <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* ONLINE CAMPUS */}
            <motion.div variants={cardSlideUp} className="relative group">
              <div className="absolute inset-0 bg-black/30 backdrop-blur-sm transform transition-transform duration-300 group-hover:-translate-y-2" />
              <div className="relative p-8 h-full flex flex-col transform transition-transform duration-300 group-hover:-translate-y-2 border-l-4 border-transparent group-hover:border-teal-500">
                <h3 className="text-lg font-light text-white mb-6 uppercase tracking-wider">Online Campus</h3>

                <div className="mb-6 space-y-1">
                  <p className="text-white font-medium text-lg uppercase">Zoom Details</p>
                  <p className="text-white text-lg font-medium">870 7558 5408</p>
                </div>

                <div className="mb-6 space-y-1">
                  <p className="text-white font-medium text-lg uppercase">Password</p>
                  <p className="text-white text-lg font-medium">JesusTime</p>
                </div>

                <div className="mt-auto pt-8">
                  <button className="group/btn flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest border border-white/30 px-6 py-3 hover:bg-white hover:text-black transition-all duration-300">
                    Learn More
                    <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 py-12 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-2 tracking-tight">
                  LATEST
                </h2>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight">
                  LIVESTREAM
                </h2>
              </div>

              <div className="space-y-2">
                <p className="text-2xl sm:text-3xl text-gray-200 font-light">
                  Let’s Start Exercising in 2026
                </p>
                <p className="text-lg font-bold text-white tracking-widest uppercase">
                  January 4, 2026 | BENNY TATE
                </p>
              </div>

              <button className="bg-white text-black px-10 py-4 font-bold text-sm tracking-[0.2em] hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-white/10 mt-4">
                WATCH MORE
              </button>
            </motion.div>

            {/* Right Video Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="w-full"
            >
              <div className="relative aspect-video group cursor-pointer overflow-hidden shadow-2xl shadow-black/50">
                {/* Thumbnail Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: 'url("/rccg5.jpg")' }}
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
                <div className="absolute inset-0 bg-teal-900/20 group-hover:bg-transparent transition-colors duration-500" />

                {/* Top Bar Info */}
                <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-2 group-hover:translate-y-0">
                  <div className="flex items-center gap-2 text-white/90">
                    <div className="bg-white/20 p-1.5 rounded-full backdrop-blur-sm">
                      <Mountain size={16} />
                    </div>
                    <span className="text-sm font-medium drop-shadow-md">Let&apos;s Start Exercising in 2026 | 1.4.2026 | 11:00 AM</span>
                  </div>
                  <div className="flex gap-4 text-white/90">
                    <div className="flex flex-col items-center gap-1">
                      <Clock size={20} />
                      <span className="text-[10px] uppercase tracking-wider">Watch Later</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Share2 size={20} />
                      <span className="text-[10px] uppercase tracking-wider">Share</span>
                    </div>
                  </div>
                </div>

                {/* Center Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative z-20 transition-transform duration-300 group-hover:scale-110">
                    <div className="bg-red-600 rounded-xl px-6 py-2 shadow-lg flex items-center justify-center">
                      <Play fill="white" className="text-white ml-1" size={32} />
                    </div>
                  </div>

                  {/* Big Text Overlay similar to screenshot */}
                  <div className="absolute right-8 top-1/2 -translate-y-1/2 text-right hidden lg:block pointer-events-none">
                    <h3 className="text-4xl font-thin text-white/20 leading-none">LET&apos;S START</h3>
                    <h3 className="text-6xl font-black text-white/90 leading-none tracking-tighter mix-blend-overlay">EXERCISING</h3>
                    <h3 className="text-4xl font-thin text-white/40 leading-none">IN 2026</h3>
                  </div>
                </div>

                {/* Bottom Bar: Watch on YouTube */}
                <div className="absolute bottom-4 left-4 z-20">
                  <div className="bg-black/80 backdrop-blur-md px-3 py-1.5 rounded flex items-center gap-2 hover:bg-black transition-colors">
                    <span className="text-gray-300 text-xs font-medium">Watch on</span>
                    <div className="flex items-center gap-0.5 text-white font-bold tracking-tighter">
                      <Youtube size={16} fill="white" />
                      <span className="text-sm">YouTube</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

    </div>

  );
}