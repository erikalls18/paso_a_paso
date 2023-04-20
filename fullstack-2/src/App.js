import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Character from "./components/character";
import PostCharacter from "./components/postcharacter";

function App() {
  return (
    
      <div className="container">
      <Router>
        <Routes>
          <Route path="/character" element={<Character />}/>
          <Route path="/postcharacter" element={<PostCharacter />}/>
        </Routes>
      </Router>
    </div>
   
  );
}

export default App;
