import React, { useState } from "react";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

const Carousel: React.FC<Props> = (props) => {
  const [index, setIndex] = React.useState<number>(0);
  const [buttonsEnabled, setButtonsEnabled] = React.useState<boolean>(false);

  React.useEffect(
    () => {
      const nextIndex: number = (index == items.length - 1) ? 0 : index + 1;
      const timeout: NodeJS.Timeout = setTimeout(() => setIndex(nextIndex), 5000);

      return () => clearTimeout(timeout);
    },
    [index]
  );

  const items: JSX.Element[] = React.Children.map<JSX.Element, React.ReactNode>(
    props.children, 
    (child, i) => <Item active={i == index}>{child}</Item>
  ) as JSX.Element[];

  function buildLeftButton(): JSX.Element {
    function onClickCallback(): void {
      if(index == 0)
        setIndex(items.length - 1);      
      else 
        setIndex(index - 1);      
    }

    return (
      <button className={`${styles.button}`} onClick={onClickCallback}>
        <i className="bi bi-chevron-compact-left" />
      </button>
    );
  }

  function buildRightButton(): JSX.Element {
    function onClickCallback(): void {
      if(index == items.length - 1)
        setIndex(0);
      else 
        setIndex(index + 1);
    }

    return (
      <button className={`${styles.button}`} onClick={onClickCallback}>
          <i className="bi bi-chevron-compact-right" />
        </button>
    );
  }

  return (
    <div className={`${props.className} ${styles.carousel}`} style={props.style}>
      {items}

      <div 
        className={`${styles.buttons}`} 
        onMouseEnter={() => setButtonsEnabled(true)} 
        onMouseLeave={() => setButtonsEnabled(false)}
        style={{opacity: (buttonsEnabled ? 1 : 0)}}
      >
        {buildLeftButton()}
        
        {buildRightButton()}
      </div>
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