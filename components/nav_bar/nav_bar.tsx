import React, { useEffect, useState } from "react";

const NavBar: React.FC = () => {
  const [transparent, setTransparent] = useState<boolean>(true);

  useEffect(
    () => {
      const onScrollCallback: (ev: Event)=>void = (ev) => { 
        if(window.scrollY >= window.innerHeight)
          setTransparent(false);
        else
          setTransparent(true);
        
      };

      window.addEventListener("scroll", onScrollCallback);
      
      return () => window.removeEventListener("scroll", onScrollCallback);
    },
    []
  );

  return (
    <nav className={`nav_bar_${(transparent == true) ? "transparent" : "white"}`}>
      <div className={`container`}>
        <a href="/" className={`logo`}>Suites</a>

        <div className={`spacer`} />

        <a href="/" className={`nav_link_selected`}>HOME</a>
          
        <a href="/" className={`nav_link_unselected`}>ROOMS</a>
        
        <a href="/" className={`nav_link_unselected`}>EVENTS</a>
        
        <a href="/" className={`nav_link_unselected`}>ABOUT</a>
        
        <a href="/" className={`nav_link_unselected`}>CONTACT</a>            
      </div>
    </nav>
  );
};

export default NavBar;