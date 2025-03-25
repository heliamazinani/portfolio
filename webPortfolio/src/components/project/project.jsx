import React from "react";
import "./project.css";
import logo from '../../assets/logo.svg'; 
const Project = ({ name  ,dis,language ,link,im}) => {
    return(
        <a href={link}>
            <div className="pborder">
                
                <img className="ppic" src={im} alt="" />
                <div className="pcontainer">
                <div className="pname" > {name}</div>
                <p className="pdis">{dis}
                </p>
                </div>
                <div className="plan" > {language}</div>
                
            </div>
            </a>


    );


}
export default Project;