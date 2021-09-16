import React from "react";
import styles from "./styles.module.scss";


const AboutUsSection: React.FC = () => {
  return (
    <section id="about_us_section" className={`${styles.about_us_section} container`}>
      <img src="https://preview.colorlib.com/theme/suites/images/ximg_2.jpg.pagespeed.ic.jAvfEkr8MX.webp" alt="" />
          
      <div className={`${styles.text_area}`}>
        <span className={`h2 underlined_heading`}>About Us</span>

        <p className={`${styles.content}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Eveniet blanditiis quisquam tenetur. 
          Repellat assumenda, accusamus repudiandae necessitatibus, a aliquid minus asperiores aperiam doloribus, 
          exercitationem minima nihil iste aspernatur sed. Ut.
        </p>
        
        <a href="/" className={`${styles.link}`}>WATCH VIDEO <i className="bi bi-arrow-right-short" /></a>
      </div>
    </section>
  );
};

export default AboutUsSection;