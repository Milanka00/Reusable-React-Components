import React from 'react';
import './LikeButton.css';

 const LikeButton = () => {
    return ( 
        <div className='heart-btn'>
            <div className='content'>
                <span className='heart'></span>
                <span className='like'>Like</span>
                <span className='number'>12</span>

            </div>

        </div>
     );
 }
  
 export default LikeButton;