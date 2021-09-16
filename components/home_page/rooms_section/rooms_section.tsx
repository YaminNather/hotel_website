import React from "react";
import RoomCard from "./room_card/room_card";
import RoomInfo from "./room_card/room_info";
import styles from "./styles.module.scss"; 


const RoomsSection: React.FC = () => {
  return (
    <section id="rooms_section" className={`${styles.rooms_section} container`}>
      <span className={`h2 underlined_heading`}>Our Rooms</span>
      
      <div className={`${styles.room_cards_area}`}>
        {roomInfos.map( (value, index, _) => <RoomCard roomInfo={value} /> )}
      </div>
    </section>
  );
};

const roomInfos: RoomInfo[] = [
  new RoomInfo("https://preview.colorlib.com/theme/suites/images/img_1.jpg", "Standard", 350.00),
  
  new RoomInfo("https://preview.colorlib.com/theme/suites/images/img_2.jpg", "Family", 400.00),
  
  new RoomInfo("https://preview.colorlib.com/theme/suites/images/img_3.jpg", "Single", 255.00),
  
  new RoomInfo("https://preview.colorlib.com/theme/suites/images/img_4.jpg", "Deluxe", 150.00),
  
  new RoomInfo("https://preview.colorlib.com/theme/suites/images/img_2.jpg", "Luxury", 200.00),
  
  new RoomInfo("https://preview.colorlib.com/theme/suites/images/img_3.jpg", "Single", 155.00)
];

export default RoomsSection;