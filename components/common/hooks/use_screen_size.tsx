import React, { useEffect } from "react";

const useWindowSize = () => {  
  const [screenSize, setScreenSize] = React.useState<Size>(
    (typeof window != `undefined`) ? new Size(window.innerWidth, window.innerHeight) : Size.zero
  );

  useEffect(
    () => {
      function onResizeCallback() { 
        setScreenSize(new Size(window.innerWidth, window.innerHeight));
      }

      window.addEventListener("resize", onResizeCallback);
      
      return () => window.removeEventListener("resize", onResizeCallback);
    },
    []
  );

  return screenSize;
}

export default useWindowSize;

export class Size {
  public constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public static zero = new Size(0, 0);


  readonly width: number;
  readonly height: number;
}