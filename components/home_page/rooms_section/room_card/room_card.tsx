import React from "react";
import styles from "./styles.module.scss";
import RoomInfo from "./room_info";

interface Props {
  roomInfo: RoomInfo;
}

const RoomCard: React.FC<Props> = (props) => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.image_container}`}>
        <img src={props.roomInfo.imageURL} />
      </div>

      <div className={`${styles.text_container}`}>
        <span className={`${styles.room_type}`}>{props.roomInfo.roomType.toUpperCase()} ROOM</span>
        
        <span className={`${styles.cost}`}>${props.roomInfo.cost} / per night</span>
      </div>
    </div>
  );
};

export default RoomCard;