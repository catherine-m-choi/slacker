import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';

function LoginForm(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState(props.errors)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = Object.assign({}, {email, password});
    // Prob need to change redirect to App home page
    props.login(user).then( () => props.history.push('/') , () => {
      setErrors(props.errors);
    })
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
  
  useEffect(()=> {
    const unlisten = props.history.listen(props.clearSessionErrors);
    return unlisten;
  }, [])

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

              <input className="btn" type="submit" value="Sign In with Email" />

              {props.errors.length > 0 && props.errors.map((error, idx) => (
                <li key={idx} className="SessionForm__errors">{error}</li>
                ))}

            <div className="SessionForm__demo">
              <p>&#10024;</p>
              <p><Link to="/demo" className="link-bold">Log in as a demo user</Link> for a hassle free experience.</p>
            </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm;