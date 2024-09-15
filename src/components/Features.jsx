import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "../assets/images/pexels-catiamatos-1072179.jpg";

const Features = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".features-box h1", {
      transform: "translate(-155%)",
      scrollTrigger: {
        id: "featuresTitle",
        trigger: ".features-box",
        scroller: "body",
        start: "top 0%",
        scrub: 6,
        pin: true,
      },
    });

    ScrollTrigger.matchMedia({
      "(min-width: 1301px)": function () {
        gsap.to("#feature1", {
          x: "-20%",
          y: "15%",
          scrollTrigger: {
            id: "featuresContent1",
            trigger: "#feature1",
            scroller: "body",
            start: "top 20%",
            end: "bottom 20%",
            scrub: 3,
            pin: true,
          },
        });
        gsap.to("#feature2", {
          x: "20%",
          y: "15%",
          scrollTrigger: {
            id: "featuresContent2",
            trigger: "#feature2",
            scroller: "body",
            start: "top 20%",
            end: "bottom 20%",
            scrub: 3,
            pin: true,
          },
        });
      },

      "(max-width: 1300px)": function () {
        const trigger1 = ScrollTrigger.getById("featuresContent1");
        const trigger2 = ScrollTrigger.getById("featuresContent2");

        if (trigger1 && trigger2) {
          trigger1.kill();
          trigger2.kill();
        }
      },
    });
  });

  return (
    <>
      <div className="w-full h-screen bg-gray-800 features-box overflow-hidden text-white">
        <h1 className="absolute top-0 left-0 font-normal text-[50vw] md:text-[30vw] uppercase tracking-widest translate-x-[43%]">
          Features
        </h1>
      </div>
      <div className="w-full h-[120rem] bg-[#9ac1cb] relative p-6 -mt-80 overflow-hidden text-white">
        <img
          src={Image}
          alt="a plant image"
          className="w-full h-full object-cover absolute top-0 left-0"
        />
        <div className="mt-8 flex flex-col justify-center items-center gap-20 lg:gap-[35rem] featuresContainer">
          <div
            className="w-full flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 text-justify cursor-pointer"
            id="feature1"
          >
            <div>
              <img
                src="https://images.unsplash.com/photo-1584697964190-7383cbee8277?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="a person playing quiz on tab"
                className="w-80 h-80 object-cover rounded-lg features-img"
              />
            </div>
            <div className="w-80 md:h-80" id="featuresContent1">
              <h3 className="text-2xl font-bold mb-2">Fun Quiz Games</h3>
              <div className="w-full bg-white h-0.5 my-2"></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, eius voluptatem? Nostrum esse nulla quia commodi
                voluptatibus error magnam soluta neque inventore quas accusamus
                quasi maiores consectetur nihil rerum, unde quisquam, ratione
                quis alias deserunt? Magnam, dolore quidem accusamus voluptate
                laborum corrupti quo doloremque architecto ab ut, atque, beatae
                tempore.
              </p>
            </div>
          </div>
          <div
            className="w-full flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 text-justify cursor-pointer"
            id="feature2"
          >
            <div className="w-80 md:h-80" id="featuresContent2">
              <h3 className="text-2xl font-bold mb-2">
                Use of AI & Machine Learning
              </h3>
              <div className="w-full bg-white h-0.5 my-2"></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, eius voluptatem? Nostrum esse nulla quia commodi
                voluptatibus error magnam soluta neque inventore quas accusamus
                quasi maiores consectetur nihil rerum, unde quisquam, ratione
                quis alias deserunt? Magnam, dolore quidem accusamus voluptate
                laborum corrupti quo doloremque architecto ab ut, atque, beatae
                tempore.
              </p>
            </div>
            <div>
              <img
                src="https://plus.unsplash.com/premium_photo-1683120966127-14162cdd0935?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="a person playing quiz on tab"
                className="w-80 h-80 object-cover rounded-lg features-img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
