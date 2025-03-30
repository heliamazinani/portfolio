import React from "react";
import Bio from "../components/navbar/bio/bio";
import Latest from "../components/navbar/latest/latest";
import Contact from "../components/navbar/contact/contact";
import Skills from "../components/navbar/skills/skills";
import Project from "../components/project/project";
import gtc from "../assets/gtc.jpg"
import tsm from "../../public/images/t.gif"

const Portfolio = () =>{
    return(

        <div>
            
            <Project name={"Get The cheese"} 
            dis={"my first project, Written in C without using OOP and displayed by allegro with hand drawn graphics, made for my first semester in university."}
            language={"language: C"} link={"https://github.com/heliamazinani/GET-THE-CHEESE"} im={gtc}></Project>

            <Project name={"Traveling Sales Man"} 
            dis={"my second semesters midterm project with hand drawn graphics."}
            language={"language: Java"} link={"https://github.com/heliamazinani/tsm/branches"} im={tsm} ></Project>

<Project name={"Traveling Sales Man"} 
            dis={"my second semesters midterm project with hand drawn graphics."}
            language={"language: Java"} link={"https://github.com/heliamazinani/tsm/branches"} im={tsm} ></Project>
        <Contact></Contact>
        </div>
    );
}

export default Portfolio