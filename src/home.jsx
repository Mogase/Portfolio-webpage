import Image1 from './images/IMG_00542.jpg'
import cv from './images/cv.jpeg'
function Home(){
    return(
        <div  className="home">
            <div>  <img className='image1' src= {Image1} alt="" /></div>
            <div className='h-right'>
                <p>Hi, I’m Mogase Nkadimeng
                and welcome to my portfolio webpage where you will learn more about me and my experties.</p>
                <div>
                    <h5>click below</h5>
                    <a href="/Mogase_Nkadimeng_CV.pdf" download>
                    <img className='cvimg' src={cv} alt="download cv" />
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Home