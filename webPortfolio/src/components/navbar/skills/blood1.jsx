import React, { useEffect, useRef } from "react";
import "./blood1.css";
import drop1 from "../../../assets/drop.svg"
import top1 from "../../../assets/topblood.svg"
const Blood1 = () => {
  const bloodRef1 = useRef(null);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
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

    if (bloodRef1.current) {
      observer1.observe(bloodRef1.current);
    }

    return () => {
      if (bloodRef1.current) {
        observer1.unobserve(bloodRef1.current);
      }
    };
  }, []);

  return (
    <div className="blood1" ref={bloodRef1}>
         <img className="top-blood1" src={top1} alt=""></img>
      <div className="vertical-rectangle1"></div>
      <img className="droplet1" src={drop1} alt=""></img>
    </div>
  );
};

export default Blood1;
