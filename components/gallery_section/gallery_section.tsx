import React from "react";
import styles from "./styles.module.scss";

const GallerySection: React.FC = () => {
  return (
    <section className={`${styles.gallery_section} container`}>
      <span className={`h2 underlined_heading`}>Our Gallery</span>

      <div className={`${styles.pictures}`}>
        {getPictures()}
      </div>
    </section>
  );
};

function getPictures(): JSX.Element[] {
  const r: JSX.Element[] = [];

  for(var i: number = 0; i < 8; i++) {
    const imageIndex: number = i % 7;
    r.push( <img className={`${styles.picture}`} src={`https://preview.colorlib.com/theme/suites/images/img_${imageIndex + 1}.jpg`} /> );
  }

  return r;
};

export default GallerySection;