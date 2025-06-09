'use client';

import React, { useState, useRef } from "react";
import { motion } from 'framer-motion';
import Navbar from '@/components/ui/Navbar';
import { Card, CardTitle, CardDescription, CardHeader, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from 'next/image';
import img1 from '@/lib/img1.png';
import img2 from '@/lib/img2.png';
import img3 from '@/lib/img3.png';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from "lucide-react";


export default function Home() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const pillScrollRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 300;
    const currentScroll = scrollRef.current.scrollLeft;

    scrollRef.current.scrollTo({
      left: direction === "left" ? currentScroll - scrollAmount : currentScroll + scrollAmount,
      behavior: "smooth",
    });
  };

const scrollPills = (direction: 'left' | 'right') => {
  if (!pillScrollRef.current) return;
  const amount = 300;

  pillScrollRef.current.scrollBy({
    left: direction === "left" ? -amount : amount,
    behavior: "smooth",
  });

  // Enable left arrow once user scrolls right
  if (direction === "right") setCanScrollLeft(true);

  // Disable left arrow if scrolled back to start
  if (
    direction === "left" &&
    pillScrollRef.current.scrollLeft - amount <= 0
  ) {
    setCanScrollLeft(false);
  }
};

  return (
    <>
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-[75px] min-h-screen  bg-white flex flex-col   px-4 pb-0">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full px-[80px]" // wrap image and card with padding here
        >
          {/* Hero Image */}
          <img
            src="https://img-c.udemycdn.com/notices/web_carousel_slide/image/2b800e53-3534-4623-85bf-3cdf6749615b.png"
            alt="Udemy Offer"
            className="w-full"
          />

          {/* Offer Card overlaying image */}
          <Card className="h-50 w-110 absolute top-16 left-37 max-w-md bg-white/90 shadow-lg backdrop-blur-md rounded-none">
            <CardHeader>
              <CardTitle className="text-[28px] font-semibold font-serif">
                Best prices of the season end today
              </CardTitle>
              <CardDescription className="text-base font-medium">
                Get skills that make you marketable. Courses from ₹399 end soon.
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.section>
        <motion.section className='flex flex-col items-stretch text-left'>
           {/* Heading Below Hero */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className=" mt-13 pl-25 text-3xl font-serif font-bold text-gray-800 "
        >
          Ready to reimagine your career?
        </motion.h2>
        </motion.section>
        <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className=" text-xl mt-1 pl-25  font-serif font-light text-gray-800 ">
          Get the skills and real-world experience employers want with Career Accelerators.
        </motion.p>
        <motion.section 
        initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        className='ml-10'>
        <div className="flex  ">
      <Card
        className='h-94 w-[31%] ml-18 mt-6 pt-4 pr-3 hover:bg-[#f6f7f9]'>
          <Image
          src={img1} // path is relative to public
          alt="My Local Image"
          className="h-70 w-110 rounded-md pl-3 pt-0"
        />
          <CardHeader>
              <CardTitle className="text-[18px] font-bold font-serif">
                Full Stack Web Developer
              </CardTitle>
              <CardDescription className="text-[13px]  font-medium">
                $127,005 average salary (US)  •  16,500 open roles (US)
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex items-center gap-2 pl-3 pt-0 pb-2 ml-2">
            <div className="flex items-center gap-1 px-2 py-1 border-1 border-gray-300  rounded-sm text-[12px]">
              <span>⭐</span>
              <span>4.7</span>
            </div>
            <div className="flex items-center gap-0   px-2 py-1 border-1 border-gray-300  rounded-sm text-[12px]">
              443K ratings
            </div>
            <div className="flex items-center gap-1  px-2 py-1 border-1 border-gray-300 rounded-sm text-[12px]">
              87.6 total hours
            </div>
            </CardFooter>
        </Card>
      <Card
        className='h-94 w-[31%] ml-4 mt-6 pt-4 pr-3 hover:bg-[#f6f7f9]'>
          <Image
          src={img2} // path is relative to public
          alt="My Local Image"
          className="h-70 w-110 rounded-md pl-3 pt-0"
        />
        <CardHeader>
              <CardTitle className="text-[18px] font-bold font-serif">
                Digital Marketer
              </CardTitle>
              <CardDescription className="text-[13px]  font-medium">
                $61,126 average salary (US)  •  36,600 open roles (US) 
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex items-center gap-2 pl-3 pt-0 pb-2 ml-2">
            <div className="flex items-center gap-1 px-2 py-1 border-1 border-gray-300  rounded-sm text-[12px]">
              <span>⭐</span>
              <span>4.6</span>
            </div>
            <div className="flex items-center gap-0   px-2 py-1 border-1 border-gray-300  rounded-sm text-[12px]">
              3.3K ratings
            </div>
            <div className="flex items-center gap-1  px-2 py-1 border-1 border-gray-300 rounded-sm text-[12px]">
              28.4 total hours
            </div>
            </CardFooter>
        </Card>

      <Card
        className='h-94 w-[31%] ml-4 mr-25   mt-6 pt-4 pr-3 hover:bg-[#f6f7f9]'>
          <Image
          src={img3} // path is relative to public
          alt="My Local Image"
          className="h-70 w-110 rounded-md pl-3 pt-0"
        />
        <CardHeader>
              <CardTitle className="text-[18px] font-bold font-serif">
                Data Scientist
              </CardTitle>
              <CardDescription className="text-[13px]  font-medium">
                $126,629 average salary (US)  •  20,800 open roles (US) 
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex items-center gap-2 pl-3 pt-0 pb-2 ml-2">
            <div className="flex items-center gap-1 px-2 py-1 border-1 border-gray-300  rounded-sm text-[12px]">
              <span>⭐</span>
              <span>4.6</span>
            </div>
            <div className="flex items-center gap-0   px-2 py-1 border-1 border-gray-300  rounded-sm text-[12px]">
              216K ratings
            </div>
            <div className="flex items-center gap-1  px-2 py-1 border-1 border-gray-300 rounded-sm text-[12px]">
              46.8 total hours
            </div>
            </CardFooter>
        </Card>
    </div>
        </motion.section>

        <motion.section
        className=" mt-9 pl-25 "
        >
          <Link href="/" className="bg-white text-[#6D28D2] font-bold font-serif pr-2 pl-2 pt-3 pb-3 hover:text-[#6D28D2] hover:bg-[#ede5f9] rounded-sm border-[#6D28D2] border-1">
                    All Career Accelerators
          </Link>
        </motion.section>

        <motion.section>
          <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className=" mt-13 pl-25 text-3xl font-serif font-bold text-gray-800 "
        >
          All the skills you need in one place
        </motion.h2>
        </motion.section>
        
        <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className=" text-[18px] mt-2 pl-25 mb-6 font-serif font-light text-gray-800 ">
          From critical skills to technical topics, Udemy supports your professional development.
        </motion.p>

        <motion.section className="w-full bg-white py-6">
  <Tabs defaultValue="data-science" className="w-full">
  {/* Tabs Nav */}
  <TabsList
    className="bg-white flex overflow-x-auto gap-6 px-4 pb-1 ml-20 scrollbar-hide"
    style={{ scrollbarWidth: 'none' }} // hides scrollbar on Firefox
  >
    {[
      "Data Science",
      "IT Certifications",
      "Leadership",
      "Web Development",
      "Communication",
      "Business Analytics & Intelligence",
    ].map((category) => (
      <TabsTrigger
        key={category}
        value={category.toLowerCase().replace(/\s+/g, "-")}
        className=" data-[state=active]:border-b-2 "
      >
        <div className="text-base font-bold leading-tight">{category}</div>
      </TabsTrigger>
    ))}
  </TabsList>



    {/* Tabs Content */}
    <TabsContent value="data-science" className="bg-[#f6f7f9] w-full mt-0  pt-1">
     
      {/* Category Carousel - White background */}
      <div className="bg-[#f6f7f9] relative py-4 px-4 rounded-md">
      {/* Left Arrow */}
      <button
  className={`absolute left-16 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 
    ${canScrollLeft ? "hover:bg-gray-200" : "opacity-50 cursor-not-allowed"}`}
  onClick={() => canScrollLeft && scrollPills("left")}
  aria-label="Scroll left"
  disabled={!canScrollLeft}
>
  <ChevronLeft size={20} />
</button>

      {/* Carousel Pills */}
      <div
    ref={pillScrollRef}
    className="flex gap-3 overflow-x-hidden scroll-smooth ml-20 mr-25"
  >
    {[
      { label: "ChatGPT", badge: "4M+ learners" },
      { label: "Data Science", badge: "7M+ learners" },
      { label: "Python", badge: "48.8M+ learners" },
      { label: "Machine Learning", badge: "8M+ learners" },
      { label: "Deep Learning", badge: "2M+ learners" },
      { label: "Artificial Intelligence (AI)", badge: "4M+ learners" },
      { label: "Statistics", badge: "1M+ learners" },
      { label: "Natural Language Processing (NLP)", badge: "834,100 learners" },
    ].map((cat, index) => (
      <button
        key={index}
        onClick={() => setActiveIndex(index)}
        className={`
          rounded-full border px-5 py-3 text-center whitespace-nowrap transition
          ${activeIndex === index
            ? "bg-[#595C73] border-transparent text-white"
            : "bg-[#E9EAF2] border-gray-300 hover:bg-[#D1D2E0] text-gray-900"
          }
        `}
      >
        <div className="text-base font-bold leading-tight">{cat.label}</div>
        <div className={`text-left text-sm font-medium mt-1 ${activeIndex === index ? "text-gray-200" : "text-gray-500"}`}>
          {cat.badge}
        </div>
      </button>
    ))}
  </div>

      {/* Right Arrow */}
      <button
        className="absolute right-16 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-md mr-10 p-2 hover:bg-gray-200"
        onClick={() => scrollPills("right")}
        aria-label="Scroll right"
      >
        <ChevronRight size={20} />
      </button>
    </div>

<div className=" bg-[#f6f7f9] relative mt-6">
    <div className="flex items-center relative">
      <button
        className="absolute left-16 z-10 rounded-full bg-white shadow-md p-3 hover:bg-gray-200 transition"
        onClick={() => {
          if (!scrollRef.current) return;
          const scrollAmount = 300;
          scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        }}
        aria-label="Scroll courses left"
      >
        <ChevronLeft size={24} />
      </button>

      <div
            className="flex overflow-x-auto  gap-6 mr-30 pl-20  scrollbar-hide scroll-smooth"
            ref={scrollRef}
            style={{ scrollbarWidth: "none" }} // hides scrollbar on Firefox
          >
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="min-w-[260px] max-w-[260px] rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-lg transition"
              >
                <img
                  src="https://img-c.udemycdn.com/course/240x135/5482780_5b2e_2.jpg"
                  alt="Course"
                  className="rounded-lg mb-4 w-full h-[140px] object-cover"
                />
                <h3 className="font-semibold text-base leading-tight mb-2 line-clamp-2 px-8 py-8">
                  The Complete AI Guide: Learn ChatGPT, Generative AI & More
                </h3>
                <p className="text-xs text-gray-500 mb-1 px-8">Julian Melanson, Benza Maman</p>
                <div className="flex items-center gap-1 text-yellow-400 text-sm mb-2 px-8">
                  ★ 4.5 <span className="text-gray-400 text-xs">(48,266)</span>
                </div>
                <div className="text-sm font-semibold mb-1 px-8">
                  <span>₹599</span>{" "}
                  <span className="line-through text-gray-400 text-xs">₹2,819</span>
                </div>
                <div className="px-8">
                  <span className="text-green-700 text-xs font-semibold bg-green-100 px-3 py-1 rounded-full">
                    Bestseller
                  </span>
                </div>
              </div>
            ))}
          </div>

      <button
        className="absolute -right-3 z-10 mr-26 rounded-full bg-white shadow-md p-3 hover:bg-gray-200 transition"
        onClick={() => {
          if (!scrollRef.current) return;
          const scrollAmount = 300;
          scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }}
        aria-label="Scroll courses right"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  </div>

      {/* View All Button */}
      <div className="ml-25 mt-8 mb-16 text-left">
        <button className="text-sm font-semibold text-violet-700 border border-violet-700 rounded-md px-5 py-3 hover:bg-violet-100 transition">
          Show all Data Science courses
        </button>
      </div>
    </TabsContent>
  </Tabs>
</motion.section>

        
      </main>

      
        
        
    </>
  );
}
