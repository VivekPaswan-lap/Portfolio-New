const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
//const PORT = process.env.PORT||5003;
const PORT = 5004;
//const APIKey = process.env.APIKEY;
const APIKey = 'AIzaSyA1qyE0ic_EtjSPTsng8P9cpRXH6chj37A';
app.use(express.json());
app.use(cors());

app.post("/", (req, resp) =>{
   const message = req.body.message;
   resp.send({"Name":message+"hi"});
})

app.post("/AI", async(req, resp)=>{
    try{
        const message = req.body.message;
        console.log(message);
        const genAI = new GoogleGenerativeAI(APIKey);
         const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro"});
       // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
        const result = await model.generateContent(message);
       // resp.send(result.response.text());
       resp.send(result);
       
    //    console.log(result.response.text());
    }
    catch(err){
        console.log("Error");
        resp.send("Error : " +err);
    }
   
})


app.listen(PORT, ()=>{
    console.log("Server is Running in Port " + PORT);
})