import React, { useState } from "react";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import AIText from "./Components/AIText";
function App(){
 

    <nav>
      <Link to="/">Home</Link>
      <Link to="/AIText">AIText</Link>
    </nav>
  
  
 

  return(
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/AIText" element={<AIText/>}/>
      </Routes>
    </Router>
    </>
    
  )
}

export default App;