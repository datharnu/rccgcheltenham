"use client"
import React from 'react';
import Navbar from '@/components/shared/Navbar';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function StaffPage() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staffMembers = [
        { name: "CAMERON SHIFLETT", role: "Executive Pastor", image: "/rccg7.jpeg" }, // Placeholder similar to rccg4.jpg or from assets
        { name: "AMBER BALLTZGLIER", role: "Worship Arts Pastor", image: "/rccg2.jpg" }, // Placeholder
        { name: "BRUCE REAGAN", role: "Rock Springs Christian Academy Head of School", image: "/rccg5.jpg" }, // Placeholder
        { name: "RANDALL HAMMOCK", role: "Chief Financial Officer", image: "/rccg6.jpg" }, // Placeholder
        { name: "AMY VARNER", role: "Communications Director", image: "/rccg7.jpeg" }, // Placeholder
        { name: "GORDON POWERS", role: "Choir Pastor", image: "/rccg7.jpeg" }, // Sidebar placeholder
    ];

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero / Header */}
            <section className="bg-white py-16 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-gray-900 uppercase tracking-tight"
                >
                    Our Staff
                </motion.h1>
            </section>

            {/* Executive Leadership */}
            <section className="pb-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="flex flex-col items-center text-center mb-24"
                    >
                        <h2 className="text-2xl md:text-3xl font-medium text-black mb-12">Executive Leadership</h2>

                        <div className="group relative">
                            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-lg overflow-hidden shadow-sm">
                                <Image
                                    src="/DaddyGO.webp" // Placeholder for Lead Pastor
                                    alt="Past. E.A. Adeboye"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="mt-6">
                                <h3 className="text-xl font-bold text-gray-800 uppercase">Past. E.A. Adeboye</h3> {/* Placeholder Name */}
                                <p className="text-gray-500 mt-1">Senior Pastor</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Staff Grid */}
                    <div className="grid md:grid-cols-3 gap-x-8 gap-y-16">
                        {staffMembers.map((staff, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-gray-200 mb-6">
                                    <Image
                                        src={staff.image}
                                        alt={staff.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 uppercase mb-2">{staff.name}</h3>
                                <p className="text-gray-600 text-sm max-w-[200px] leading-relaxed">{staff.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
