// Deconstructed
import React, { Component, Fragment } from 'react';

import '../stylesheet.css';

class Footer extends Component {
  render(){
    return (
        <div className='Footer'>
          Written by <a href='http://issacto.netlify.app' style={{paddingLeft:'0.6vh',paddingRight:'0.6vh'}}>Issac To</a> and data provided by 
          <a href='https://www.kaggle.com/' style={{paddingLeft:'0.6vh',paddingRight:'0.6vh'}}>Kaggle</a>
        </div>
    )
  }
}

export default Footer;