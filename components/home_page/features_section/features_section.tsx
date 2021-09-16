import React from "react";
import styles from "./styles.module.scss";

class Feature {
  public constructor(name: string, icon: string) {
    this.name = name;
    this.icon = icon;
  }


  public name: string;
  public icon: string;
}

const FeaturesSection: React.FC = () => {
  return (
    <section className={`${styles.features_section} container`}>
      <span className={`h2 underlined_heading ${styles.heading}`}>Hotel Features</span>
      
      <div className={`${styles.buttons}`}>
        {features.map( (value, index) => <FeatureButton feature={value} />)}
      </div>
    </section>
  );
};

const FeatureButton: React.FC<{feature: Feature}> = (props) => {
  return (
    <div className={`${styles.button}`}>
      <i className={`bi bi-${props.feature.icon} ${styles.icon}`} />
      
      <span className={`${styles.name}`}>{props.feature.name}</span>
    </div>
  );
};

const features: Feature[] = [
  new Feature("Hotel Teller", "laptop"),
  new Feature("Hotel Teller", "person"),  
  new Feature("Hotel Teller", "arrow-right"),  
  new Feature("Hotel Teller", "laptop"),
  new Feature("Hotel Teller", "laptop"),  
  new Feature("Hotel Teller", "laptop"),  
  new Feature("Hotel Teller", "laptop"),  
  new Feature("Hotel Teller", "laptop")
];

export default FeaturesSection;