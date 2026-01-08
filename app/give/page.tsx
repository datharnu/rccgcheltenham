"use client"
import React from 'react';
import Navbar from '@/components/shared/Navbar';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CreditCard, Landmark, Repeat, Heart, HandHeart, Globe2, Wallet } from 'lucide-react';

export default function GivePage() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-[#0ea5a4]">
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 text-center text-white px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold mb-4"
                    >
                        Giving
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl opacity-90"
                    >
                        Partner with us in Kingdom expansion
                    </motion.p>
                </div>
            </section>

            {/* Intro Text / Scripture */}
            <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto text-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Supporting Our Church</h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        There are many ways you can support Conqueror Assembly. Your contributions of time, talents,
                        and financial resources are essential for advancing the church&apos;s mission and sustaining its operation.
                        We deeply appreciate your generous support toward our God-inspired vision in Cheltenham.
                    </p>
                    <blockquote className="border-l-4 border-[#0ea5a4] pl-6 py-2 bg-gray-50 italic text-gray-700 text-lg">
                        &quot;Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion,
                        for God loves a cheerful giver.&quot;
                        <footer className="text-gray-500 text-sm font-semibold mt-2">– 2 Corinthians 9:7</footer>
                    </blockquote>
                </motion.div>
            </section>

            {/* Ways to Give */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 uppercase tracking-wide">Ways to Give</h2>
                        <div className="h-1 w-24 bg-[#0ea5a4] mx-auto mb-8"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We offer multiple options for giving financial support to RCCG Conqueror Assembly,
                            allowing you to choose the one that suits you best.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Cash/Cheques */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="bg-gray-50 p-8 rounded-2xl text-center group hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Wallet className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Cash/Cheques</h3>
                            <p className="text-gray-600">
                                Cash/Cheques using the offering envelopes available in our services.
                            </p>
                        </motion.div>

                        {/* Bank Transfer - HIGHLIGHTED */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="bg-white p-8 rounded-2xl text-center border-2 border-[#0ea5a4] shadow-lg relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 bg-[#0ea5a4] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                PREFERRED
                            </div>
                            <div className="w-20 h-20 bg-[#e0f5f5] text-[#0ea5a4] rounded-full flex items-center justify-center mx-auto mb-6">
                                <Landmark className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Bank Transfer</h3>

                            <div className="space-y-3 text-gray-700 bg-gray-50 p-4 rounded-lg">
                                <p className="font-semibold text-gray-900">BARCLAYS BANK</p>
                                <div className="border-t border-gray-200 my-2"></div>
                                <div className="text-sm">
                                    <p className="mb-1"><span className="text-gray-500">Acct Name:</span><br /><span className="font-medium">RCCG Conquerors Assembly, Cheltenham</span></p>
                                    <p className="mb-1"><span className="text-gray-500">Account Number:</span> <span className="font-bold text-lg text-[#0ea5a4]">43166961</span></p>
                                    <p><span className="text-gray-500">Sort Code:</span> <span className="font-bold">20-20-15</span></p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Standing Order */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="bg-gray-50 p-8 rounded-2xl text-center group hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Repeat className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Standing Order</h3>
                            <p className="text-gray-600">
                                Set up a recurring donation to pay your tithes effortlessly through your bank using the same account details as the bank transfer.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-16 items-center"
                >
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-8">How Your Giving Helps</h2>
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
                                    <HandHeart className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Ministries and Facilities</h3>
                                    <p className="text-gray-600">Support church programs and maintain a place a worship.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                                    <Heart className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Community Outreach</h3>
                                    <p className="text-gray-600">Provide for the needy and organize impactful events.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                                    <Globe2 className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Local and Global Missions</h3>
                                    <p className="text-gray-600">Empower missionaries and spread the Gospel worldwide.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="/rccg6.jpg" // Using generic community image from public
                            alt="Community Impact"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                            <p className="text-white font-medium text-lg">&quot;Your generosity changes lives.&quot;</p>
                        </div>
                    </div>
                </motion.div>
            </section>

        </main>
    );
}
