import React from "react";
import ReviewsCarousel from "./reviews_carousel/reviews_carousel";
import styles from "./styles.module.scss";

const ReviewsSection: React.FC = (props) => {
  return (
    <section id="reviews_section" className={`${styles.reviews_section} container`}>
      <span className={`h2 underlined_heading`}>What People Say</span>
      
      <ReviewsCarousel />    
    </section>
  );
};

export default ReviewsSection;