import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppStore, faUikit, faWebAwesome } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export const Services = ()=>{
    return(
        <>
          <div id="Service">
      <h1 id="head-h1">My Services</h1>

      <div id="Service-content">
        <div>
          <FontAwesomeIcon icon={faAppStore}/>

          <h1>App Development</h1>
          <p>
            Application development, or app development, is the process 
            of planning, designing, creating, testing, and deploying an 
            application to perform various business operations.
          </p>
          <a href="#">Lern More</a>
        </div>
        <div>
          <FontAwesomeIcon icon={faWebAwesome}/>
          <h1>Web Development</h1>
          <p>
            Web development refers to the creating, building, and
             maintaining of websites. It includes aspects such as
              web design, web publishing, web programming, and database management.
          </p>
          <a href="#">Lern More</a>
        </div>
        <div>
          <FontAwesomeIcon icon={faUikit}/>
          <h1>UI Development</h1>
          <p>
            UI design is the system of designing the appearance of a 
            product interface.
            Typically, UI designers will be working on the screens of 
            a digital product, be it a mobile app or a website.
          </p>
          <a href="#">Lern More</a>
        </div>
      </div>
    </div>
        </>

    )
}