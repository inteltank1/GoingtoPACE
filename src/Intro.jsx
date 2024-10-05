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
    </>
  );
}

export default Animation;
