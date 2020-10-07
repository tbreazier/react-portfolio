import React from 'react';

function Footer () {
  return (
    
    <div className='footer'>
        <a href='https://github.com/tbreazier' target='blank'>
          <img src={require('../../assets/imgs/github.png')} className='footer-icon' alt='logo'></img>
        </a>
        <a href='https://www.linkedin.com/in/tombreazier/' target='blank'>
          <img src={require('../../assets/imgs/linkedin.png')} className='footer-icon' alt='logo'></img>
        </a>
        <a href='https://mediocresecurity.wordpress.com/' target='blank'>
          <img src={require('../../assets/imgs/wordpress.png')} className='footer-icon' alt='logo'></img>
        </a>
        <h5>
            Created by T.O.M.S&#8482;
            <br>
            </br>
            2020
        </h5>
    </div>
  
  );
}

export default Footer;