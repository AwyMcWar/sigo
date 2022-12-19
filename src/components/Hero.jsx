import React from "react";
import styles from "../style";
import { discount, robot, hands, security } from "../assets";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    {/*left side*/}
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">50% </span>
          Discount for <span className="text-white">1 Month</span> Account
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          The Next <br className="sm:block hidden" />
          <span className="text-gradient">Generation</span> <br />
          Security System
        </h1>
      </div>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to create security system most
        likely to fit your needs. We update the functionality on your request.
      </p>
    </div>
    {/*right side*/}
    <div>
      <img src={hands} alt="robot" clasName=" w-[100%] h-[100%] z-[5] " />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 darker__gradient" />
      <div />
      <div />
    </div>
  </section>
);

export default Hero;
