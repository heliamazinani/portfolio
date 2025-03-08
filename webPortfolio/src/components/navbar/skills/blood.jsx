import React, { useEffect, useRef } from "react";
import "./blood.css";

import drop from "../../../assets/drop.svg"
import top from "../../../assets/topblood.svg"

const Blood = () => {
  const bloodRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (bloodRef.current) {
      observer.observe(bloodRef.current);
    }

    return () => {
      if (bloodRef.current) {
        observer.unobserve(bloodRef.current);
      }
    };
  }, []);

  return (
    <div className="blood" ref={bloodRef}>
      <img className="top-blood" src={top} alt=""></img>
      <div className="vertical-rectangle"></div>
      <img className="droplet" src={drop} alt=""></img>
    </div>
  );
};

export default Blood;

