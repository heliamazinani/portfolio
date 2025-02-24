import React, { useState } from "react";
import './Navbar.css';
import logo from '../../assets/logo.svg'; 
import batclosed from '../../assets/bat-closed.svg'; 
import batopen from '../../assets/bat-open.svg'; 
import back from '../../assets/back.svg'; 
import front from '../../assets/front.svg'; 
import Button from "./button";
const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);

    return (
        <div className="navbar">
            <img className="logo" src={logo} alt="" />
            <ul className="nav-menu">
                <li>
                    <Button text = "home"></Button>

                </li>
                <li>            
                <Button text = "commission"></Button>
                        
                        
                    </li>
                <li> 
                <Button text = "Portfolio"></Button>
                </li>
                <li> 
                <Button text = "Gallery"></Button>
                </li>
            </ul>
                     <div className="nav-connect" 
                     onMouseEnter={() => setIsHovered4(true)}
                     onMouseLeave={() => setIsHovered4(false)}

                     >
                       
                        <img className="letter" src={isHovered4 ? front : back} alt="" ></img>
                        <div className="textin">{isHovered4 ? ' ' : 'contact me'}</div>
                    </div>
        </div>
    );
}

export default Navbar;
