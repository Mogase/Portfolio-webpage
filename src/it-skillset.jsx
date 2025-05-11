import html from './images/html.jpg'
import css from './images/css.jpeg'
import js from './images/js.jpg'
import react from './images/react.jpg'
import c from './images/c.jpg'
import java from './images/java.jpg'
import "./it-skillset.css"

function Skillset(){
    return(
        <div className='skillset'>
            <h3>My IT skillset</h3>
            <div className='skillset1'>
                <div className='lang'><img className='sk' src={html} alt="" /></div>
                <div className='lang'><img className='sk' src={css} alt="" /></div>
                <div className='lang'><img className='sk' src={js} alt="" /></div>
            </div>
            <div className='skillset2'>
            <div className='lang'><img className='sk' src={react} alt="" /></div>
            <div className='lang'><img className='sk' src={c} alt="" /></div>
            <div className='lang'><img className='sk' src={java} alt="" /></div>
            </div>

            
        </div>
    )
}
export default Skillset