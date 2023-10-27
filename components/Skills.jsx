"use client";

import {
  Javascript,
  Mongodb,
  HTML5,
  TypeScript,
  Nextjs,
  React,
  TailwindCSS,
  Nodejs,
} from "@/components/svg";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <section className="bg-grid w-full h-full px-8 pt-0 pb-16 2xl:pb-36 md:pt-16 flex justify-center items-center flex-col">
        <h1 className="bg-gradient-to-r from-emerald-300 to-emerald-600 bg-clip-text text-transparent text-center text-3xl md:text-5xl 2xl:text-7xl font-bold mb-1 pb-1">
          Coding Skills
        </h1>
        <p className="text-zinc-300 mx-4 mb-8 2xl:mb-16 text-center 2xl:text-2xl">
          He're are languages that i learned and mastered
        </p>
        <div className="w-full max-w-screen-md xl:max-w-screen-lg m-4 mx-8 grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8 text-zinc-300">
          <div className="h-20 bg-orange-500/[2%] rounded-xl border-orange-400/20 border border-solid backdrop-blur-md shadow-md p-4 flex justify-center sm:justify-start items-center hover:border-orange-400/40 hover:bg-orange-500/[5%] transitions-colors duration-500">
            <HTML5 />
            <div className="hidden sm:block">
              <h2 className="text-xl font-black p-0 m-0">HTML</h2>
              <p className="text-orange-500 text-sm">Advanced</p>
            </div>
          </div>
          <div className="h-20 bg-yellow-500/[2%] rounded-xl border-yellow-400/20 border border-solid backdrop-blur-md shadow-md p-4 flex justify-center sm:justify-start items-center hover:border-yellow-400/40 hover:bg-yellow-500/[5%] transitions-colors duration-500">
            <Javascript />
            <div className="hidden sm:block">
              <h2 className="text-xl font-black p-0 m-0">Javascript</h2>
              <p className="text-yellow-500 text-sm">Advanced</p>
            </div>
          </div>
          <div className="h-20 bg-gray-950/10 rounded-xl border-emerald-900 border border-solid backdrop-blur-md shadow-md p-4 flex justify-center sm:justify-start items-center hover:border-emerald-700 hover:bg-emerald-900/20 transitions-colors duration-500">
            <TypeScript />
            <div className="hidden sm:block">
              <h2 className="text-xl font-black p-0 m-0">TypeScript</h2>
              <p className="text-emerald-500 text-sm">Beginner</p>
            </div>
          </div>
          <div className="h-20 bg-gray-950/10 rounded-xl border-emerald-900 border border-solid backdrop-blur-md shadow-md p-4 flex justify-center sm:justify-start items-center hover:border-emerald-700 hover:bg-emerald-900/20 transitions-colors duration-500">
            <Nextjs />
            <div className="hidden sm:block">
              <h2 className="text-xl font-black p-0 m-0">Next.JS</h2>
              <p className="text-emerald-500 text-sm">Intermediate</p>
            </div>
          </div>
          <div className="h-20 bg-cyan-500/[2%] rounded-xl border-cyan-400/20 border border-solid backdrop-blur-md shadow-md p-4 flex justify-center sm:justify-start items-center hover:border-cyan-400/40 hover:bg-cyan-500/[5%] transitions-colors duration-500">
            <React />
            <div className="hidden sm:block">
              <h2 className="text-xl font-black p-0 m-0">React</h2>
              <p className="text-cyan-500 text-sm">Intermediate</p>
            </div>
          </div>
          <div className="h-20 bg-blue-500/[2%] rounded-xl border-blue-400/20 border border-solid backdrop-blur-md shadow-md p-4 flex justify-center sm:justify-start items-center hover:border-blue-400/40 hover:bg-blue-500/[5%] transitions-colors duration-500">
            <TailwindCSS />
            <div className="hidden sm:block">
              <h2 className="text-xl font-black p-0 m-0">Tailwind CSS</h2>
              <p className="text-blue-500 text-sm">Advanced</p>
            </div>
          </div>
          <div className="h-20 bg-blue-500/[2%] rounded-xl border-blue-400/20 border border-solid backdrop-blur-md shadow-md p-4 flex justify-center sm:justify-start items-center hover:border-blue-400/40 hover:bg-blue-500/[5%] transitions-colors duration-500">
            <Nodejs />
            <div className="hidden sm:block">
              <h2 className="text-xl font-black p-0 m-0">Node.js</h2>
              <p className="text-blue-500 text-sm">Advanced</p>
            </div>
          </div>
          <div className="h-20 bg-fuchsia-500/[2%] rounded-xl border-fuchsia-400/20 border border-solid backdrop-blur-md shadow-md p-4 flex justify-center sm:justify-start items-center hover:border-fuchsia-400/40 hover:bg-fuchsia-500/[5%] transitions-colors duration-500">
            <Mongodb />
            <div className="hidden sm:block">
              <h2 className="text-xl font-black p-0 m-0">Mongodb</h2>
              <p className="text-fuchsia-500 text-sm">Advanced</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Skills;
