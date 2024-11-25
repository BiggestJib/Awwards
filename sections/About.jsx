import React, { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";

const About = () => {
  const [hasCopied, sethasCopied] = useState();
  const handleCopy = () => {
    navigator.clipboard.writeText("Olaosebikanajibola18@gmail.com");
    sethasCopied(true);
    setTimeout(() => sethasCopied(false), 2000);
  };
  return (
    <section id="about" className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full ">
        <div className="col-span-1 xl:row-span-3 ">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hello, I'm Peter.</p>
              <p className="grid-subtext">
                I'm a Frontend Developer specializing in dynamic, user-friendly
                applications. I have experience creating immersive, animated 3D
                websites that captivate and engage users.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">What I Do</p>
              <p className="grid-subtext">
                I design and develop high-quality, responsive websites that are
                intuitive and enjoyable to navigate. Leveraging modern web
                technologies like React, TypeScript, Next.js, and Tailwind CSS,
                I create fast, efficient, and user-centric digital experiences.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                backgroundImageOpacity={0.5}
                showGraticules
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 31, // Latitude of the label's position on the globe
                    lng: -100, // Longitude of the label's position on the globe
                    text: "I'm here", // The text to display at the specified location
                    color: "white", // Color of the label text
                    size: 20, // Font size of the label text
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I work remotely across multiple time zones
              </p>
              <p className="grid-subtext">
                Based in Croatia, I offer remote work availability across most
                time zones. Whether you're in Europe, the Americas, or beyond,
                I'm flexible and available to collaborate.
              </p>

              <Button
                isBeam
                name="Contact Me"
                containerClassname=" w-full mt-10 sm:min-w-p6"
              />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building solutions through code.
                Coding isn't just my profession—it's my passion.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact Me</p>
              <div onClick={handleCopy} className="copy-container">
                <img
                  src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                  alt="copy"
                />
                <p
                  className="lg:text-xl md:text-xl font-medium text-gray_gradient"
                  text-white
                >
                  Olaosebikanajibola18@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
