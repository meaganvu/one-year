import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import connectionsLogo from '../../images/ConnectionLogo.png';
import wordleLogo from '../../images/WordleLogo.png';
import { Link } from 'react-router-dom';
import TypingEffect from '../../component/Typing';


const text = "Happy one year anniversary my love. \n I can't wait to spend the rest of my life waking up next to you. \n I'm grateful that you will be by my side during laughs, cries, successes, and failures. \n I love you endlessly ♥";
const typingSpeed = 50;

function Home() {
  return (
    <div className="Home">
        <div className='home_header'>
         <Link to="/" className="link-container">
        <FontAwesomeIcon icon={faHeart} className="heart-icon" />
        <p>One Year with You</p>
        </Link>
      </div>
      <div className='home_banner'>
       <TypingEffect text={text} speed={typingSpeed} />
      </div>
      <div className='home_gameGrid'>
        <div className='game-block' id='Connections'>
            <div className='game-block-top'>
                <img src ={connectionsLogo}/>
                
                <p>Connections</p>
            </div>
            <div className='game-block-bottom'>
              <Link to="/Connection">
                <button className='play-button'>Play</button>
              </Link>
            </div>
        </div>
        <div className='game-block' id='Wordle'>
            <div className='game-block-top'>
                    <img src ={wordleLogo}/>
                    <p>Wordle</p>
                </div>
                <div className='game-block-bottom'>
                  <Link to="/Wordle">
                    <button className='play-button'>Play</button>
                    </Link>
                </div>
        </div>
        <div className='game-block' id='Quiz'>
        <div className='game-block-top'>
                <FontAwesomeIcon icon={farHeart} className="Quiz-icon" />
                    <p>Quiz</p>
                </div>
                <div className='game-block-bottom'>
                  <Link to="/quiz">
                    <button className='play-button'>Play</button>
                    </Link>
                </div>
        </div>

      </div>
    </div>
    
  );
}

export default Home;
