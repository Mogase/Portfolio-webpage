import Image2 from './images/IMG_6623.jpg'

function About(){
    return(
        <div className="about">

                    <div>  <img className='image2' src= {Image2} alt="" /></div>
                    <div className='A-right'>
                        <h2>About Me</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. In assumenda aspernatur unde quasi voluptatibus quam, qui hic eius aliquam dicta impedit asperiores amet, ipsum quis perferendis esse? Iure, animi consequuntur.
                        </p>  
                    </div>
                </div>        
    )
}
export default About