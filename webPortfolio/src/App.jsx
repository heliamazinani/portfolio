import React from "react"
import Navbar from "./components/navbar/navbar";
import Bio from "./components/navbar/bio/bio";
import Latest from "./components/navbar/latest/latest";
import Contact from "./components/navbar/contact/contact";
import Home from "./pages/home.jsx"
import{BrowserRouter} from "react-router-dom"
import ReactLoading from "react-loading";
import { useEffect, useState } from "react";
import Loading from "../components/loading";



const App = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      setTimeout(() => setLoading(false), 3300)
  }, [])
  if (loading) {
      return <Loading/>
  }
return(
  <div>
    
  </div>
);

}

export default App