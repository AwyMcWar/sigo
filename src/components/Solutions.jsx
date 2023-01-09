import React from "react";
import { apple, solution, google } from "../assets";
import styles, { layout } from "../style";

const Solutions = () => (
  <section id="solutions" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={solution}
        alt="solutions"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      <div className="absolute z-[3] w-[60%] h-[60%] -left-1/2 top-0  rounded-full blue__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control all your <br className="sm:block hidden" />
        home devices.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        You can make your home a little more livable—and a lot more automated—by
        adding appliances and devices you can control from anywhere. You can
        control over 50,000 smart home devices including TVs, lights,
        appliances, plugs, thermostats, and more.
      </p>
      <div className="flex flex-row flex-wram sm:mt-10 mt-6">
        <img
          src={apple}
          alt="app_store"
          className="w-[128px] height-[42px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="google_play"
          className="w-[128px] height-[42px] object-contain cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Solutions;
