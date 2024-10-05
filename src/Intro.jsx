import vid from "./assets/pacesat.mp4";

function Animation() {
  return (
    <>
      <div className="container">
        <video id="HiHello" src={vid} autoPlay={true} loop muted controls="" />
        <div className="centered">
          <b>PACE</b>
        </div>
      </div>
      <button href="./interactivemap/index.jsx">dsadsad</button>
    </>
  );
}

export default Animation;
