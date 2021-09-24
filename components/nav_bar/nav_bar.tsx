import React, { useEffect, useState } from "react";
import Link from "next/link";

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
        <Link href="/"><a className={`logo`}>Park Elanza</a></Link>

        <div className={`spacer`} />

        <div className={`nav_links`}>
          <Link href="/"><a className={`nav_link_selected`}>HOME</a></Link>
            
          <Link href="/"><a className={`nav_link_unselected`}>ROOMS</a></Link>
          
          <Link href="/"><a className={`nav_link_unselected`}>EVENTS</a></Link>
          
          <Link href="/"><a className={`nav_link_unselected`}>ABOUT</a></Link>
          
          <Link href="/"><a className={`nav_link_unselected`}>CONTACT</a></Link>           
        </div>

        <i className={"bi bi-list nav_links_button"} />
      </div>
    </nav>
  );
};

export default NavBar;