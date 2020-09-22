import React, { useState, useEffect } from "react";
import Cube from "./Components/Cube";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Loading from "./Components/Loading";

const App = (props) => {
  const [side, setSide] = useState("home");
  const [loading, setLoading] = useState(true);

  function updateSide(updatedSide) {
    return setSide(updatedSide);
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      {loading === false ? (
        <div className="app">
          <Nav update={updateSide} />
          <div className="container">
            <div className="scene">
              <Cube side={side} />
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default App;
