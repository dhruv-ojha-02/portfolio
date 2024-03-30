"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
    {
        id: 1,
        color: "from-red-300 to-blue-300",
        title: "StayScape",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
        img: "/stayscape.png",
        link: "https://lama.dev",
    },
    {
        id: 2,
        color: "from-blue-300 to-violet-300",
        title: "StayScape",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
        img: "/stayscape.png",
        link: "https://lama.dev",
    },
    {
        id: 3,
        color: "from-violet-300 to-purple-300",
        title: "StayScape",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
        img: "/stayscape.png",
        link: "https://lama.dev",
    },
];

const PortfolioPage = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({ target: ref });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className="h-[600vh] relative" ref={ref}>
                <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
                    My Projects
                </div>
                <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex">
                        <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
                        {items.map((item) => (
                            <div
                                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                                key={item.id}
                            >
                                <div className="flex justify-center items-center flex-col gap-4 text-white">
                                    <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-4xl">
                                        {item.title}
                                    </h1>
                                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[450px] lg:h-[300px] xl:w-[450px] xl:h-[300px]">
                                        <Image className="rounded-2xl" src={item.img} alt="" fill />
                                    </div>
                                    <p className="w-80 md:w96 lg:w-[450px] lg:text-lg xl:w-[450px]">
                                        {item.desc}
                                    </p>
                                    <div className="flex gap-1">
                                        <Link href={item.link} className="flex justify-end">
                                            <button className="p-2 text-sm md:p-2 md:text-md lg:p-3 lg:text-lg bg-black text-white font-semibold m-4 rounded-2xl hover:bg-white hover:text-black">Live Link</button>
                                        </Link>
                                        <Link href={item.link} className="flex justify-end">
                                            <button className="p-2 text-sm md:p-2 md:text-md lg:p-3 lg:text-lg bg-black text-white font-semibold m-4 rounded-2xl hover:bg-white hover:text-black">Github Link</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default PortfolioPage;