import React, { useEffect, useState } from "react";
import Carousel from "../../common/carousel/carousel";
import styles from "./styles.module.scss";
import HeroSlide, { HeroInfo } from "./hero_slide/hero_slide";


const HeroSection: React.FC = () => {
  const [offsetY, setOffsetY] = React.useState<number>(0);

  React.useEffect(
    () => {
      const onScrollCallback: (ev: Event)=>void = (ev) => setOffsetY(0.5 * window.scrollY);

      window.addEventListener("scroll", onScrollCallback);

      return () => window.removeEventListener("scroll", onScrollCallback);
    },
    []
  );

  return (
    <section id="hero_section" className={`${styles.hero_section}`}>
      <Carousel className={`${styles.carousel}`}>
        {heroInfos.map((value, index, _) => <HeroSlide key={index} heroInfo={value} offsetY={offsetY} />)}
      </Carousel>            
    </section>
  );
}

export default HeroSection;

const heroInfos: HeroInfo[] = [
  new HeroInfo(
    "https://preview.colorlib.com/theme/suites/images/xhero_1.jpg.pagespeed.ic.iRGHvnzgRP.webp",
    "Welcome to Park Elanza", "HOTEL & RESORT"
  ),
  new HeroInfo(
    "https://preview.colorlib.com/theme/suites/images/xhero_2.jpg.pagespeed.ic.iRGHvnzgRP.webp",
    "Unique Experience", "ENJOY WITH US"
  ),
  new HeroInfo(
    "https://preview.colorlib.com/theme/suites/images/xhero_3.jpg.pagespeed.ic.iRGHvnzgRP.webp",
    "Relaxing Room", "YOUR ROOM, YOUR STAY"
  )
];