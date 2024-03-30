"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" priority fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center lg:mt-0 mt-8">
          {/* TITLE */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            Hello! I am Dhruv Ojha.
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
          Dedicated and motivated Computer Science Engineering graduate from LNMIIT Jaipur, equipped with a robust foundation in computer science principles and a keen knack for unraveling complex problems. Proficient in various programming languages and technologies, with an unwavering commitment to continuous learning and staying attuned to industry trends. Demonstrated ability to collaborate within cross-functional teams, effectively communicate technical concepts, and consistently deliver high-quality results. Enthusiastic about channeling my expertise and passion for problem-solving into a dynamic and progressive organization.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4 p-3 m-3">
            <Link href="/portfolio" className="p-3 rounded-lg ring-1 ring-black hover:bg-red-200">
              View My Work
            </Link>
            <Link href="/contact" className="p-3 rounded-lg ring-1 ring-black hover:bg-red-200">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;