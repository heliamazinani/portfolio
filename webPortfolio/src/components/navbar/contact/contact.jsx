import React from "react";
import "./contact.css";
import email from "../../../assets/email.svg";
import phone from "../../../assets/phone.svg";
import insta from "../../../assets/insta.svg";
import github from "../../../assets/github.svg";
const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "4bef962d-c7d0-4cdf-90cb-a28cf4fa41a6");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            alert(res.message)
        }
      };
  return (

    <div id="contact"className="all">
        
    <div className="contact">
      <div className="title">
        <h1>Get in touch</h1>
      </div>
      <div className="section">
        <div className="left">
          <h1>Lets talk</h1>
          <p>
            iferuhvygdbj
            sacnkjmjiorufhyvgydjcnskweio;jrfuhyvjdncksmlwjeiurfhygvdjns
          </p>
        
      <div className="container">
      <div className="details">
        <img className="detail" src={email} alt="" />
        <p>13helia1383@gmail.com</p>
      </div>
      <div className="details">
        <img className="detail" src={phone} alt="" />
        <p>9037886434</p>
      </div>
      <div className="details">
        <img className="detail" src={insta} alt="" />
        <p>h_h_art_13</p>
      </div>
      <div className="details">
        <img className="detail" src={github} alt="" />
        <p>heliamazinani</p>
      </div>
      </div>
      </div>
      <form onSubmit={onSubmit} className="contact-right">
        <label htmlFor="">Your Name</label>
        <input type="text" placeholder="enter your name" name="name"/>
        <label htmlFor="">Your Email</label>
        <input type="email" placeholder="enter your email" name="email"/>
        <label htmlFor="">Right Your message here</label>
        <textarea name="message" rows="8" placeholder="enter your message"></textarea>
        <button type= "submit"className="submit"> Submit now</button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default Contact;
