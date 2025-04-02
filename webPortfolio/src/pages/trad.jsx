import React, { useEffect, useState } from "react";
import Contact from "../components/navbar/contact/contact";

import "./Gallery.css";

const Trad = ({ data1 }) => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false); // Tracks if the card is flipped

  useEffect(() => {
    setData(data1);
  }, [data1]);
  const [currentIndex1, setCurrentIndex1] = useState(data.length);

  const handleImageClick = () => {
    setCurrentIndex1(
      (prevIndex1) => (prevIndex1 - 1 + data.length) % data.length
    );
    setIsFlipped(true); // Trigger flip animation
    setTimeout(() => {
      setIsFlipped(false);
      // Reset the flip animation after it completes

      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length); // Switch to the next image
    }, 800); // Matches the CSS animation duration (0.8s)
  };

  return (
    <div>
      <div className="wall">
        {data.length > 0 && (
          <div className="frame" onClick={handleImageClick}>
            <div className="kms">
            <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
              
              <div className="flip-card-backk">
                <img
                  className="paintings"
                  src={data[currentIndex1].image}
                  alt={data[currentIndex1].name}
                />
              </div>
              <div className="dis"> 
                <div className="writing">
                <h1>{data[currentIndex].name}</h1>
              <p>{data[currentIndex].description || "No description"}</p></div></div>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    className="paintings"
                    src={data[currentIndex].image}
                    alt={data[currentIndex].name}
                  />
                </div>

                <div className="flip-card-back">
                <div className="writing">
                  <h1>{data[currentIndex1].name}</h1>
                  <p>{data[currentIndex1].description || "No description"}</p></div>
                </div>
              </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Contact />
    </div>
  );
};

export default Trad;
