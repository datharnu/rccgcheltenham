"use client"
import React, { useState } from 'react';
import Navbar from '@/components/shared/Navbar';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function IAmNewPage() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/New Member.jpg"
                        alt="Church Membership"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="relative z-10 text-center text-white px-4">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight uppercase"
                    >
                        Church<br />Membership
                    </motion.h1>
                </div>
            </section>

            {/* Intro Text Section */}
            <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto text-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="space-y-8"
                >
                    <div className="space-y-4">
                        <p className="text-xl md:text-2xl font-semibold italic text-gray-800">
                            &quot;For as the body is one, and hath many members, and all the members of that one body, being many, are one body: so also is Christ.&quot;
                        </p>
                        <p className="font-bold text-gray-600">– Corinthians 12:12 (KJV)</p>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 pt-8">
                        Thank you for your interest in becoming a member of RCCG Conqueror Assembly.
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 text-left pt-8">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-bold text-lg mb-2">Campus membership</h3>
                            <p className="text-gray-600">
                                Is for those who live within the Cheltenham area and seek to attend service at our local campus.
                                We hold membership orientation every last Wednesday and Sunday of the month.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h3 className="font-bold text-lg mb-2">eMembership</h3>
                            <p className="text-gray-600">
                                Is for those who are interested in participating in services at the RCCG Conqueror Assembly virtually and desire to be an official part of our church family but are unable to attend in-person. As an eMember, you still enjoy all the rights and privileges of an on-campus member.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Membership Form Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4 md:px-8">
                    <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                        <div className="bg-white p-8 border-b">
                            <div className="w-12 h-1 bg-[#8dc63f] mb-4"></div> {/* Brand Green Line */}
                            <h2 className="text-3xl font-bold text-gray-900">MEMBERSHIP FORM</h2>
                        </div>

                        <div className="p-8">
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">RCCG New Membership Form</h3>
                                <p className="text-gray-600 text-sm">
                                    Thank you for your interest in becoming a member of our church! Please fill out and submit this form and someone will be in touch soon.
                                </p>
                            </div>

                            <div className="mb-6 pb-2 border-b">
                                <h4 className="font-bold text-lg text-gray-900">Registrant 1</h4>
                            </div>

                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
                                    <input type="text" id="firstName" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0ea5a4] focus:border-transparent outline-none transition-all" />
                                </div>

                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
                                    <input type="text" id="lastName" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0ea5a4] focus:border-transparent outline-none transition-all" />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0ea5a4] focus:border-transparent outline-none transition-all" />
                                </div>

                                <div>
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Mailing Address*</label>
                                    <div className="space-y-3">
                                        <input type="text" placeholder="Street" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0ea5a4] focus:border-transparent outline-none transition-all" />
                                        <div className="grid grid-cols-2 gap-4">
                                            <input type="text" placeholder="City" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0ea5a4] focus:border-transparent outline-none transition-all" />
                                            <div className="grid grid-cols-2 gap-2">
                                                <input type="text" placeholder="State" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0ea5a4] focus:border-transparent outline-none transition-all" />
                                                <input type="text" placeholder="Postal Code" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0ea5a4] focus:border-transparent outline-none transition-all" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Mobile Phone*</label>
                                    <div className="flex">
                                        <select className="px-3 py-2 border border-gray-300 rounded-l-md bg-gray-50 text-gray-600 focus:outline-none">
                                            <option>UK +44</option>
                                            <option>US +1</option>
                                            <option>NG +234</option>
                                        </select>
                                        <input type="tel" id="phone" placeholder="(555) 000-0000" className="w-full px-4 py-2 border border-l-0 border-gray-300 rounded-r-md focus:ring-2 focus:ring-[#0ea5a4] focus:border-transparent outline-none transition-all" />
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <button type="submit" className="w-full bg-[#0ea5a4] text-white font-bold py-3 px-6 rounded-md hover:bg-[#0c8f8e] transition-colors duration-300 shadow-md transform active:scale-95">
                                        SUBMIT FORM
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
