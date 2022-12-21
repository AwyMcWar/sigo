import React from "react";
import styles from "./style";
import {
  Navbar,
  Hero,
  Business,
  Button,
  CallToAction,
  FeedbackCard,
  Functionality,
  Solutions,
  Stats,
  Testimonials,
  Footer,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    {/*creates navigation section*/}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/*creates first section-heading*/}
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    {/*Creating pattern for other components*/}
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Solutions />
        <Functionality />
        <Testimonials />
        <CallToAction />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
