import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';

const AuthForm = (props) => {
    //          1               2               3
    const [isLoggingIn, setIsLoggingIn] = useState('')
    // 1- variable that holds our state value
    // 2 - function to update that state value
    // 3 - useState's parameter is the initial value of the state variable

    function authenticate () {
        props.setIsAuthenticated(true);
    }


    return (
        <div>
        {
            isLoggingIn ? <p>Welcome Back! Please log in!</p> : <p>Please create an account to view our site!</p>
        }
        {
            isLoggingIn ? <Login login={props.login} /> : <SignUp login={props.login}/>
        }
        {
            isLoggingIn ? (
            <p onClick={(e) => setIsLoggingIn(!isLoggingIn)}> Need to create an account? </p>
            ) : (
            <p onClick={(e) => setIsLoggingIn(!isLoggingIn)}>Already have an accout? Log in!</p>
            )
          }
          {/* <p onClick={authenticate}>Click me to log in</p> */}
        </div>
     )
};

export default AuthForm;