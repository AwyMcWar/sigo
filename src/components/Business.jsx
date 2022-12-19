import React from "react";
import { features } from "../constants";
import styles from "../style";
import { layout } from "../style";
import Button from "./Button";

const FeatureCard = (icon, title, content, index) => (
  <div>
    <div>
      <img src={icon} alt="icon" />
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Enjoy having a good life, <br className="sm:block hidden" /> with
          knowing your home is safe.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          The right security system in your home, helps you protect your
          belongings, allows you remote monitoring your home, improves energy
          savings, gives you a peace of mind.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
