import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [displayName, setDisplayName] = useState('')


    const signIn = e => {
        e.preventDefault();
        //firebase logIN stuff...
        auth.signInWithEmailAndPassword(email, password)
            .then(
                auth => {
            history.push('/')
                })
        .catch(error => alert(error.message))
        

    }
    const register = e => {
        e.preventDefault();
        //firebase Register stuff...
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth)
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
        alert("Account Created Successfully! You'll get auto login...")
    }
    // const onChangeHandler = event => {
    //     const { name, value } = event.currentTarget;
    //     if (name === "displayName") {
    //       setEmail(value);
    //     } else if (name === "email") {
    //       setDisplayName(value);
    //     }
    //   };

    return (
        <div className="login">
            <Link to='/'>
            <img  className = "login__logo"src = "https://www.acisolutions.net/wp-content/uploads/2019/09/amazon-logo-vector-png-amazon-logo-vector-512.png"/>
            </Link>    
            <div className='login__container'>
                <h1>Sign-in</h1>
                <form>
                    {/* <h5>Name</h5>
                    <input type="text" value={displayName} onChange={onChangeHandler}/> */}
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e =>setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type = 'submit' onClick={signIn}className='login__signinButton'>Sign in
                    </button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON condition of use & sale. Please see our privacy notice, our Cookies notice and our interest based ads notice.
                </p>
                <button onClick= {register} className= 'login__resgistrationButtton'>Create Account</button>

            </div>
        </div>
    )
}

export default Login
