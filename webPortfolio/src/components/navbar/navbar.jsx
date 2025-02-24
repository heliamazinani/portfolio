import React, { useState } from "react";
import './Navbar.css';
import logo from '../../assets/logo.svg'; 
import batclosed from '../../assets/bat-closed.svg'; 
import batopen from '../../assets/bat-open.svg'; 
import back from '../../assets/back.svg'; 
import front from '../../assets/front.svg'; 
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
                    <div 
                        className="button-divider"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        Home
                        <img className='bat' src={isHovered ? batopen : batclosed} alt="" />
                    </div>
                </li>
                <li>                    <div 
                        className="button-divider"
                        onMouseEnter={() => setIsHovered1(true)}
                        onMouseLeave={() => setIsHovered1(false)}
                    >
                        commission
                        <img className='bat' src={isHovered1 ? batopen : batclosed} alt="" />
                    </div></li>
                <li> <div 
                        className="button-divider"
                        onMouseEnter={() => setIsHovered2(true)}
                        onMouseLeave={() => setIsHovered2(false)}
                    >
                        Portfolio
                        <img className='bat' src={isHovered2 ? batopen : batclosed} alt="" />
                    </div></li>
                <li> <div 
                        className="button-divider"
                        onMouseEnter={() => setIsHovered3(true)}
                        onMouseLeave={() => setIsHovered3(false)}
                    >
                        Gallery
                        <img className='bat' src={isHovered3 ? batopen : batclosed} alt="" />
                    </div></li>
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
