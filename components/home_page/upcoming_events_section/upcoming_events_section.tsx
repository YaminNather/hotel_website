import React from "react";
// import Carousel from "./carousel/carousel";
import { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import EventCard from "./event_card/event_card";
import styles from "./styles.module.scss";
import dynamic from "next/dynamic";
import EventsCarousel from "./events_carousel/events_carousel";

const Carousel = dynamic(
  () => import('@brainhubeu/react-carousel'), {ssr: false}
);

const UpcomingEventsSection: React.FC = () => {     
  function render(): JSX.Element {
    return (
      <section className={`${styles.upcoming_events_section} container`}>
        <span className={`underlined_heading h2`}>Upcoming Events</span>
          <EventsCarousel />
        
       {/* <Carousel>
          {buildCarouselItems()}
        </Carousel> */}
      </section>
    );
  }

  return render();
};

export async function getServerSideProps() {
  return {};
}

export default UpcomingEventsSection;