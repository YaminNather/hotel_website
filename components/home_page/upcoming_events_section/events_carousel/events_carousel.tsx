import { arrowsPlugin, Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import dynamic from "next/dynamic";
import React from "react";
import EventCard from "../event_card/event_card";
import styles from "./styles.module.scss";

const Carousel = dynamic(
  () => import("@brainhubeu/react-carousel"), { ssr: false }
);

const EventsCarousel: React.FC = (props) => {
  const [carouselValue, setCarouselValue] = React.useState<number>(0);  

  function buildArrow(direction: string): JSX.Element {
    return (
      <button className={`${styles.arrow}`}>
        <i className={`bi bi-chevron-${direction}`} />
      </button>
    );
  }

  function buildItems(): JSX.Element[] {
    const r: JSX.Element[] = [];
    for(let i: number = 0; i < 6; i++)
      r.push(<EventCard key={i} imageURL={`https://preview.colorlib.com/theme/suites/images/img_${i + 1}.jpg`} />);

    return r;
  }

  function onChangeCallback(value: number): void {
    setCarouselValue(value);
  }

  function render(): JSX.Element {
    return (
      <div className={`${styles.event_carousel}`}>
        <Carousel
          plugins= {[
            'infinite', 
            { resolve: slidesToShowPlugin, options: { numberOfSlides: 3 } },
            { 
              resolve: arrowsPlugin,
              options: {arrowLeft: buildArrow("left"), arrowRight: buildArrow("right"), addArrowClickHandler: true}
            }
          ]}
          onChange={onChangeCallback} 
        >
          {buildItems()}
        </Carousel>
  
        <Dots
          value={carouselValue}          
          onChange={onChangeCallback} 
          number={3}          
        />
      </div>
    );
  }

  
  return render();
};

export default EventsCarousel;