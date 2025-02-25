import React from "react";
import './latest.css'
import logo from '../../../assets/logo.svg'; 
const Latest = () =>{
    return(
        <div className="latest-works">
            <div className="title">
                <h1>My Latest Work</h1>
                
            </div>
            <div className="data">
            <img  className= "image"src={logo} alt="" />

            <img  className= "image"src={logo} alt="" />


            <img  className= "image"src={logo} alt="" />

            <img  className= "image"src={logo} alt="" />

            <img  className= "image"src={logo} alt="" />
            <div className="to-gallery">show more-D</div>


            </div>
        </div>
    );
}
export default Latest