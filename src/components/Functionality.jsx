import { funcctionality } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Functionality = () => (
  <section id="deals" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find the best deal for you <br className="sm:block hidden" /> in few
        easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[480px] mt-5`}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
        sapiente sunt minima aperiam! Totam optio sunt quas est repellendus
        error mollitia pariatur quis enim nulla nam deserunt expedita officiis
        ex, fuga odit in.{" "}
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImg}>
      <img
        src={funcctionality}
        alt="functionality"
        className="w-[100%] h-[100%]"
      />
      <div className="absolute z-[0] w-[80%] h-[80%] -right-[50%] rounded-full pink__gradient" />
    </div>
  </section>
);

export default Functionality;
