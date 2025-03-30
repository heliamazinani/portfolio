import React, { useEffect, useState, useRef } from "react";
import Contact from "../components/navbar/contact/contact";

import "./Gallery.css";

const Trad = ({ data1 }) => {
    const [data, setData] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0); // Tracks the current image index
    const [isAnimatingName, setIsAnimatingName] = useState(false); // Tracks animation for name
  
    useEffect(() => {
      setData(data1);
    }, [data1]);
  
    const handleImageClick = () => {
      setIsAnimatingName(true); // Trigger name animation
      setTimeout(() => {
        setIsAnimatingName(false); // Remove animation class after animation duration
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length); // Switch to the next image
      }, 500); // Match the duration of the CSS animation
    };
  return (
    <div>
      <div className="wall">
       
        {data.length > 0 && (
          <div className="frame" onClick={handleImageClick}>
 <div className="boxx">
 <div className="discrip">
            
            <p className="www">{data[currentIndex].name}</p>
            </div>
            <div className="pagec">
            <img
              className="paintings"
              src={data[currentIndex].image}
              alt={data[currentIndex].name}
            />
          </div>
          <p className={`namewww ${isAnimatingName ? "animate" : ""}`}>{data[currentIndex].name}</p>
          </div>
            </div>
        )}
       
      </div>

      <Contact />
    </div>
  );
};

export default Trad;
