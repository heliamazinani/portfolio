import React, { useEffect, useState } from "react";
import "./letter.css";
import letterback from "../../assets/letter-back.svg";
import letterfront from "../../assets/letter-front.svg";

const Letter = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if(animate){
  
      const element = document.getElementById("ss");
      if (element) {
        console.log('Element found:', element); 

        element.style.transition = 'transform 1s ease';
        element.style.transform = 'translateY(350px)';


      }
    }
  }, [animate]);

  return (
    <div className="letterkh">
      <div id="let-container">
        <img className="let1" src={letterback} alt="Letter Back"></img>
        <div id="ss" className="innerletter">

          <div className="help">
            <textarea className="message" rows="8" placeholder="Write Your idea"></textarea>
            <button className="upload">upload references</button>
            <button 
              className="go" 
              onClick={() => {
                console.log('Submit button clicked'); 
                setAnimate(true);
              }}
            >
              send
            </button>
          </div>
        </div>
        <img className="let" src={letterfront} alt="Letter Front"></img>
      </div>
    </div>
  );
};

export default Letter;
