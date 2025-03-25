
import React, { useEffect, useState } from "react";
import Bio from "../components/navbar/bio/bio";
import Latest from "../components/navbar/latest/latest";
import Contact from "../components/navbar/contact/contact";
import Skills from "../components/navbar/skills/skills";

import "./Gallery.css"

const Trad = ({data1}) =>{

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(data1);
  }, []);

  return (
    <div>
    <div className="wall">
    <ul>
      {data.map((user) => (
        <div key={user.id}>
        
        <img className="paintings" src={user.image} alt=""></img>

        </div>
      ))}
    </ul>
    </div>

<Contact></Contact>
</div>
  );
}
export default Trad;