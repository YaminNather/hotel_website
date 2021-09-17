import React from "react";
import styles from "./styles.module.scss";

interface Props {
  imageURL: string;
  title: string;
  time: string;
  by: string;
  description: string;
}

const EventCard: React.FC<{imageURL: string}> = (props) => {
  function render(): JSX.Element {
    // return (<div />);

    return (
      <div className={`${styles.event_card}`}>
        <img src={props.imageURL} />

        <span className={`${styles.heading}`}>Lorem ipsum dolor sit amet</span>
        
        <span className={`${styles.date}`}>Dec 20th, 2018. By<span className={`${styles.by}`}> Admin</span></span>
        
        <p className={`${styles.description}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Distinctio quo facilis repudiandae ipsum a totam eum officia soluta aliquid fugit.
        </p>
      </div>
    );
  }

  return render();
};

export default EventCard;