import linkedin from './images/linkedin.jpg'
import cellphone from './images/call.jpg'
import email from './images/email.jpg'
import github from './images/git.jpg'
function Contact(){
    return(
        <div className="footer">
            <h2>Get in touch with me</h2>
            <div className='links'>
                <div className="links1">
                    <div className='linktxt'>
                        <img className='linkicon' src={linkedin} alt="" />
                        <a className='txt' href="https://www.linkedin.com/in/mogase-nkadimeng-120294294/?trk=opento_sprofile_topcard" target='_blank' rel='noopener noreferrer'>My Linkedin</a>
                        
                    </div>

                    <div className='linktxt'>
                        <img className='linkicon' src={cellphone} alt="" />
                        <p className='txt'>069 720 4687</p>

                    </div>
                </div>
                <div className="links2">
                    <div className='linktxt'>
                        <img className='linkicon' src={github} alt="" />
                        <a className='txt' href='https://github.com/Mogase' target='_blank' rel='noopener noreferrer'>My GitHub</a>

                    </div>
                    <div className='linktxt'>
                        <img className='linkicon' src={email} alt="" />
                        <p className='txt'>mogasenkadmeng@icloud.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact