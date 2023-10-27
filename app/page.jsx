"use client";

import Animation from "@/components/TypeAnimation";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-grid w-full h-full min-h-screen pt-8 px-8 md:px-24 flex justify-center items-center flex-col-reverse md:flex-row">
      <div className="w-full md:w-1/2 flex justify-center items-center md:items-start flex-col lg:pl-16 2xl:pl-24 text-center md:text-left">
        <p className="lg:text-lg 2xl:text-xl text-emerald-400 md:ml-1 mb-1 md:mb-3 mt-8 md:mt-0">
          Hello there! I'm ...
        </p>
        <h1 className="text-5xl lg:text-8xl 2xl:text-9xl font-bold mb-6">
          Krishnay
        </h1>
        <p className="text-sm lg:text-lg 2xl:text-xl text-zinc-300 md:ml-1 mx-2 md:mx-0 mb-4 2xl:mb-6">
          <span className="text-lg lg:text-2xl 2xl:text-3xl">
            I'm a{" "}
            <span className="from-emerald-300 to-emerald-600 font-bold drop-shadow">
              <Animation />
            </span>
          </span>
          <br />
          Welcome to my personal website! 👋🏼
        </p>

        <Link
          href="/about"
          className="bg-gray-950/10 px-6 2xl:px-8 py-2 2xl:py-3 text-emerald-400 2xl:text-lg font-semibold rounded-xl border-zinc-700 border border-solid backdrop-blur-md shadow-md hover:bg-emerald-900/20 hover:border-zinc-600 hover:text-emerald-300 transition-colors duration-500"
        >
          About me
        </Link>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="bg-gradient-to-br from-emerald-300 to-emerald-700 rounded-full p-2 md:p-3">
          <Image
            alt="Me"
            src={"/logo.jpg"}
            width={733}
            height={732}
            decoding="async"
            className="w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 2xl:w-[520px] 2xl:h-[520px] rounded-full"
            style={{ color: "transparent" }}
          />
        </div>
      </div>
    </section>
  );
}
