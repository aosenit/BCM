import React from "react";
import { contain } from "../../../../pages/home";
import Title from "../Title";
import FeatureCard from "./FeatureCard";

const featuresData = [
  {
    icon: "FaPencilRuler",
    title: "Custom Design Services",
    content:
      "Our team of experienced designers will work with you to create a unique and visually striking design that reflects your brand and appeals to your target audience.",
  },
  {
    icon: "FaPaintBrush",
    title: "Branding and Identity",
    content:
      "We understand the importance of a strong brand identity. From logo design to complete rebranding, we'll help you establish a consistent look and feel across all of your marketing materials.",
  },
  {
    icon: "FaStore",
    title: "Signage and POSM",
    content:
      "From indoor and outdoor signs to point of sale materials, we'll help you create effective and eye-catching marketing materials that drive sales and promote your brand.",
  },
  {
    icon: "FaToolbox",
    title: "Flexible Solutions",
    content:
      "We offer a wide range of services and flexible pricing options to meet the unique needs and budget of any business. Whether you need a small design project or a complete rebranding campaign, we're here to help.",
  },
];

const Features = () => {
  return (
    <div className="py-10 lg:py-20">
      <div className={`${contain} grid lg:justify-center lg:text-center`}>
        <Title
          title="Company Features"
          subTitle="Experience Digital Printing"
        />
      </div>
      <div
        className={`${contain} px-4 py-2 lg:flex lg:flex-wrap gap-5 lg:justify-center`}
      >
        {featuresData.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;
