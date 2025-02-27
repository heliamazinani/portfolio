import React, { useRef, useState } from "react";
import './Navbar.css';
import logo from '../../assets/logo.svg'; 
import batclosed from '../../assets/bat-closed.svg'; 
import batopen from '../../assets/bat-open.svg'; 
import back from '../../assets/back.svg'; 
import front from '../../assets/front.svg'; 
import Button from "./button";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu from "../../assets/menu.svg"
import close from "../../assets/close.svg"
const Navbar = () => {
    const [isHovered4, setIsHovered4] = useState(false);
    const menuRef = useRef();
    const openmenu = () =>{
        menuRef.current.style.right="0px";
    }
    const closemenu = () =>{
        menuRef.current.style.right="-190px";
    }


    return (
        <div>
        <div className="alll"></div>
        <div className="navbar">
            
            <img className="logo" src={logo} alt="" />
            <img src={menu} onClick={openmenu} className="nav-open"  />
          
            <ul ref={menuRef} className="nav-menu">
                <img src={close} onClick={closemenu} alt="" className="nav-close" />
                <li>
                    <Button text = "Home"></Button>

                </li>
                <li>            
                <Button text = "Commission"></Button>
                        
                        
                    </li>
                <li> 
                <Button text = "Portfolio"></Button>
                </li>
                <li> 
                <Button text = "Gallery"></Button>
                </li>
              
            </ul>
            <AnchorLink className="anchorlink" offset={50} href="#contact">
                     <div className="nav-connect" 
                     onMouseEnter={() => setIsHovered4(true)}
                     onMouseLeave={() => setIsHovered4(false)}

                     >
                       
                        <img className="letter" src={isHovered4 ? front : back} alt="" ></img>
                        <div className="textin">{isHovered4 ? ' ' : 'contact me'}</div>
                       
                    </div>
                    </AnchorLink>
                    
        </div>
        </div>
    );
}

export default Navbar;
