import './Quiz.css';
import React, { useState } from 'react';
import Carousel from '../../component/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import locatelli from '../../images/locatelli.jpg';
import SCDI from '../../images/SCDI.jpeg';
import benson from '../../images/Benson.jpg';
import casa from '../../images/Casa.jpg';
import nickMeagDob from '../../images/nick-meag-dob.jpeg';
import calendar from '../../images/Calendar.png';
import golfing from '../../images/golfing.jpeg';
import tt1 from '../../images/tt1.png';
import tt2 from '../../images/tt2.png';
import tt3 from '../../images/tt3.png';
import tt4  from '../../images/tt4.png';
import beatrice from '../../images/bea.png';
import justina from '../../images/justina.png';
import jill from '../../images/jill.png';
import reiko from '../../images/reiko.png';
import car from '../../images/car-1-yr.png';
import gift from '../../images/gift.png';
import puppy from '../../images/puppy.jpg';
import vape from '../../images/vape.png';
import { Link } from 'react-router-dom';


function Quiz() {
  const [clickedButtonGroup1, setClickedButtonGroup1] = useState(null);
  const [clickedButtonGroup2, setClickedButtonGroup2] = useState(null);
  const [clickedButtonGroup3, setClickedButtonGroup3] = useState(null);
  const [clickedButtonGroup4, setClickedButtonGroup4] = useState(null);
  const [clickedButtonGroup5, setClickedButtonGroup5] = useState(null);
  const [clickedButtonGroup6, setClickedButtonGroup6] = useState(null);
  const [clickedButtonGroup7, setClickedButtonGroup7] = useState(null);
  const [clickedButtonGroup8, setClickedButtonGroup8] = useState(null);
  const [clickedButtonGroup9, setClickedButtonGroup9] = useState(null);
  const [clickedButtonGroup10, setClickedButtonGroup10] = useState(null);
  const [clickedButtonGroup11, setClickedButtonGroup11] = useState(null);

  const handleButtonClickGroup1 = (button) => {
    setClickedButtonGroup1(prevButton => prevButton === button ? null : button);
  };

  const handleButtonClickGroup2 = (button) => {
    setClickedButtonGroup2(prevButton => prevButton === button ? null : button);
  };

  const handleButtonClickGroup3 = (button) => {
    setClickedButtonGroup3(prevButton => prevButton === button ? null : button);
  };

  const handleButtonClickGroup4 = (button) => {
    setClickedButtonGroup4(prevButton => prevButton === button ? null : button);
  };
  const handleButtonClickGroup5 = (button) => {
    setClickedButtonGroup5(prevButton => prevButton === button ? null : button);
  };
  const handleButtonClickGroup6 = (button) => {
    setClickedButtonGroup6(prevButton => prevButton === button ? null : button);
  };
  const handleButtonClickGroup7 = (button) => {
    setClickedButtonGroup7(prevButton => prevButton === button ? null : button);
  };
  const handleButtonClickGroup8 = (button) => {
    setClickedButtonGroup8(prevButton => prevButton === button ? null : button);
  };
  const handleButtonClickGroup9 = (button) => {
    setClickedButtonGroup9(prevButton => prevButton === button ? null : button);
  };
  const handleButtonClickGroup10 = (button) => {
    setClickedButtonGroup10(prevButton => prevButton === button ? null : button);
  };

  const handleButtonClickGroup11 = (button) => {
    setClickedButtonGroup11(prevButton => prevButton === button ? null : button);
  };
    
  return (
    <div className="Quiz">
      <div className='quiz_header'>
        <Link to="/home" className="link-container">
        <FontAwesomeIcon icon={faHeart} className="heart-icon" />
        <p>One Year with You</p>
        </Link>
      </div>
      <div className='title'> 
        <p>Nick + Meag Trivia</p>
        </div>
      <div className='quiz_banner'>
            <Carousel/> 
      </div>

      <div className='q1'>
        <p>Question 1: Which SCU building did we meet in?</p>
        <div className='q1-images'>
            <img src={SCDI}></img>
            <img src={locatelli}></img>
            <img src={casa}></img>
            <img src={benson}></img>
        </div>
        <div className='buttons' id ='q1'>
            <button className={clickedButtonGroup1 === 'A' ? 'red' : ''} 
            onClick={() => handleButtonClickGroup1('A')}
            > 
            A) SDCI</button>
            <button 
            className={clickedButtonGroup1 === 'B' ? 'red' : ''} 
            onClick={() => handleButtonClickGroup1('B')}
          >
            B) Locatelli
          </button>
          <button 
            className={clickedButtonGroup1 === 'C' ? 'green' : ''} 
            onClick={() => handleButtonClickGroup1('C')}
          >
            C) Casa
          </button>
          <button 
            className={clickedButtonGroup1 === 'D' ? 'red' : ''} 
            onClick={() => handleButtonClickGroup1('D')}
          >
            D) Benson
          </button>
        </div>
      </div>


      <div className='q2'>
        <div className='q2-question'>
            <p>Question 2:  <br /> What flavor of vape did you give me at Lu’au?</p>
        </div>
        <div className='buttons' id ='q2'>
            <button className={clickedButtonGroup2 === 'A' ? 'red' : ''} 
            onClick={() => handleButtonClickGroup2('A')}
            > 
            A) Sunshine Icy</button>
            <button 
            className={clickedButtonGroup2 === 'B' ? 'green' : ''} 
            onClick={() => handleButtonClickGroup2('B')}
          >
            B) Aloe Grape
          </button>
          <button 
            className={clickedButtonGroup2 === 'C' ? 'red' : ''} 
            onClick={() => handleButtonClickGroup2('C')}
          >
            C) Juicy Peach Icy
          </button>
          <button 
            className={clickedButtonGroup2 === 'D' ? 'red' : ''} 
            onClick={() => handleButtonClickGroup2('D')}
          >
            D) Sour Watermelon
          </button>
        </div>
      </div>


      <div className='q3'>
        <div className='q3-question'>
            <p> Question 3: <br/> What was the first meal we ate together?</p>
        </div>
        <div className='buttons' id ='q3'>
            <div className ='left-buttons'>
              <button className={clickedButtonGroup3 === 'A' ? 'green' : ''} 
                onClick={() => handleButtonClickGroup3('A')}
                > 
                A) La Victoria</button>
              <button 
                className={clickedButtonGroup3 === 'B' ? 'red' : ''} 
                onClick={() => handleButtonClickGroup3('B')}
              >
                B) Ike's
              </button>
            </div>
            <div className ='right-buttons'>
                <button 
                className={clickedButtonGroup3 === 'C' ? 'red' : ''} 
                onClick={() => handleButtonClickGroup3('C')}
              >
                C) Sweetgreens
              </button>
              <button 
                className={clickedButtonGroup3 === 'D' ? 'red' : ''} 
                onClick={() => handleButtonClickGroup3('D')}
              >
                D) Daebok
              </button>
            </div>
        </div>
      </div>

      <div className='q4'>
        <div className='q4-question'>
            <p>Question 4:  Who said I love you first?</p>
        </div>
        <div className='horizontal'>
        <div className='q4-images'>
            <img src={nickMeagDob}></img>
        </div>
        <div className='buttons' id ='q4'>
            <button className={clickedButtonGroup4 === 'A' ? 'red' : ''} 
            onClick={() => handleButtonClickGroup4('A')}
            > 
            A) Nick</button>
            <button 
            className={clickedButtonGroup4 === 'B' ? 'green' : ''} 
            onClick={() => handleButtonClickGroup4('B')}
          >
            B) Meagan
          </button>
          <button 
            className={clickedButtonGroup4 === 'C' ? 'red' : ''} 
            onClick={() => handleButtonClickGroup4('C')}
          >
            C) Dobby
          </button>
        </div>
        </div>
      </div>


      <div className='q5'>
        <p>Question 5: When is our anniversary?</p>
        <div className='q5-images'>
            <img src={calendar}></img>
        </div>
        <div className='buttons' id ='q5'>
            <button className={clickedButtonGroup5 === 'A' ? 'red' : ''} 
            onClick={() => handleButtonClickGroup5('A')}
            > 
            A) July 1</button>
            <button 
            className={clickedButtonGroup5 === 'B' ? 'red' : ''} 
            onClick={() => handleButtonClickGroup5('B')}
          >
            B) July 22
          </button>
          <button 
            className={clickedButtonGroup5 === 'C' ? 'red' : ''} 
            onClick={() => handleButtonClickGroup5('C')}
          >
            C) July 31
          </button>
          <button 
            className={clickedButtonGroup5 === 'D' ? 'green' : ''} 
            onClick={() => handleButtonClickGroup5('D')}
          >
            D) July 5
          </button>
        </div>
      </div>


      <div className='q6'>
        <div className='buttons' id ='q6'>
            <p>Question 6: Who won this mini golf game?</p>
            <button className={clickedButtonGroup6 === 'A' ? 'green' : ''} 
            onClick={() => handleButtonClickGroup6('A')}
            > 
            A) Nick</button>
            <button 
            className={clickedButtonGroup6 === 'B' ? 'red' : ''} 
            onClick={() => handleButtonClickGroup6('B')}
          >
            B) Meagan
          </button>
        </div>
        <div className='q6-images'>
            <img src={golfing}></img>
        </div>
      </div>

      <div className='q7'>
        <p>Question 7: Where were these pictures taken?</p>
        <div className='q7-images'>
             <img src={tt1}></img>
            <img src={tt2}></img>
            <img src={tt3}></img>
            <img src={tt4}></img>
        </div>
        <div className='buttons' id ='q7'>
          <div className='left-buttons'>
            <button className={clickedButtonGroup7 === 'A' ? 'red' : ''} 
              onClick={() => handleButtonClickGroup7('A')}
              > 
              A) Theta Tau Formal</button>
              <button 
              className={clickedButtonGroup7 === 'B' ? 'red' : ''} 
              onClick={() => handleButtonClickGroup7('B')}
            >
              B) Rho Psi Formal
            </button>
          </div>
           <div className='right-buttons'>
            <button 
              className={clickedButtonGroup7 === 'C' ? 'green' : ''} 
              onClick={() => handleButtonClickGroup7('C')}
            >
              C) Theta Tau Semi Formal
            </button>
            <button 
              className={clickedButtonGroup7 === 'D' ? 'red' : ''} 
              onClick={() => handleButtonClickGroup7('D')}
            >
              D) DEM Formal
            </button>
           </div>
        </div>
      </div>

      <div className='q8'>
      <div className='q8-images'>
            <div className='topImage'>
            <img src={beatrice}></img>
            <img src={justina}></img>
            </div>
            <div className='bottomImage'>
            <img src={reiko}></img>
            <img src={jill}></img>
            </div>
        </div>
        <div className='buttons' id ='q8'>
            <p>Question 8: Which friend is the reason that we’re together?</p>
            <button className={clickedButtonGroup8 === 'A' ? 'red' : ''} 
            onClick={() => handleButtonClickGroup8('A')}
            > 
            A) Beatrice Hackman</button>
            <button 
            className={clickedButtonGroup8 === 'B' ? 'red' : ''} 
            onClick={() => handleButtonClickGroup8('B')}
          >
            B) Justina Quock
          </button>
          <button className={clickedButtonGroup8 === 'C' ? 'green' : ''} 
            onClick={() => handleButtonClickGroup8('C')}
            > 
            C) Reiko Shiraishi</button>
            <button 
            className={clickedButtonGroup8 === 'D' ? 'red' : ''} 
            onClick={() => handleButtonClickGroup8('D')}
          >
            D) Jill Morimoto
          </button>
        </div>
      </div>


      <div className='q9q10'>
        <div className='q9'>
            <p>Question 9: <br/> What was the first thing I noticed about you?</p>
            <div className='buttons' id ='q9'>
            <button className={clickedButtonGroup9 === 'A' ? 'red' : ''} 
            onClick={() => handleButtonClickGroup9('A')}
            > 
            A) Your Laugh</button>
            <button 
            className={clickedButtonGroup9 === 'B' ? 'green' : ''} 
            onClick={() => handleButtonClickGroup9('B')}
          >
            B) Your Smile
          </button>
          <button 
            className={clickedButtonGroup9 === 'C' ? 'red' : ''} 
            onClick={() => handleButtonClickGroup9('C')}
          >
            C) Your Hair
          </button>
          <button 
            className={clickedButtonGroup9 === 'D' ? 'red' : ''} 
            onClick={() => handleButtonClickGroup9('D')}
          >
            D) Your Height
          </button>
        </div>
        </div>
        <div className='q10'>
            <p>Question 10: <br/>What do I love about you?</p>
            <div className='buttons' id ='q10'>
            <button className={clickedButtonGroup10 === 'A' ? 'red' : ''} 
            onClick={() => handleButtonClickGroup10('A')}
            > 
            A) Your Kindess</button>
            <button 
            className={clickedButtonGroup10 === 'B' ? 'red' : ''} 
            onClick={() => handleButtonClickGroup10('B')}
          >
            B) Your Compassion
          </button>
          <button 
            className={clickedButtonGroup10 === 'C' ? 'red' : ''} 
            onClick={() => handleButtonClickGroup10('C')}
          >
            C) Your Intelligence
          </button>
          <button 
            className={clickedButtonGroup10 === 'D' ? 'red' : ''} 
            onClick={() => handleButtonClickGroup10('D')}
          >
            D) Your Jokes
            </button>
            <button 
            className={clickedButtonGroup10 === 'E' ? 'red' : ''} 
            onClick={() => handleButtonClickGroup10('E')}
          >
            E) Your good looks
          </button>
          <button 
            className={clickedButtonGroup10 === 'F' ? 'green' : ''} 
            onClick={() => handleButtonClickGroup10('F')}
          >
            F) All of the above and more
            </button>
          </div>
        </div>
      </div>

      <div className='q1' id='q11'>
        <p>Final Question: What did I get you for our anniversary?</p>
        <div className='q1-images'>
            <img src={car}></img>
            <img src={puppy}></img>
            <img src={gift}></img>
            <img src={vape}></img>
        </div>
        <div className='buttons' id ='q1'>
            <button className={clickedButtonGroup11 === 'A' ? 'red' : ''} 
            onClick={() => handleButtonClickGroup11('A')}
            > 
            A) A Car</button>
            <button 
            className={clickedButtonGroup11 === 'B' ? 'red' : ''} 
            onClick={() => handleButtonClickGroup11('B')}
          >
            B) A Puppy
          </button>
          <button 
            className={clickedButtonGroup11 === 'C' ? 'green' : ''} 
            onClick={() => handleButtonClickGroup11('C')}
          >
            C) A Surprise
          </button>
          <button 
            className={clickedButtonGroup11 === 'D' ? 'red' : ''} 
            onClick={() => handleButtonClickGroup11('D')}
          >
            D) 1,000 Vapes
          </button>
        </div>
      </div>
      </div>

      
    
  );
}

export default Quiz;
