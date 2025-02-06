import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import About from "./About";
import Header from "./Header";
import { Services } from "./Services";
import { Works } from "./Works";
import { Contacts } from "./Contacts";
import { Bottom } from "./Bottom";
function  Home(){
    const navigate = useNavigate();
  const [message, setMessage] = useState("");

  async function Find(){
    navigate("/AIText");
  
  } 

  return(
    <>
    <Header/>
    <div id="Home-btn">
      <button onClick={Find}>Chat With AI</button>
    </div>
    <About/> 
    <Services/>
    <Works/>
   <Contacts/>
   <Bottom/>
    </>
  )
}

export default Home;