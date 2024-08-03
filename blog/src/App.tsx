import { useState } from 'react';
import './App.css';
import githubLogo from './assets/github-logo.png';
import instagramLogo from './assets/Instagram_logo_2016.png';


function App() {
  const [color, setColor] = useState('black');

  const changeColor = () => {
    const colors = ['red', 'blue', 'green', 'purple', 'orange'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  };

  return (
    
    <>
        
        
        <main>
          <p>
            <div>
              <h2 className='me' style={{ color: color }} onClick={changeColor}>kiyochi</h2>
              <main className='me2'style = {{color:color}}>dan kiyochi shoji</main>
            </div>
           
            <br></br>
            <main>
              <div className="email-box">
          <a href="mailto:danshoji@usp.br">
            <h3 className = "contact">contact me!</h3>
          </a>
        </div></main>
            </p>
        </main>
        
      <footer>
        <a href="https://github.com/kiyochii" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub Logo" className='logo' />
        </a>
        <a href="https://instagram.com/dankiyochi" target="_blank" rel="noopener noreferrer">
          <img src={instagramLogo} alt="Instagram Logo" className='logo' />
        </a>
       
      </footer>
    </>
  );
}

export default App;
