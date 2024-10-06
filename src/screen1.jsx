import image from "./assets/Construction_upscaled.jpg";
import image2 from "./assets/Construction-2.jpg";
import image3 from "./assets/REAL-Construction-3.jpg";

function Pantalla() {
  return (
    <>
      <div id="BackgroundDiv">
        <img src={image} id="PACE_Img1"></img>
        <h1 id="textNextToScreen">
          What is PACE?<br></br>
          <p>
            Find out <a href="../WhatIsPACE">HERE</a>
          </p>
        </h1>
        <img src={image2} id="PACE_Img2"></img>
        <h1 id="textNextToScreen2">What are its parts?</h1>
        <br></br>
        <img src={image3} id="PACE_Img3"></img>
        <h1 id="textNextToScreen3">Last but not least...</h1>
        <br></br>
      </div>
    </>
  );
}

export default Pantalla;
