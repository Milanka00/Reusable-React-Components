import React  from 'react';
import './FlipCard.css'

const FlipCard = () => {
    return ( 
  <div className='cont'>
    <div className='flip-card'>
      <div className='flip-card-front'>
        <div className='inner'>
        <img src={require('./logo1.png')} class="icon" alt='logo1'/>
          <h3>Project1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            corrupti itaque dolore!
          </p>
        </div>
      </div>
      <div className='flip-card-back'>
        <div className='inner'>
          <h3>project1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            voluptatum eius quam debitis, sit amet sunt neque ipsum?
          </p>
        </div>
      </div>
    </div> 
     <div class="flip-card">
      <div class="flip-card-front">
        <div class="inner">
        <img src={require('./logo2-1.png')} class="icon" alt='logo2'/>
          <h3>project2</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            corrupti itaque dolore!
          </p>
        </div>
      </div>
      <div class="flip-card-back">
        <div class="inner">
          <h3>project2</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            voluptatum eius quam debitis, sit amet sunt neque ipsum?
          </p>
        </div>
      </div>
    </div>
    <div class="flip-card">
      <div class="flip-card-front">
        <div class="inner">
        <img src={require('./logo3-1.png')} class="icon" alt='logo3'/>
          <h3>project3</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            corrupti itaque dolore!
          </p>
        </div>
      </div>
      <div class="flip-card-back">
        <div class="inner">
          <h3>project3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            voluptatum eius quam debitis, sit amet sunt neque ipsum?
          </p>
        </div>
      </div>
    </div>  
  </div>

     );
}
 
export default FlipCard;