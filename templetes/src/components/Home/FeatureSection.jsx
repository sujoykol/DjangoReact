import React from 'react';

// 1. Static Feature Data keeping your exact texts and FontAwesome classes
const featuresData = [
  {
    id: 1,
    icon: "fa fa-shield",
    title: "Trusted Shopping",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    id: 2,
    icon: "fa fa-shopping-bag",
    title: "Quality Product",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    id: 3,
    icon: "fa fa-truck",
    title: "Worldwide Delivery",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    id: 4,
    icon: "fa fa-phone",
    title: "Telephone Support",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  }
];

const FeatureSection = () => {
  return (
    <div className="feature">
      <div className="container-fluid">
        <div className="row">
          
          {/* Loop dynamically through your features array */}
          {featuresData.map((feature) => (
            <div className="col-lg-3 col-md-6 feature-col" key={feature.id}>
              <div className="feature-content">
                <i className={feature.icon}></i>
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default FeatureSection;