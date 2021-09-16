import React from "react";
import styles from "./styles.module.scss";

const Carousel: React.FC = (props) => {
  const [index, setIndex] = React.useState<number>(0);

  const [offsetY, setOffsetY] = React.useState<number>(0);

  React.useEffect(
    () => {
      const onScrollCallback: (ev: Event)=>void = (ev) => setOffsetY(0.5 * window.scrollY);

      window.addEventListener("scroll", onScrollCallback);

      return () => window.removeEventListener("scroll", onScrollCallback);
    },
    []
  );   

  const items: JSX.Element[] = React.Children.map<JSX.Element, React.ReactNode>(
    props.children, 
    (child, i) => <Item active={i == index}>{child}</Item>
  ) as JSX.Element[];

  const onClickCallback = () => {
    console.log("CustomLog: Clicked carousel");
    
    if(index == items.length - 1)
      setIndex(0);
    else
      setIndex(index + 1);
  };

  return (
    <div className={`${styles.carousel}`} style={{transform: `translateY(${offsetY}px)`}} onClick={onClickCallback}>
      {items}
    </div>
  );
};

const Item: React.FC<{active: boolean}> = (props) => {
  return (
    <div className={`${styles.item}`} style={{opacity: (props.active) ? 1 : 0}}>
      {props.children}
    </div>
  );
};


export default Carousel;