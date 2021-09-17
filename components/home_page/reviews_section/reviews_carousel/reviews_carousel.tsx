import React from "react";
import styles from "./styles.module.scss";
import dynamic from "next/dynamic";
import { arrowsPlugin, Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";

const Carousel = dynamic(() => import("@brainhubeu/react-carousel"), { ssr: false });

const ReviewsCarousel: React.FC = (props) => {  
  const [carouselValue, setCarouselValue] = React.useState<number>(0);

  function buildArrow(direction: string): JSX.Element {
    return (
      <button className={`${styles.arrow}`}>
        <i className={`bi bi-chevron-${direction}`} />
      </button>
    );
  }
  
  function buildItem(index: number): JSX.Element {
    return (
      <div key={index} className={`${styles.item}`}>
        <img src={`https://preview.colorlib.com/theme/suites/images/xperson_${index + 1}.jpg.pagespeed.ic.q05R4kZ5Tf.webp`} />

        <div className={`${styles.text_area}`}>
          <p className={`${styles.heading}`}>Jane Mars</p>

          <p>
            <i>
              {`"Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Unde porro numquam, tempora rem exercitationem molestiae? Voluptas vitae animi dignissimos porro!"`}
            </i>
          </p>
        </div>
      </div>
    );
  }

  function buildItems(): JSX.Element[] {
    const r: JSX.Element[] = [];
    for(let i: number = 0; i < 4; i++)
      r.push(buildItem(i));

    return r;
  }

  function render(): JSX.Element {
    return (
      <div className={`${styles.reviews_carousel}`}>
        <Carousel 
          onChange={(value) => setCarouselValue(value)}
          plugins= {[
            'infinite', 
            { resolve: slidesToShowPlugin, options: { numberOfSlides: 2 } },
            { 
              resolve: arrowsPlugin,
              options: {arrowLeft: buildArrow("left"), arrowRight: buildArrow("right"), addArrowClickHandler: true}
            }
          ]}
        >
          {buildItems()}
        </Carousel>

        <Dots value={carouselValue} number={2} onChange={(value) => setCarouselValue(value)} />
      </div>
    );
  }

  return render();
};


export default ReviewsCarousel;