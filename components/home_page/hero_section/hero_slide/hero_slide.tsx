import React from 'react';
import styles from "./styles.module.scss";

interface Props {
  heroInfo: HeroInfo;
  offsetY: number;
}

const HeroSlide: React.FC<Props> = (props) => {
  return (
    <div className={`${styles.hero_slide}`}>
      <img src={props.heroInfo.imageURL} style={{transform: `translateY(${props.offsetY}px)`}} />        
      
      <div className={`${styles.text_area}`}>
        <span className={`${styles.title}`}>{props.heroInfo.title}</span>
        
        <span className={`${styles.subtitle}`}>{props.heroInfo.subtitle}</span>
      </div>
    </div>
  );
};

export default HeroSlide;

export class HeroInfo {
  public constructor(imageURL: string, title: string, subtitle: string) {
    this.imageURL = imageURL;
    this.title = title;
    this.subtitle = subtitle;
  }

  public imageURL: string;
  public title: string;
  public subtitle: string;
}