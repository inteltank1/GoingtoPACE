import image from "./assets/Construction_upscaled.jpg";
import image2 from "./assets/Construction-2.jpg";
import image3 from "./assets/REAL-Construction-3.jpg";
import image4 from "./assets/flat-Map2.png";

function Pantalla() {
  return (
    <>
      <div id="BackgroundDiv">
        <img src={image} id="PACE_Img1"></img>
        <h1 id="textNextToScreen">
          What is PACE?<br></br>
          <p className="littleText">
            Find out <a href="../WhatIsPACE" className="hover-link">HERE</a>
          </p>
        </h1>
        <img src={image2} id="PACE_Img2"></img>
        <h1 id="textNextToScreen2">
         Look at the Plankton Map!
         <img src={image4} id="FlatMap"></img>          
        </h1>

        <br></br>
      </div>
    </>
  );
}

export default Pantalla;
