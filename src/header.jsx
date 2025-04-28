import {Link} from 'react-scroll';

function Header(){
    return(
        <div className="header" id='header'> 
        <h1>Mogase Nkadimeng</h1>
        <div className="objects">
            <Link to="home" smooth={true} duration={500} ><button>Home</button></Link>
            <Link to="about" smooth={true} duration={500} ><button>About</button></Link>
            <Link to="skills" smooth={true} duration={500}><button>Skills</button></Link>
            <Link to="projects" smooth={true} duration={500}><button>Projects</button></Link>
            <Link to="footer" smooth={true} duration={500}><button>Contact</button></Link>
            
        </div>
        </div>
    )
}
export default Header