"use client"
import React from 'react';
import Navbar from '@/components/shared/Navbar';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, Send } from 'lucide-react';

export default function ContactPage() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const slideInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } }
    };

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Title */}
            <section className="bg-gray-50 py-12 md:py-20 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight"
                >
                    Contact Us
                </motion.h1>
            </section>

            {/* Split Layout Section */}
            <section className="bg-black">
                <div className="flex flex-col md:flex-row min-h-[600px]">

                    {/* Left: Image */}
                    <div className="w-full md:w-1/2 relative h-[400px] md:h-auto overflow-hidden">
                        <Image
                            src="/rccg5.jpg" // Using existing asset
                            alt="Worship Service"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20" /> {/* Subtle overlay */}
                    </div>

                    {/* Right: Info Card */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideInRight}
                        className="w-full md:w-1/2 bg-black text-white p-12 md:p-20 flex flex-col justify-center"
                    >
                        <div className="space-y-12 max-w-md mx-auto md:mx-0">

                            {/* Address */}
                            <div className="text-center md:text-left group">
                                <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                                    <div className="p-3 bg-[#0ea5a4]/20 rounded-full group-hover:bg-[#0ea5a4] transition-colors duration-300">
                                        <MapPin className="w-6 h-6 text-[#0ea5a4] group-hover:text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold tracking-widest uppercase">Location</h3>
                                </div>
                                <p className="text-gray-400 leading-relaxed pl-0 md:pl-[60px]">
                                    RCCG Conqueror Assembly<br />
                                    Cheltenham, UK
                                    {/* Placeholder address until specific one provided */}
                                </p>
                            </div>

                            {/* Service Times */}
                            <div className="text-center md:text-left group">
                                <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                                    <div className="p-3 bg-[#0ea5a4]/20 rounded-full group-hover:bg-[#0ea5a4] transition-colors duration-300">
                                        <Clock className="w-6 h-6 text-[#0ea5a4] group-hover:text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold tracking-widest uppercase">Service Times</h3>
                                </div>
                                <div className="text-gray-400 pl-0 md:pl-[60px] space-y-1">
                                    <p>Sundays <span className="text-white font-medium">10:00 am</span></p>
                                    <p>mid-week service (Wednesdays) <span className="text-white font-medium">6:00 pm</span></p>
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="text-center md:text-left group">
                                <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                                    <div className="p-3 bg-[#0ea5a4]/20 rounded-full group-hover:bg-[#0ea5a4] transition-colors duration-300">
                                        <Phone className="w-6 h-6 text-[#0ea5a4] group-hover:text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold tracking-widest uppercase">Contact</h3>
                                </div>
                                <div className="text-gray-400 pl-0 md:pl-[60px]">
                                    <p className="hover:text-[#0ea5a4] transition-colors cursor-pointer mb-2 block">
                                        +44 7407 155519
                                    </p>
                                    <p className="hover:text-[#0ea5a4] transition-colors cursor-pointer flex items-center justify-center md:justify-start gap-2">
                                        <Mail className="w-4 h-4" /> info@rccgconqueror.org
                                    </p>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Get in Touch Form Section */}
            <section className="py-20 bg-gray-50 px-4 md:px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                    <div className="md:flex">
                        <div className="md:w-1/3 bg-[#0ea5a4] p-10 text-white flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Send a Message</h3>
                                <p className="opacity-90 leading-relaxed">
                                    Have a prayer request, question, or just want to say hello? We'd love to hear from you.
                                </p>
                            </div>
                            <div className="mt-8">
                                <Send className="w-12 h-12 opacity-50" />
                            </div>
                        </div>

                        <div className="md:w-2/3 p-10">
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                                        <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0ea5a4] focus:border-transparent outline-none transition-all" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                                        <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0ea5a4] focus:border-transparent outline-none transition-all" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                                    <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0ea5a4] focus:border-transparent outline-none transition-all text-gray-600">
                                        <option>General Inquiry</option>
                                        <option>Prayer Request</option>
                                        <option>Membership</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                    <textarea rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0ea5a4] focus:border-transparent outline-none transition-all resize-none"></textarea>
                                </div>

                                <button type="button" className="inline-flex items-center gap-2 bg-black text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-800 transition-colors duration-300 shadow-lg transform active:scale-95">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </section>

        </main>
    );
}
