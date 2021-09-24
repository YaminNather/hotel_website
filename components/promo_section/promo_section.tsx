import React from 'react';
import styles from "./styles.module.scss";

const PromoSection: React.FC = () => {
  return (
    <section id="promo_section" className={`${styles.promo_section} container`}>      
      <span className={`h2 ${styles.heading}`}>Summer Promo 50% off</span>

      <div className={`${styles.right_area}`}>
        <p>The PROMO WILL START IN</p>

        <p>
          {/* <span className={`${styles.timing}`}>00</span> <span className={`${styles.time_format}`}>weeks</span> */}
          &nbsp;<span className={`${styles.timing}`}>00</span> <span className={`${styles.time_format}`}>days</span>
          
          &nbsp;<span className={`${styles.timing}`}>00</span> <span className={`${styles.time_format}`}>hours</span>
          
          &nbsp;<span className={`${styles.timing}`}>00</span> <span className={`${styles.time_format}`}>mins</span>
          
          &nbsp;<span className={`${styles.timing}`}>00</span> <span className={`${styles.time_format}`}>secs</span>
        </p>
      </div>
    </section>
  );
};

export default PromoSection;