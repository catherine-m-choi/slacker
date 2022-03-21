import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function MainNavBar(props) {
  const [isSticky, setIsSticky] = useState(false);
  const [inView, setInView] = useState(false);
  const [scrollDown, setScrollDown] = useState(true);
  const [currentScrollY, setCurrentScrollY] = useState(window.scrollY)
    
  // setting navbar to be sticky when scrolling more than 400px
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    
    return function() {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [currentScrollY])

  const handleScroll = () => {
    setCurrentScrollY(window.scrollY)

    // setting sticky boolean to add to class
    if (scrollY > 300) { 
      setIsSticky(true)
    } else {
      setIsSticky(false);
    }

    // setting sticky boolean to add to class
    if (scrollY > 400) { 
      setInView(true)
    } else {
      setInView(false);
    }

    if (!scrollDown && window.scrollY > currentScrollY) {
      setScrollDown(true)
    } else if (scrollDown && window.scrollY <= currentScrollY) {
      setScrollDown(false)
    }
  }

  const display = (props.currentUser) ? (
    <div className="MainNavBar__right-menu">
      <button className="btn purple-solid" onClick={props.logout}>Log out</button>
    </div>
  ) : (
    <div className="MainNavBar__right-menu">
      <Link to="/signup"><button className="btn purple-transparent" >SIGN UP</button></Link>
      <Link to="/login"><button className="btn purple-solid" >LOG IN</button></Link>
    </div>
  )

  return (
    <nav className={`MainNavBar ${(isSticky) ? "sticky-nav" : ""} ${(inView) ? "in-view" : "out-view"} ${(scrollDown) ? "scroll-down" : "scroll-up"}`}>
      <div className="MainNavBar__content-container">
        {/* Black version of logo: */}
        {/* <div className="MainNavBar__logo"><Link to="/"><img src={window.sessionForm__slackLogo} /></Link></div> */}
        <div className="MainNavBar__logo"><Link to="/"><img src={(isSticky) ? window.sessionForm__slackLogoBlack : window.sessionForm__slackLogoWhite} /></Link></div>

        <div className="MainNavBar__content">
          <ul className="MainNavBar__left-menu">
            <li>Placeholder1</li>
            <li>Placeholder2</li>
            <li>Placeholder3</li>
            <li>Placeholder4</li>
          </ul>

          {display}
        </div>
      </div>
    </nav>
  )
}

export default MainNavBar