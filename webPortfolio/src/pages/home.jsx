import React from "react";
import Bio from "../components/navbar/bio/bio";
import Latest from "../components/navbar/latest/latest";
import Contact from "../components/navbar/contact/contact";
import Skills from "../components/navbar/skills/skills";

const Home = () =>{
    return(

        <div>
        <Bio>

        </Bio>
        <Skills></Skills>
        <Latest></Latest>
        <Contact></Contact>
        </div>
    );
}

export default Home