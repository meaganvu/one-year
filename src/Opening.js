import './Opening.css';
import Arrow from './images/Arrow.png';
import { Link } from 'react-router-dom';

function Opening() {
  return (
    <div className="Opening">
      <div className = "main">
        <div className = "main_top">
          <p>Hey Nick!</p>
          <img src ={Arrow}/>
        </div>
        <div className = "main_bottom">
          <p className = "bottom_text">Click here for your anniversary gift...</p>
          <Link to="/home">
            <button className = "main_button">Click me!</button>
          </Link>
        </div>
      </div>
    </div>
    
  );
}

export default Opening;
