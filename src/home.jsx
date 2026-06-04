import Image1 from './images/IMG_2329.jpeg'
import cv from './images/cv.jpeg'
import "./home.css" 

function Home(){
    return(
        
        <div className="home">
            <div className="image-container">
                <img className='image1' src= {Image1} alt="Mogase Nkadimeng" />
            </div>
            <div className='h-right'>
                <div className="intro-text">
                    <h3>Hello, I'm</h3>
                    <h1>Mogase Nkadimeng</h1>
                    <p>Welcome to my portfolio! I'm a passionate Software developer who is ready to turn ideas into reality.</p>
                </div>
                <div className="cv-section">
                    <a href="/Mogase_Nkadimeng_CV.pdf" download className="cv-button">
                        <img className='cvimg' src={cv} alt="CV" />
                        <span>Download CV</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Home