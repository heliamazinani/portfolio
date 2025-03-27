
import React, { useEffect, useState } from "react";
import Bio from "../components/navbar/bio/bio";
import Latest from "../components/navbar/latest/latest";
import Contact from "../components/navbar/contact/contact";
import Skills from "../components/navbar/skills/skills";
import data1 from "../data.json"
import "./Gallery.css"
import data2 from "../digital.json"
import Trad from"./trad"

const Gallery = () =>{
    const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="bb">
        {
            tabIndex === 0 && (
                <div>
        <button className="trad" onClick={() => setTabIndex(1)}> Traditional </button>
        <button className="trad" onClick={() => setTabIndex(2)}> Digital </button>
        </div>
        )
        }
       
        {
            tabIndex === 1 && (
                <div>
                     <Trad data1={data1}></Trad>
                </div>
            )
        }
                {
            tabIndex === 2 && (
                <div>
                    <Trad data1={data2}></Trad>
                </div>
            )
        }
<Contact></Contact>

</div>
  );
}
export default Gallery