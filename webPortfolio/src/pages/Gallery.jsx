
import React, { useEffect, useState } from "react";
import Bio from "../components/navbar/bio/bio";
import Latest from "../components/navbar/latest/latest";
import Contact from "../components/navbar/contact/contact";
import Skills from "../components/navbar/skills/skills";
import data1 from "../data.json"
import "./Gallery.css"
import Trad from"./trad"

const Gallery = () =>{

  return (
    <div className="bb">
        <button className="trad"> Traditional </button>
        <button className="trad"> Digital </button>
        {/* <Trad data1={data1}></Trad> */}

<Contact></Contact>
</div>
  );
}
export default Gallery