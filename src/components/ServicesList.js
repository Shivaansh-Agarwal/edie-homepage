import React from "react";
import ServiceCard from "./ServiceCard";

const ServicesList = () => {
  const servicesData = [
    {
      logoColor: "#2D9CDB",
      logoIcon: "create",
      serviceName: "UI/UX Design",
      serviceDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.",
    },
    {
      logoColor: "#27AE60",
      logoIcon: "code",
      serviceName: "Front End",
      serviceDesc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.`,
    },
    {
      logoColor: "#EB5757",
      logoIcon: "list",
      serviceName: "Back End",
      serviceDesc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.`,
    },
  ];
  return (
    <div className="servicesList">
      <div className="servicesListHeading">We offer high demand services</div>
      <div className="services">
        {servicesData.map((service, index) => (
          <ServiceCard
            logoColor={service.logoColor}
            logoIcon={service.logoIcon}
            serviceName={service.serviceName}
            serviceDesc={service.serviceDesc}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
