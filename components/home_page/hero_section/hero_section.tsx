import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";


const HeroSection: React.FC = () => {
  const [offsetY, setOffsetY] = useState<number>(0);

  useEffect(
    () => {
      const onScrollCallback: (ev: Event)=>void = (ev) => setOffsetY(0.5 * window.scrollY);

      window.addEventListener("scroll", onScrollCallback);

      return () => window.removeEventListener("scroll", onScrollCallback);
    },
    []
  );  

  return (
    <section id="hero_section" className={`${styles.hero_section} `}>
      <img src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg" style={{transform: `translateY(${offsetY}px)`}} />
      
      <div className={`${styles.text_area}`}>
        <span className={`${styles.title}`}>Relaxing Room</span>
        
        <span className={`${styles.subtitle}`}>YOUR ROOM, YOUR STAY</span>
      </div>
    </section>
  );
}

export default HeroSection;