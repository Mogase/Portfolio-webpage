import linkedin from './images/linkedin.jpg'
import cellphone from './images/call.jpg'
import email from './images/email.jpg'
import github from './images/git.jpg'
import "./contact.css"
function Contact(){
    return(
        <div className="footer">
            <h2>Get in touch with me</h2>
            <div className='links'>
                <a className='linktxt' href="https://www.linkedin.com/in/mogase-nkadimeng-120294294/?trk=opento_sprofile_topcard" target='_blank' rel='noopener noreferrer'>
                    <img className='linkicon' src={linkedin} alt="LinkedIn" />
                    <span className='txt'>My LinkedIn</span>
                </a>

                <div className='linktxt'>
                    <img className='linkicon' src={cellphone} alt="Phone" />
                    <span className='txt'>070 497 9800</span>
                </div>

                <a className='linktxt' href='https://github.com/Mogase' target='_blank' rel='noopener noreferrer'>
                    <img className='linkicon' src={github} alt="GitHub" />
                    <span className='txt'>My GitHub</span>
                </a>

                <div className='linktxt'>
                    <img className='linkicon' src={email} alt="Email" />
                    <span className='txt'>mogasenkadmeng11@gmail.com</span>
                </div>
            </div>
        </div>
    )
}
export default Contact