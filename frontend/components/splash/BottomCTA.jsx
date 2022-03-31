import React from "react";
import { Link } from "react-router-dom";

function SplashBottomCTA(props) {
  return (
    <div className="SplashBottomCTA">
      <h3>Welcome to your new digital HQ</h3>
      <div className="SplashBottomCTA__buttons">
        <Link to="/signup"><button className="btn purple-solid" >SIGN UP</button></Link>
        <a href="mailto:catherinechoi561@gmail.com?subject=Slacker-Talk-to-Catherine"><button className="btn purple-transparent" >TALK TO SALES</button></a>
      </div>
    </div>
  )
}

export default SplashBottomCTA;