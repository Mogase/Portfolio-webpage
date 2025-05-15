import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import "./scrollButton.css"
function ScrollButton() {
  const [showButton, setShowButton] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight; 
      const documentHeight = document.documentElement.scrollHeight;

      
      console.log('Scroll Position:', scrollPosition);
      console.log('Document Height:', documentHeight);

      if (scrollPosition >= documentHeight - 10) { 
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
          CLICK HERE TO SCROLL BACK UP
        </button>
      </Link>
    )
  );
}

export default ScrollButton;
