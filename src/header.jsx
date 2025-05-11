import { useState } from 'react';
import { Link } from 'react-scroll';
import "./header.css"

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="header" id="header">
            <h1>Mogase Nkadimeng</h1>
            <button className="hamburger" onClick={handleMenuToggle} aria-label="Toggle navigation">
                <span className={menuOpen ? "bar open" : "bar"}></span>
                <span className={menuOpen ? "bar open" : "bar"}></span>
                <span className={menuOpen ? "bar open" : "bar"}></span>
            </button>
            <div className={`objects ${menuOpen ? "show" : ""}`}>
                <Link to="home" smooth={true} duration={500} onClick={() => setMenuOpen(false)}><button>Home</button></Link>
                <Link to="about-me" smooth={true} duration={500} onClick={() => setMenuOpen(false)}><button>About</button></Link>
                <Link to="skills" smooth={true} duration={500} onClick={() => setMenuOpen(false)}><button>Skills</button></Link>
                <Link to="PROJ" smooth={true} duration={500} onClick={() => setMenuOpen(false)}><button>Projects</button></Link>
                <Link to="footer" smooth={true} duration={500} onClick={() => setMenuOpen(false)}><button>Contact</button></Link>
            </div>
        </div>
    );
}
export default Header