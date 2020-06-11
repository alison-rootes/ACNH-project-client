//saved
import React from 'react';
import APIURL from '../../helpers/enviornment';
// import { useHistory } from 'react-router-dom'
import  { createBrowserHistory } from 'history'
import { Redirect } from 'react-router';

const history = createBrowserHistory()


class SignUp extends React.Component{
    //keep constructor at top:)
    // history = useHistory()
    constructor(props) {
        super(props);

        const txtFieldState = {
            value: "",
            valid: true,
            typeMismatch: false,
            errMsg: "" //this is where our error message gets across
        };

        this.state = {
            email:'txtFieldState, fieldName: "email", required: true, requiredTxt: "Email is required", formatErrorTxt: "Incorrect email format',
            password: '',
            userName: 'txtFieldState, fieldName: "userName", required: true, requiredTxt: "Sorry:( that username is taken"',
            firstName: '',
            lastName: '',
            complete: false
        }

       this.handleSubmit= (e) => {
            e.preventDefault();
            console.log(this.state);
    
            const url = `${APIURL}/user/signup`;
    
            fetch(url, {
                //configuration object
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'content-Type' : 'application/json',
                },
                
            })
            // .then() chaining
            .then(data => data.json())
            .then(userData => {
                console.log(userData);
                console.log(userData.sessionToken)
    //userData/sessionToken
                this.props.login(userData.sessionToken)
                // history.push('/posts')
                this.setState({complete: true})
    
            })
            .catch(err => console.warn(err));
        }
    
    }
//this.setState()- allows updates to entire stae object


// endpoint - /user/signup

     
    ErrorValidationLabel (email) {
        return(
    <div>
        <label htmlFor="email" style={{ color: "red" }}>
            Email
        </label>
        <input 
            type="text"
            name="email"
            placeholder="tomNook2020@nookphone.net"
            required
            onChange={(e) => this.setState({email: e.target.value})}
        />
    </div>
            )
    }



    render() {
        // possible logic
    ErrorValidationLabel (userName) {
        

        return (
            //return jsx
            <div>
               <form onSubmit={(e) => this.handleSubmit(e)}>
               {this.ErrorValidationLabel("")}
                {/* check for duplicate username. */}
                <form onSubmit={(e) => this.handleSubmit(e)}>
               
                    <label htmlFor="userName" style={{ color: "red" }}>
                    </label>
                    <input
                    type="text"
                    name="userName"
                    placeholder="Tom_Nook12"
                    required
                    onChange={(e) => this.setState({userName: e.target.value})}
                    />
                </form>
                

                <label htmlFor="password">Password</label>
                <input 
                type="password"
                name="password"
                onChange={(e) => this.setState({ password: e.target.value })}
                />
                <label htmlFor="firstName">First Name</label>
                <input
                type="text"
                name="firstName"
                onChange={(e) => this.setState({ firstName: e.target.value})}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                type="text"
                name="lastName"
                onChange={(e) => this.setState({ lastName: e.target.value})}
                />
                


                <input type="submit" />
               </form>

                    {this.state.complete ? <Redirect to = "/posts" /> : null}
                
               

            </div>
        )}
    
    }
}


export default SignUp;