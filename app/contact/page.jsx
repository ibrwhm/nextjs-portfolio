import { Discord, Email, Github, Instagram } from "@/components/svg";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="bg-grid w-full h-full min-h-screen p-8 lg:px-16 2xl:px-24 flex justify-center items-center flex-col text-center underline-offset-2 text-zinc-300">
      <h1 className="bg-gradient-to-r from-emerald-300 to-emerald-600 bg-clip-text text-transparent text-4xl md:text-5xl 2xl:text-7xl text-center font-bold lg:ml-[-10px] mt-24 md:mt-16 mb-12 lg:mb-20 2xl:mb-32">
        Thats it...
      </h1>
      <div className="w-full flex justify-center items-start flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 h-full flex justify-start items-center flex-col md:mr-2">
          <p className="text-white font-semibold text-xl lg:text-3xl 2xl:text-5xl md:ml-1 mx-2 md:mx-0 mb-4">
            Thanks
          </p>
          <p className="max-w-md 2xl:max-w-lg text-sm lg:text-base 2xl:text-xl text-zinc-300 md:ml-1 mx-2 md:mx-0 mb-16 lg:mb-0">
            Thanks for visiting my website. I hope you enjoyed your stay. This
            website is made by myself{" "}
            <b className="underline decoration-sky-600 hover:decoration-sky-400 hover:text-white transition-colors decoration-2 cursor-default">
              from scratch
            </b>{" "}
            in 20 hours since i want to try rapid web development{" "}
            <br className="hidden lg:inline-block 2xl:hidden" />
            <b className="underline decoration-yellow-600 hover:decoration-yellow-400 hover:text-white transition-colors decoration-2 cursor-default">
              as quick as good as possible
            </b>
            .
            <br />
            <br />
            The older version of this website can still be found
            <br className="hidden lg:inline-block 2xl:hidden" />
            <Link
              href="/"
              target="_blank"
              className="font-bold underline decoration-fuchsia-600 hover:decoration-fuchsia-400 hover:text-white transition-colors decoration-2 cursor-pointer"
            >
              at my github repo
            </Link>
            .
          </p>
        </div>
        <div className="w-full lg:w-1/2 h-full flex justify-start items-center flex-col md:ml-2">
          <p className="text-white font-semibold text-xl lg:text-3xl 2xl:text-5xl md:ml-1 mx-2 md:mx-0 mb-4">
            Contact
          </p>
          <p className="max-w-md 2xl:max-w-lg text-sm lg:text-base 2xl:text-xl text-zinc-300 md:ml-1 mx-2 md:mx-0 mb-8">
            He're are my social media to contact me. Prefer contact using my
            Discord because i'm always
            <br className="hidden lg:inline-block" />
            <b className="underline decoration-emerald-600 hover:decoration-emerald-400 hover:text-white transition-colors decoration-2 cursor-default">
              actively checking my DMs
            </b>
            .
          </p>

          <div className="w-full max-w-md grid sm:grid-cols-2 gap-4 mx-4 mb-8 md:mb-0">
            <Link
              href="https://github.com/ibrwhm"
              target="_blank"
              className="bg-gray-950/10 w-full px-6 2xl:px-8 py-2 2xl:py-3 text-zinc-300 font-semibold rounded-xl border-zinc-700 border border-solid backdrop-blur-md shadow-md hover:bg-gray-900/20 hover:border-zinc-600 hover:text-white transition-colors duration-500"
            >
              <Github />
              @ibrwhm
            </Link>

            <Link
              href="https://discord.com/users/962658658070704148"
              target="_blank"
              className="bg-gray-950/10 w-full px-6 2xl:px-8 py-2 2xl:py-3 text-blue-400 font-semibold rounded-xl border-blue-500/30 border border-solid backdrop-blur-md shadow-md hover:bg-blue-900/10 hover:border-blue-400/40 hover:text-blue-200 transition-colors duration-500"
            >
              <Discord />
              @krishnay
            </Link>

            <Link
              href="https://instagram.com/iboblcx"
              target="_blank"
              className="bg-gray-950/10 w-full px-6 2xl:px-8 py-2 2xl:py-3 text-emerald-400 font-semibold rounded-xl border-emerald-400/30 border border-solid backdrop-blur-md shadow-md hover:bg-emerald-900/20 hover:border-emerald-400/40 hover:text-emerald-200 transition-colors duration-500"
            >
              <Instagram />
              @iboblcx
            </Link>

            <Link
              href="https://github.com/ibrwhm"
              target="_blank"
              className="bg-gray-950/10 w-full px-6 2xl:px-8 py-2 2xl:py-3 text-blue-400 font-semibold rounded-xl border-blue-500/30 border border-solid backdrop-blur-md shadow-md hover:bg-blue-900/10 hover:border-blue-400/40 hover:text-blue-200 transition-colors duration-500"
            >
              <Email />
              Email me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
