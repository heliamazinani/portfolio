import React from "react";
import "./skills.css"
const Skills = () => {
    return (


        <div className="b">
            <h1>My Skills</h1>
            <div className="skill-bar">
            <div className="skill" >
                    <span className="skill-name">Procreate</span>
                    <div className="skill-level" id="pro"></div>
                    <div className="blood">
                    <div class="vertical-rectangle"></div>
                    <div className="droplet"></div>
                    </div>
                </div>
                <div className="skill">
                    <span className="skill-name">Java</span>
                    <div className="skill-level"  id="java" ></div>
                </div>
                <div className="skill">
                    <span className="skill-name">C</span>
                    <div className="skill-level"  id="C" ></div>
                </div>
                <div className="skill" >
                    <span className="skill-name">Python</span>
                    <div className="skill-level" id="Python" ></div>
                </div>
                <div className="skill" >
                    <span className="skill-name">HTML</span>
                    <div className="skill-level" id="htmll" ></div>
                </div>
                <div className="skill" >
                    <span className="skill-name">CSS</span>
                    <div className="skill-level" id="css" ></div>
                </div>
                <div className="skill">
                    <span className="skill-name">JavaScript</span>
                    <div className="skill-level" id="js" ></div>
                </div>
            </div>
        </div>

        
    );
}

export default Skills;
