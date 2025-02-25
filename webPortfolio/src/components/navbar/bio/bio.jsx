import React from "react";
import './bio.css'
import me from '../../../assets/me.svg'
const Bio = () =>{
    return(
<div className="bio">
<img className='me' src={me} alt="" />
<h1>about me</h1>

    <p>Hi there! I'm Helia, a computer engineering student with a deep passion for art.
        I've been fortunate enough to blend these two interests into a unique skill set.
        On this website, you'll find a showcase of my artwork, ranging from digital illustrations to traditional paintings.
         Art allows me to express my thoughts, emotions, and ideas in ways that words often cannot. At the same time, my love for technology and programming has driven me to develop innovative solutions and projects.
          I enjoy the challenge of problem-solving and bringing ideas to life through code. 
          Through this site, I aim to share my creative journey and technical projects, hoping to inspire others and connect with like-minded individuals.
           Thank you for visiting, and I hope you enjoy exploring my work as much as I enjoy creating it.</p>

    <div className="resume">My resume</div>

</div>

    );
}
export default Bio