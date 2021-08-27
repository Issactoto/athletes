// Deconstructed
import React, { Component, Fragment } from 'react';
import {withRouter} from "react-router-dom";
import videoSource from "../Data/tokyo.mp4";


class LandingScreen extends Component {

  constructor(props){
    super(props);
    console.log(props)
  }

  render(){
    
    return(
        <div className='content'>
          <div className='sub-content' >
            <h1>Athletes in Tokyo 👹</h1>
            <p>Learn the athletes who competed in Tokyo Olympics 2021 </p>
            <button
              className="btn btn-outline-dark box"
              style={{color:'antiquewhite'}}
              onClick={()=>this.props.history.push({pathname:'/search'})}>
              Let's go!
          </button>
          
            {/* <img
              className="view-image"
              src="https://www.jing.fm/clipimg/detail/139-1394959_panda-cartoon-png-cute-cartoon-panda-bear.png"
              alt="profile" /> */}
          </div>
        </div>
    
    );
  }
}

export default withRouter(LandingScreen);