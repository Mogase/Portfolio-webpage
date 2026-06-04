import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import "./scrollButton.css"
function ScrollButton() {
  const [showButton, setShowButton] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) { 
        setShowButton(true);  
      } else {
        setShowButton(false); 
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    setShowButton(false);  
  };

  return (
    showButton && (
      <Link to="header" smooth={true} duration={500}>
        <button className="scrlup" onClick={handleClick}>
          ↑ Back to Top
        </button>
      </Link>
    )
  );
}

export default ScrollButton;
