import Video from "../assets/videos/79998-570766625.mp4";
import Header from "./Header";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HeroSection = () => {
  useGSAP(() => {
    gsap.to(".heading", {
      transform: "translate(0%)",
      duration: 2,
      opacity: 1,
    });
    gsap.to(".subHeading", {
      transform: "translate(0%)",
      duration: 2,
      delay: 0.5,
      opacity: 1,
    });
  });

  return (
    <div className="w-full h-screen relative">
      <Header />
      <video autoPlay loop muted className="w-full h-full object-cover">
        <source src={Video} />
      </video>
      <div className="overlay"></div>
      <div className="absolute top-48 left-20 text-white font-sans ">
        <h1 className="text-center font-bold text-4xl -ml-20 md:text-6xl leading-tight md:tracking-wider lg:text-left my-10 heading sm:ml-16 md:-ml-8">
          AYUSH Herbal : Your <br />
          Ayurvedic Plant Guide
        </h1>
        <p className="md:text-xl lg:text-left md:tracking-[0.4rem] text-center sm:ml-16 -ml-20 md:-ml-8 subHeading">
          Explore top Ayurvedic plant's benefits, <br />
          uses and wellness tips with <strong>AYUSH</strong> Herbal
        </p>
        <div className="mt-10 lg:mt-6 ml-14 sm:ml-48 md:ml-72 lg:-ml-8">
          <button className=" bg-white text-black px-4 py-2 rounded-md hover:bg-transparent hover:text-white hover:border-[1px] hover:border-white transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
