'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Search, ShoppingCart, Globe } from 'lucide-react';

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full bg-white shadow-md py-3 px-6 flex justify-between items-center fixed top-0 z-50"
        >
            {/* Left section */}
            <div className="flex items-center space-x-3">
                <Link
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                >
                    <img
                        src="https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/v7/logo-udemy.svg"
                        alt="Udemy"
                        className="h-8.5 w-auto pr-2"
                    />
                </Link>
                <Link
                    href="/"
                    className="bg-white pr-3 pl-3 pt-1 pb-2 hover:text-[#6D28D2] hover:bg-[#ede5f9] rounded-1xl"
                >
                    Explore
                </Link>
            </div>

            {/* Search bar */}
            <div className="relative flex-grow max-w-xl mx-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <Input
                    type="text"
                    placeholder="Find your next course by skill, topic, or instructor"
                    className="pl-10 pr-4 py-6 rounded-4xl w-full border border-gray-300"
                />
            </div>

            {/* Right section */}
            <div className="space-x-0 flex items-center">
                <Link href="/" className="bg-white pr-3 pl-3 pt-2 pb-2 hover:text-[#6D28D2] hover:bg-[#ede5f9] rounded-1xl">
                    Plans & Pricing
                </Link>
                <Link href="/" className="bg-white pr-3 pl-3 pt-2 pb-2 hover:text-[#6D28D2] hover:bg-[#ede5f9] rounded-1xl">
                    Udemy Business
                </Link>
                <Link href="/" className="bg-white pr-3 pl-3 pt-2 pb-2 hover:text-[#6D28D2] hover:bg-[#ede5f9] rounded-1xl">
                    Teach on Udemy
                </Link>
                <Link href="/" className="bg-white pr-3 pl-3 pt-2 pb-2 mr-1.5 hover:text-[#6D28D2] hover:bg-[#ede5f9] rounded-1xl">
                    <ShoppingCart className="w-5 h-5" />
                </Link>
                <Link href="/" className="border border-black rounded-sm bg-white text-[#6D28D2] pr-3 pl-3 pt-2 pb-2 mr-1.5 hover:bg-[#ede5f9] rounded-1xl">
                    <b>Log in</b>
                </Link>
                <Link href="/" className="bg-[#6d28d2] text-white pr-3 pl-3 pt-2 pb-2 mr-1.5 hover:bg-[#892de1] rounded-sm">
                    Sign up
                </Link>
                <Link href="/" className="border border-black rounded-sm bg-white pr-3 pl-3 pt-2 pb-2 hover:text-black hover:bg-[#ede5f9]">
                    <Globe className="w-5 h-5" />
                </Link>
            </div>
        </motion.nav>
        
    );
}
