import React from "react";
import "./letter.css"
const Letter = () => {

    return(<div className="letterkh">
        <div className="innerletter">
        write Your idea here
        <textarea name="message" rows="8" placeholder="Your idea"></textarea>
        <button>
            upload refrences
        </button>
        <button>submit</button>
    </div>
    </div>);

}
export default Letter