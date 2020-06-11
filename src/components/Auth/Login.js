import React, { useState } from 'react';
// import AuthForm from './AuthForm';
import APIURL from '../../helpers/enviornment';
import { useHistory } from 'react-router-dom'

const styles = {};

const Login = (props) => {
    const history = useHistory()
    const [userName, setuserName] = useState("")
    const [password, setPassword] = useState("")
    

const handleSubmit = (e) => {
    e.preventDefault();
    const url = `${APIURL}/user/signin`;

    fetch (url, {
        method:'POST',
        body: JSON.stringify({
            userName: userName ,
            password: password,
        }),
        headers: {
            'content-Type' : 'application/json'
        },
    })
    .then(data => data.json())
    .then(userData => {
        if(userData.sessionToken) {
            props.login(userData.sessionToken);
            history.push('/posts')
        } else {
            console.log('user does not exist');
        }
    })
    .catch(err => console.warn(err));
};

    return (
        <div>
             <form onSubmit={(e) => handleSubmit(e)}>
              <label htmlFor="userName">User Name</label>
                <input 
                type="text"
                name="userName"
                onChange={(e) => setuserName(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input 
                type="password"
                name="password"
                onChange={(e) => setPassword (e.target.value)}
                />
                <input type="submit" />
                </form>
        </div>
    )
}

export default Login;