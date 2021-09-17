import React from "react";
import useMeasure from "react-use-measure";
import styles from "./styles.module.scss";

const gap: number = 32;

const Carousel: React.FC = (props) => {
  const [itemsRef, ItemsBound] = useMeasure();  
  const [index, setIndex] = React.useState<number>(0);

  function buildLeftButton(itemCount: number): React.ReactNode {
    function onClickCallback(): void {
      if(index == itemCount - 1)
        setIndex(0);
      else
        setIndex(index + 1);
    }

    return (
      <button onClick={onClickCallback}><i className={`bi bi-chevron-left`} /></button>
    );
  }

  function buildRightButton(itemCount: number): React.ReactNode {
    function onClickCallback(): void {
      if(index == 0)
        setIndex(itemCount - 1);
      else
        setIndex(index - 1);
    }

    return (
      <button onClick={onClickCallback}><i className={`bi bi-chevron-right`} /></button>
    );
  }

  function render(): JSX.Element {
    const children: React.ReactNode[] = React.Children.toArray(props.children);
  
    const items: React.ReactNode[] = children.map( (value, index, _) => <Item key={index}>{value}</Item> );    

    return (
      <div className={`${styles.carousel}`}>
        <div ref={itemsRef} className={`${styles.items}`} style={{transform: `translateX(${1/6 * ItemsBound.width * -index}px)`}}>
          {items}
        </div>
  
        <div className={`${styles.buttons}`}>
          {buildLeftButton(items.length)}
          
          {buildRightButton(items.length)}
        </div>
      </div>
    );
  }

  return render();
};

const Item: React.FC = (props) => {
  return (
    <div className={`${styles.item}`}>
      {props.children}
    </div>
  );
};

export default Carousel;