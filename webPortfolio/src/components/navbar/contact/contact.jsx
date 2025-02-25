import React from "react";
import "./contact.css"
import email from '../../../assets/email.svg'
import phone from '../../../assets/phone.svg'
import insta from '../../../assets/insta.svg'
import github from '../../../assets/github.svg'
const Contact = () =>{
    return(
        <div className="contact">
            <div className="title">
                <h1>Get in touch</h1>
            </div>
            <div className="section">
                <div className="left">
                    <h1>Lets talk</h1>
                    <p>iferuhvygdbj sacnkjmjiorufhyvgydjcnskweio;jrfuhyvjdncksmlwjeiurfhygvdjns</p>
                </div>
            </div>
            <div className="details">
            <img src={email} alt="" />
            </div>
            <div className="details">
            <img src={phone} alt="" />
                </div>
            <div className="details">
            <img src={insta} alt="" />
                
            </div>
            <div className="details">
            <img src={github} alt="" />
                
                </div>

        </div>
    );
}

export default Contact