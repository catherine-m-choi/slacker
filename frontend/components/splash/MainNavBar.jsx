import React from "react"
import { Link } from "react-router-dom"

function MainNavBar(props) {
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
    <div className="MainNavBar">
      {display}
    </div>
  )
}

export default MainNavBar