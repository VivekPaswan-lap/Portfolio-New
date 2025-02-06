import React, { useEffect, useState } from "react";
import {Discuss} from "react-loader-spinner";
import { useParams } from "react-router-dom";
import '../App.css';

function AIText(){
    const [loader, setLoader] = useState(false);
    const [result, setResult] = useState("");
    const [message, setMessage] = useState("");
    // useEffect(()=>{
    //     setResult(parms.text);
    // },[]);

    const output_Box = document.getElementById("output-Box-Head"); 

    // function CreateDiv(){
    //     event.preventDefault();
    //     const div = document.createElement("div");
    //     div.classList.add("output-Box");
    //     const h3 = document.createElement("h3");
    //     h3.innerText = "Your Output";
    //     const p = document.createElement("p");
    //     p.innerText = {result};
    //     const input = document.createElement("input");
    //     input.setAttribute("onChange", (e)=>{setMessage(e.target.value)});
    //     const btn = document.createElement("button");
    //     btn.setAttribute("onClick","find");
    //     btn.setAttribute("value","Ask");

    //     div.appendChild(h3);
    //     div.appendChild(input);
    //     div.appendChild(btn);

    //    output_Box.appendChild(div);
    // }

    
   function Call(){
    setLoader(false);
   }
    async function Find(){
        setLoader(true);
        
        setResult("");
        event.preventDefault();
        console.log(message);
        try{
        let data = await fetch("http://localhost:5004/AI",{
          method:"POST",
          body : JSON.stringify({message}),
          headers:{
            "Content-Type":"application/json",
          }
        });
        setLoader(false);
        output_Box.style.display = "block";
        data = await data.json();
        console.log(data);
         const response = data.response.candidates[0].content.parts[0].text;
         console.log(data.response.candidates[0].content.parts[0].text);
        setResult(response);
      }catch(err){
        console.log(err);
        setResult("Server Problem, Please try after some time !");
      }
      } 

      window.addEventListener("keyup",()=>{
         if(event.keyCode == 13){
          Find();
         }
      })

    return(
        <>
         <div id="AIText">
          <h2>Please Ask a Question</h2>
        <form onSubmit={Find}>
          <input type="text" onChange={(e)=>{setMessage(e.target.value)}} placeholder="Enter a question....."/>
          <button type="submit">Ask</button>
    </form>

    <div id="Loader">
  
          <Discuss
            visible={loader}
            height="50"
            width="50"
            ariaLabel="discuss-loading"
            wrapperStyle={{}}
            wrapperClass="discuss-wrapper"
            color="#fff"
            backgroundColor="#F4442E"
            />
          
    </div>
    
    <div id="output-Box-Head">
    <div className="output-Box">
        <h3>Your OutPut </h3>
        <p>{result}</p> 
        {/* <form onSubmit={Find}>
           <input type="text"  onChange={(e)=>{setMessage(e.target.value)}}/>
           <button type="submit">Ask</button>
       </form> */}
       </div>
       </div>
    </div>
        
        

        </>
    )

    
}
export default AIText;