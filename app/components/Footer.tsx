'use client';

import { Mountain, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white w-full py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-900">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Logo Section */}
                    <div className="flex flex-col items-center lg:items-start lg:col-span-1">
                        <Link href="/" className="flex flex-col items-center lg:items-start gap-2 group">
                            <Image src="/rccg-logo.png" alt="Logo" width={100} height={100} className='w-16 h-16' />
                            <div className="flex flex-col items-center lg:items-start leading-none mt-2">
                                <span className="text-xl font-bold tracking-widest">RCCG</span>
                                <span className="text-xl font-bold tracking-widest">CONQUEROR</span>
                                <span className="text-xl font-bold tracking-widest">ASSEMBLY</span>
                            </div>
                        </Link>
                    </div>

                    {/* Mobile Divider */}
                    <div className="w-full h-px bg-gray-800 lg:hidden" />

                    {/* Links Section */}
                    <div className="flex flex-col items-center lg:items-start space-y-6 text-center lg:text-left">
                        <div>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                                Rccg Conqueror Assembly
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="#" className="font-semibold hover:text-gray-300 transition-colors">
                                        How We Care
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Mobile Divider */}
                    <div className="w-full h-px bg-gray-800 lg:hidden" />

                    {/* Campus Sections */}
                    <div className="flex flex-col items-center lg:items-start space-y-6 text-center lg:text-left">
                        <div>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                                Campus
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="#" className="font-semibold hover:text-gray-300 transition-colors">
                                        Milner (Original)
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="font-semibold hover:text-gray-300 transition-colors">
                                        The Branch
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="font-semibold hover:text-gray-300 transition-colors">
                                        Macon
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="font-semibold hover:text-gray-300 transition-colors">
                                        Outreach Center
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="font-semibold hover:text-gray-300 transition-colors">
                                        Online
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Mobile Divider */}
                    <div className="w-full h-px bg-gray-800 lg:hidden" />

                    {/* Social Section */}
                    <div className="flex flex-col items-center lg:items-start space-y-6">
                        <div>
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                                Social
                            </h3>
                            <div className="flex gap-4 bg-white/5 p-4 rounded-full backdrop-blur-sm">
                                <Link href="#" className="hover:text-gray-300 transition-transform hover:scale-110">
                                    <Facebook size={20} />
                                </Link>
                                <Link href="#" className="hover:text-gray-300 transition-transform hover:scale-110">
                                    <Instagram size={20} />
                                </Link>
                                <Link href="#" className="hover:text-gray-300 transition-transform hover:scale-110">
                                    <Youtube size={20} />
                                </Link>
                                <Link href="#" className="hover:text-gray-300 transition-transform hover:scale-110">
                                    <Twitter size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-16 pt-8 border-t border-gray-900 text-center">
                    <p className="text-sm text-gray-500">
                        © {currentYear} RCCG Conqueror Assembly, Cheltenham
                    </p>
                </div>
            </div>
        </footer>
    );
}
