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
      {/* <img
        src={Image}
        alt="a plant image"
        className="w-full h-screen object-cover"
      /> */}
      <video autoPlay loop muted className="w-full h-full object-cover">
        <source src={Video} />
      </video>
      <div className="overlay"></div>
      <div className="absolute top-48 left-20 text-white font-sans">
        <h1 className="text-center font-bold text-4xl md:text-6xl leading-tight md:tracking-wider lg:text-left my-10 heading">
          Aayush Herbal: Your <br />
          Ayurvedic Plant Guide
        </h1>
        <p className="md:text-xl lg:text-left md:tracking-[0.4rem] text-center subHeading">
          Explore top Ayurvedic plant's benefits, uses and
          <br /> wellness tips with Ayush Herbal
        </p>
        <div className="mt-6 ml-28 sm:ml-32 md:ml-40 lg:ml-0">
          <button className=" bg-white text-black px-4 py-2 rounded-md hover:bg-transparent hover:text-white hover:border-[1px] hover:border-white transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
