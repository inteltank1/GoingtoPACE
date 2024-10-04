import anim from './assets/PACE_BeautyPass__camera02_YT1080.gif'

function Animation(){
    return(
        <>
        <div className='container'>
        <img id='HiHello' src={anim}></img>
        <div className='centered'><b>PACE</b></div>
        </div>
        </>
    )
}

export default Animation;