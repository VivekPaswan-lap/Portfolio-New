import React from "react";
import AboutImage from "../Photos/Office.png";

function About(){
    const selected = document.getElementsByClassName("about-tab-link");
    const active = document.getElementsByClassName("about-tab-contant");

    function About(section,link){
        
         for(let contant of active){
            contant.classList.remove("active");
         }
         for(let select of selected){
            select.classList.remove("selected");
         }
        // event.currentTarget.classList.add("selected");
         
        document.getElementById(link).classList.add("selected");
         document.getElementById(section).classList.add("active");
    }

    return(
        <>
        <div id="About">
      <div id="about-row">
        <div id="about-col-1">
          <img src={AboutImage} alt="" />
        </div>
        <div id="about-col-2">
          <h1>About</h1>
          <p>
            Hi, I am Rajan Pal. I have completed our B.Tech (Computer Science) from VBSPU Jaunpur.
            I have knowledge of Frontend, Backend and i have also good knowledge of C++ & DSA. 
          </p>

          <div id="about-link">
            <div id="skill"  className="about-tab-link selected" onClick={()=>About('Skill','skill')}>
              Skill
            </div>
            <div id="education"  className="about-tab-link" onClick={()=>About('Education','education')}>
              Education
            </div>
            <div id="experiance"  className="about-tab-link" onClick={()=>About('Experiance','experiance')}>
              Experiance
            </div>
          </div>
          <div className="about-tab-contant active" id="Skill">
            <ul>
              <li>
                <span>C++ / DSA</span> <br />
                HTML CSS JavaScript Reactjs<br />
                NodeJs <br />
                MongoDB, MySql <br />
                MS Word
              </li>
            </ul>
          </div>
          <div className="about-tab-contant" id="Education">
            <ul>
              <li>
                <span>B.Tech.(CSE)</span> <br />
                12th = 82% / 10th = 80%<br />
                From SVM Fatehpur
              </li>
            </ul>
          </div>
          <div className="about-tab-contant" id="Experiance">
            <ul>
              <li>
                <span>Front End</span> <br />
                <span>Back End</span> <br />
                C++ High Level <br />
                DSA High Level <br />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}

export default About;