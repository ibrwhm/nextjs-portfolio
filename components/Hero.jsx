import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full h-full min-h-screen pt-28 md:pt-8 px-8 md:px-24 flex justify-center items-center flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex justify-center items-center pr-3">
        <div className="bg-gradient-to-br from-emerald-300 to-emerald-700 rounded-full p-2 md:p-3">
          <Image
            alt="Me"
            src={"/logo.jpg"}
            width={733}
            height={732}
            decoding="async"
            className="w-40 h-40 md:w-52 md:h-52 lg:w-72 lg:h-72 2xl:w-[460px] 2xl:h-[460px] rounded-full"
            style={{ color: "transparent" }}
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center md:items-start flex-col lg:pl-4 text-center md:text-left underline-offset-2">
        <h1 className="bg-gradient-to-r from-emerald-300 to-emerald-600 bg-clip-text text-transparent text-3xl md:text-5xl 2xl:text-7xl font-bold md:ml-1 mt-8 md:mt-0 mb-4 2xl:mb-6">
          About Me
        </h1>
        <p className="max-w-screen-md text-sm lg:text-base 2xl:text-xl text-zinc-300 md:ml-1 mx-2 md:mx-0 mb-28 md:mb-0">
          Hi! My name is Ibrahim, but you{" "}
          <br className="hidden lg:inline-block" />
          probably already knows me as{" "}
          <b className="underline decoration-emerald-600 hover:decoration-emerald-300 hover:text-white transition-colors decoration-2 cursor-default">
            Krishnay
          </b>{" "}
          :D
          <br />
          <br />
          I'm a 21 year old{" "}
          <b className="underline decoration-sky-600 hover:decoration-sky-300 hover:text-white transition-colors decoration-2 cursor-default">
            Junior FrontEnd Developer
          </b>{" "}
          from Turkey. My passion as a developer has started from 2019 when i
          was interested on web design, and since then i taken seriously in it.
          On 2022, i started to learn more about{" "}
          <b className="underline decoration-yellow-600 hover:decoration-yellow-400 hover:text-white transition-colors decoration-2 cursor-default">
            application program, back-end and front-end
          </b>
          . Right now, i currently learning on HTML, CSS, Javascript, Typescript
          ❤️.
        </p>
      </div>
    </section>
  );
};

export default Hero;
