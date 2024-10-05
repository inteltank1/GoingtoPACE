import image from "./assets/Construction_upscaled.jpg";

function Pantalla() {
  return (
    <>
      <div id="BackgroundDiv">
        <img src={image} id="PACE_Img1"></img>
        <h1 id="textNextToScreen">What is PACE?</h1>
      </div>
    </>
  );
}

export default Pantalla;
