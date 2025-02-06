import { faAppStore } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Bottom = ()=>{
    return(
        <>
        <div id="bottom">
      <div>
        {/* Copyright <i class="fa-regular fa-copyright"></i> */}
       
         <p>  <FontAwesomeIcon icon={faCopyright} className='Icon-email-phone'/> Designed and developed by Rajan </p>
        {/* <i class="fa-solid fa-heart"></i> */}
        
         <p>Thanks for visiting my portfolio! <FontAwesomeIcon icon={faAppStore} className='Icon-email-phone'/> Let's create something amazing together.</p>
        
       </div>
    </div>
        </>
    )
}