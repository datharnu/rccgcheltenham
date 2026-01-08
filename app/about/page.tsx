"use client"
import React from 'react';
import Navbar from '@/components/shared/Navbar';
import Image from 'next/image';
import { Target, Eye, CheckCircle2, Heart, Users, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const slideInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const slideInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/rccg5.jpg"
                        alt="RCCG Community"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/30" />
                </div>

                <div className="relative z-10 text-center text-white px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
                    >
                        Who We Are
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl font-light opacity-90 max-w-2xl mx-auto"
                    >
                        A family of love, faith, and purpose.
                    </motion.p>
                </div>
            </section>

            {/* Section 1: Mission (Text Left, Image Right) */}
            <section className="py-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={slideInLeft}
                            className="space-y-6"
                        >
                            <div className="inline-block">
                                <h2 className="text-4xl font-bold text-gray-900 mb-2">Our Mission</h2>
                                <div className="h-1 w-20 bg-[#0ea5a4]"></div> {/* Brand Color Line */}
                            </div>

                            <div className="prose prose-lg text-gray-600">
                                <p className="text-lg leading-relaxed">
                                    <span className="font-semibold text-[#0ea5a4]">RCCG Conqueror Assembly Cheltenham</span> is a Charity Registered in the UK.
                                    We are closely linked with the community and we organise activities to support the less privileged.
                                </p>
                                <p className="light:text-gray-600">
                                    Where we serve, we bring a message of hope to the hopeless, support the youth to maximise their God-given potential,
                                    and support the seniors in their old age. In the Youth ministry, we focus on helping the youth to live a Godly life
                                    by staying away from drugs, alcohol, and crime.
                                </p>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg min-w-[100px]">
                                    <Heart className="w-8 h-8 text-[#0ea5a4] mb-2" />
                                    <span className="text-sm font-semibold text-gray-700">Charity</span>
                                </div>
                                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg min-w-[100px]">
                                    <Users className="w-8 h-8 text-[#0ea5a4] mb-2" />
                                    <span className="text-sm font-semibold text-gray-700">Community</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Image Content */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={slideInRight}
                            className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/rccg1.jpeg"
                                alt="Our Mission in Action"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 2: Vision (Image Left, Text Right) */}
            <section className="py-20 bg-gray-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* Image Content (First on Desktop) */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={slideInLeft}
                            className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1"
                        >
                            <Image
                                src="/kids3.jpg"
                                alt="Our Vision"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>

                        {/* Text Content */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={slideInRight}
                            className="space-y-6 order-1 md:order-2"
                        >
                            <div className="inline-block">
                                <h2 className="text-4xl font-bold text-gray-900 mb-2">Our Vision</h2>
                                <div className="h-1 w-20 bg-[#0ea5a4]"></div>
                            </div>

                            <div className="bg-white p-6 rounded-xl border-l-4 border-[#0ea5a4] shadow-sm mb-6">
                                &quot;As received by the General Overseer (G.O.), Pastor E. A. Adeboye... our vision and mission statement shall remain intact, with a qualifying addendum...&quot;
                            </div>

                            <ul className="space-y-4">
                                {[
                                    "To make heaven.",
                                    "To take as many people with us.",
                                    "To have a member of RCCG in every family of all nations.",
                                    "To accomplish No. 1 above, holiness will be our lifestyle.",
                                    "Plant churches within 5 mins walking/driving distance worldwide.",
                                    "Reach every nation for the Lord Jesus Christ."
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        viewport={{ once: true }}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-[#0ea5a4] mt-1 flex-shrink-0" />
                                        <span className="text-gray-700 leading-snug">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Values Section */}

        </main>
    );
}
