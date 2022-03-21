import React from "react";
import { Link } from "react-router-dom";

function SplashBottomCTA(props) {
  return (
    <div className="SplashBottomCTA">
      <h3>Welcome to your new digital HQ</h3>
      <div className="SplashBottomCTA__buttons">
      <Link to="/signup"><button className="btn purple-solid" >SIGN UP</button></Link>
      <Link to="/need-to-fix"><button className="btn purple-transparent" >TALK TO SALES</button></Link>
      </div>
    </div>
  )
}

export default SplashBottomCTA;