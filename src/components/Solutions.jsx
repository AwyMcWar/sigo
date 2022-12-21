import React from "react";
import { apple, solution, google } from "../assets";
import styles, { layout } from "../style";

const Solutions = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={solution}
        alt="solutions"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control all your <br className="sm:block hidden" />
        home devices.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
        atque, unde dolor debitis nam eum maxime, voluptatem voluptate dicta
        nesciunt, dignissimos explicabo laboriosam? Ullam fugiat inventore qui
        non explicabo voluptas!
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
