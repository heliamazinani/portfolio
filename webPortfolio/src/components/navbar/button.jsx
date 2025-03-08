import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import batclosed from "../../assets/bat-closed.svg";
import batopen from "../../assets/bat-open.svg";
import back from "../../assets/back.svg";
import front from "../../assets/front.svg";
import { Outlet, Link } from "react-router-dom";

const Button = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);
  let links = "/"+text;
  return (
    <div
      className="button-divider"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
    
            <Link className="link" to={links} >{text}</Link>
          
      <img className="bat" src={isHovered ? batopen : batclosed} alt="" />
    </div>
  );
};
export default Button
