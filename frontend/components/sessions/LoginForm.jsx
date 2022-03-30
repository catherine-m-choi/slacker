import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';

function LoginForm(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState(props.errors)
  
  useEffect(()=> {
    const unlisten = props.history.listen(props.clearSessionErrors);
    return unlisten;
  }, [])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = Object.assign({}, {email, password});
    props.login(user)
      .then( () => props.history.push('/welcome') , () => {
        setErrors(props.errors);
      }
    )
  }

  const handleInput = (type) =>{
    switch (type) {
      case "email":
        return (e) => setEmail(e.target.value)
      case "password":
        return (e) => setPassword(e.target.value)
      default:
        break;
    }
  }

  const demoSubmit = () => {
    const demoUser = {
      email: 'fake_cat23@gmail.com',
      password: "password"
    }

    props.login(demoUser).then( () => props.history.push('/welcome') , () => {
      setErrors(props.errors);
    })
  }

  return (
    <div className="SessionForm">
      <div>
        <header className="SessionForm__header">
          <div className="SessionForm__left-col"></div>
          <div className="SessionForm__center-col"><Link to="/"><img src={window.sessionForm__slackLogo} /></Link></div>
          <div className="SessionForm__right-col">
            <div>
              <p>New to Slack?</p>
              <Link to="/signup" className="link-bold">Create an account</Link>
            </div>
          </div>
        </header>

        <div className="SessionForm__content-container">
          <div className="SessionForm__content">
            <h1>Sign in to Slack</h1>
            <div className="SessionForm__subheading">We suggest using the <strong>email address you use at work.</strong></div>

            <div className="SessionForm__forms">
              <div className="SessionForm__oauth">
                <a href="/users/auth/google_oauth2" data-method="POST" rel="nofollow">
                  <button className="btn SessionForm__oauth-btn"><img src={window.sessionForm__googleLogo} />Sign in with Google</button>
                </a>
              </div>

              <div className="SessionForm__login-separator">
                <hr></hr>
                <span className="SessionForm__login-separator-content">OR</span>
                <hr></hr>
              </div>
              
              <form className="SessionForm__form" onSubmit={handleSubmit}>
                <label>Email:</label>
                  <input 
                    type="text" 
                    value={email} 
                    onChange={handleInput('email')} 
                    className="SessionForm__form-password"
                    placeholder="name@work-email.com"
                  />

                <label>Password:</label>

                <input 
                  type="password" 
                  value={password} 
                  onChange={handleInput('password')} 
                />

                <div className={`SessionForm__signin-btn-errors ${(props.errors.length > 0 ) ? "has-errors" : ""}`}>
                  <input className="btn" type="submit" value="Sign In with Email" />
                  <div className="SessionForm__errors">
                    {props.errors.length > 0 && props.errors.map((error, idx) => (
                      <li key={idx} ><i className="SessionForm__warning">&#x26A0;</i> {error}</li>
                      ))}
                  </div>
                </div>

              <div className="SessionForm__demo">
                <p>&#10024;</p>
                <p><a className="link-bold" onClick={demoSubmit}>Log in as a demo user</a> for a hassle free tour of what Slacker has to offer.</p>
              </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm;