import React from "react";
import "./project.css";
import logo from '../../assets/logo.svg'; 
const Project = () => {
    return(
            <div className="pborder">
                <img className="ppic" src={logo} alt="" />
                <div className="pname"> name</div>

            </div>


    );


}
export default Project;