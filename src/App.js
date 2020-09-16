import React, { useState } from "react";
import Cube from "./Components/Cube";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

const App = (props) => {
  const [side, setSide] = useState("home");

  function updateSide(updatedSide) {
    return setSide(updatedSide);
  }

  return (
    <div className="app">
      <Nav update={updateSide} />
      <div className="container">
        <div className="scene">
          <Cube side={side} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
