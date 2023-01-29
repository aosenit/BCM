import React, { useEffect } from "react";
import Home from "./home";
import AOS from "aos";
import "aos/dist/aos.css";

const Index = () => {
  useEffect(() => {
    AOS.init({
      delay: 100 || "100", // values from 0 to 3000, with step 50ms
      duration: 900, // values from 0 to 3000, with step 50ms
      easing: "linear", // default easing for AOS animations
    });
  }, []);
  return (
    <>
      <Home />
    </>
  );
};

export default Index;
