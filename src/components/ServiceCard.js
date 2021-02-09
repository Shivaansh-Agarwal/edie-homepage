import React from "react";

const ServiceCard = (props) => {
  return (
    <div className="service-card">
      <div id="service-card-logo" style={{ backgroundColor: props.logoColor }}>
        <span className="material-icons">{props.logoIcon}</span>
      </div>
      <div id="service-card-name">{props.serviceName}</div>
      <div id="service-card-description">{props.serviceDesc}</div>
      <button>Get Started</button>
    </div>
  );
};

export default ServiceCard;
