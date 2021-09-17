import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";


const FooterSection: React.FC = (props) => {  
  function buildAboutArea(): JSX.Element {
    return (
      <div className={`${styles.about_area}`}>
        <span className={`${styles.heading}`}>About</span>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quos rem ullam, placeat amet.
        </p>

        <button>Read More</button>
      </div>
    );
  }
  
  function buildQuickMenu(): JSX.Element {
    return (
      <div className={`${styles.area}`}>
        <span className={`${styles.heading}`}>Quick Menu</span>
        
        <Link href="/"><a>About</a></Link>
        
        <Link href="/"><a>Services</a></Link>
        
        <Link href="/"><a>Approach</a></Link>
        
        <Link href="/"><a>Sustainability</a></Link>
        
        <Link href="/"><a>News</a></Link>
        
        <Link href="/"><a>Careers</a></Link>
      </div>
    );    
  }

  function buildMinistriesArea(): JSX.Element {
    return (
      <div className={`${styles.area}`}>
        <span className={`${styles.heading}`}>Ministries</span>
        
        <Link href="/"><a>Children</a></Link>
        
        <Link href="/"><a>Women</a></Link>
        
        <Link href="/"><a>Bible Study</a></Link>
        
        <Link href="/"><a>Church</a></Link>
        
        <Link href="/"><a>Missionaries</a></Link>
        
        <Link href="/"><a>Careers</a></Link>
      </div>
    );
  }

  function buildSocialIconsArea(): JSX.Element {
    return (
      <div className={`${styles.social_icons_area}`}>
        <span className={`${styles.heading}`}>Social Media</span>
        
        <div className={`${styles.icons}`}>
          <Link href="/"><a><i className={`bi bi-facebook`} /></a></Link>          
          
          <Link href="/"><a><i className={`bi bi-twitter`} /></a></Link>          
          
          <Link href="/"><a><i className={`bi bi-instagram`} /></a></Link>          
          
          <Link href="/"><a><i className={`bi bi-linkedin`} /></a></Link>          
        </div>        
      </div>
    );
  }


  function render(): JSX.Element {
    return (
      <div className={`container ${styles.footer_section}`}>
        <div className={`${styles.upper_area}`}>
          {buildAboutArea()}

          {buildQuickMenu()}

          {buildMinistriesArea()}

          {buildSocialIconsArea()}
        </div>

        <p className={`${styles.lower_area}`}>Copyright 2021 All Rights Reserved | Made By Yamin And Chiraag</p>
      </div>
    );
  }

  return render();
};


export default FooterSection;