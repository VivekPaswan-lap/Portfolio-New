import React from "react";
import Image1 from "../Photos/Work1.jpg";
import Image2 from "../Photos/Work2.jpg";
import Image3 from "../Photos/Work3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppStore, faUikit, faWebAwesome } from "@fortawesome/free-brands-svg-icons";

export const Works = () => {
  return (
    <>
      <div id="Portfolio">
        <h1 id="head-h1">My Work</h1>
        <div id="work">
          <div className="work-id">
            <img src={Image1} alt="" />
            <div className="layer">
              <h1>App Design</h1>
              <p>
                App design refers to the creative process of designing the
                visual and interactive elements of a application.
              </p>
              <a href="#">
              <FontAwesomeIcon icon={faAppStore}/>
              </a>
            </div>
          </div>
          <div className="work-id">
            <img src={Image2} alt="" />
            <div className="layer">
              <h1>UI Design</h1>
              <p>
                User interface (UI) design is the process of creating the look
                and feel of an application’s user interface.
              </p>
              <a href="#">
    
                <FontAwesomeIcon icon={faUikit} style={{color:"red"}}/>
              </a>
            </div>
          </div>
          <div className="work-id">
            <img src={Image3} alt="" />
            <div className="layer">
              <h1>Web Design</h1>
              <p>
                Web design is the creation of websites and pages to reflect a
                company’s brand and information and ensure a user-friendly
                experience.
              </p>
              <a href="#">
              <FontAwesomeIcon icon={faWebAwesome}  />
              </a>
            </div>
          </div>
        </div>
        <button id="work-btn">See More</button>
      </div>
    </>
  );
};
