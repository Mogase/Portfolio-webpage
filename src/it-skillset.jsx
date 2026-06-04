import html from './images/html.jpg'
import css from './images/css.jpeg'
import js from './images/js.jpg'
import react from './images/react.jpg'
import c from './images/c.jpg'
import java from './images/java.jpg'
import php from './images/php.svg'
import laravel from './images/laravel.svg'
import kiro from './images/kiro.svg'
import "./it-skillset.css"

function Skillset(){
    return(
        <div className="skillset">
            <h3>My IT skillset</h3>
            <div className="skillset-grid">
                <div className="lang"><img className="sk" src={html} alt="HTML" /></div>
                <div className="lang"><img className="sk" src={css} alt="CSS" /></div>
                <div className="lang"><img className="sk" src={js} alt="JavaScript" /></div>
                <div className="lang"><img className="sk" src={react} alt="React" /></div>
                <div className="lang"><img className="sk" src={c} alt="C#" /></div>
                <div className="lang"><img className="sk" src={java} alt="Java" /></div>
                <div className="lang"><img className="sk" src={php} alt="PHP" /></div>
                <div className="lang"><img className="sk" src={laravel} alt="Laravel" /></div>
                <div className="lang"><img className="sk" src={kiro} alt="KIRO" /></div>
            </div>
        </div>
    )
}
export default Skillset