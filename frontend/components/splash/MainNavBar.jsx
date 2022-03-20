import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function MainNavBar(props) {
  const [isSticky, setIsSticky] = useState(false);
  const [scrollY, setScrollY] = useState(window.scrollY)
    
  // setting navbar to be sticky when scrolling more than 400px
  useEffect(() => {
    function watchHeight() {
      setScrollY(window.scrollY)
      if (isSticky && scrollY > 400) setIsSticky(true);
      if (!isSticky && scrollY < 400) setIsSticky(false);
    }
    
    window.addEventListener("scroll", watchHeight)
    
    return function() {
      window.removeEventListener("scroll", watchHeight)
    }
  }, [])


  const display = (props.currentUser) ? (
    <div className="MainNavBar__logged-in-content">
      <button className="btn" onClick={props.logout}>Log out</button>
    </div>
  ) : (
    <div className="MainNavBar__logged-out-content">
      <Link className="btn" to="/signup">Sign up</Link>
      <Link className="btn" to="/login">Log in</Link>
    </div>
  )

  return (
    <nav className="MainNavBar">
      <div className="MainNavBar__content-container">
        <div className="MainNavBar__logo"><Link to="/"><img src={window.sessionForm__slackLogo} /></Link></div>

        <div className="MainNavBar__content">
          <ul className="MainNavBar__left-menu">
            <li>Placeholder1</li>
            <li>Placeholder2</li>
            <li>Placeholder3</li>
            <li>Placeholder4</li>
          </ul>

          <div className="MainNavBar__right-menu">
            {display}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default MainNavBar