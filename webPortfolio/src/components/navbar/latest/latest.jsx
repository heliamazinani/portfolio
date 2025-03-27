import React from "react";
import './latest.css'
import logo from '../../../../public/images/bowl.jpg'; 
import logo1 from '../../../../public/images/snake.jpg';
import logo2 from '../../../../public/images/cock.jpg';  
import logo3 from '../../../../public/images/birdi.jpg';
const Latest = () =>{
    return(
        <div className="latest-works">
            <div className="titlee">
                <h1>My Latest Work</h1>
                
            </div>
            <div className="data">
            <img  className= "image"src={logo} alt="" />

            <img  className= "image"src={logo1} alt="" />


            <img  className= "image"src={logo2} alt="" />

            <img  className= "image"src={logo3} alt="" />

            <img  className= "image"src={logo} alt="" />
            <div className="to-gallery">show more-D</div>


            </div>
        </div>
    );
}
export default Latest