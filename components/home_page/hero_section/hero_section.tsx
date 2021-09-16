import React, { useEffect, useState } from "react";
import Carousel from "../../common/carousel";
import styles from "./styles.module.scss";


const HeroSection: React.FC = () => {
  return (
    <section id="hero_section" className={`${styles.hero_section}`}>
      <Carousel>
        <img src="https://preview.colorlib.com/theme/suites/images/xhero_1.jpg.pagespeed.ic.iRGHvnzgRP.webp"  />
        
        <img src="https://preview.colorlib.com/theme/suites/images/xhero_2.jpg.pagespeed.ic.iRGHvnzgRP.webp"  />
        
        <img src="https://preview.colorlib.com/theme/suites/images/xhero_3.jpg.pagespeed.ic.iRGHvnzgRP.webp"  />        
      </Carousel>
      
      <div className={`${styles.text_area}`}>
        <span className={`${styles.title}`}>Relaxing Room</span>
        
        <span className={`${styles.subtitle}`}>YOUR ROOM, YOUR STAY</span>
      </div>
    </section>
  );
}

export default HeroSection;