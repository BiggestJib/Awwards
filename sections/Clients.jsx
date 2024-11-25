import React from "react";
import { clientReviews } from "./constants";

const Clients = () => {
  return (
    <section id="about" className="c-space my-20">
      <h3
        className="head-text bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] 
          from-indigo-400 
          via-purple-500 
          to-pink-600 
          bg-clip-text 
          text-transparent"
      >
        What My Clients Say
      </h3>

      <div className="client-container">
        {clientReviews.map((item) => (
          <div className="client-review" key={item.id}>
            <div>
              <p className="text-white font-light ">{item.review}</p>
              <div className="client-content">
                <div className="flex gap-3">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="text-white-800 font-semibold">{item.name}</p>
                    <p className="md:text-base text-sm  text-white-500">
                      {item.position}
                    </p>
                  </div>
                </div>
                <div className="flex self-end items-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img
                      key={index}
                      src="/assets/star.png"
                      alt="star"
                      className="w-5 h-5"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
