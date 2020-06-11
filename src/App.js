import React, {useState} from 'react';
import PostScreen from './components/posts/postScreen';
import CreateUser from './components/Auth/CreateUser';
import TitleScreen from './components/titleScreen';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const reduceFormValues = formElements => {
  const arrElements = Array.prototype.slice.call(formElements); 
  const formValues = arrElements
  .filter(elem => elem.name.length > 0)
  .map(x => {
      const { typeMismatch } = x.validity;
      const { name, type, value } = x;

      return {
        name,
        type,
        typeMismatch, //we use typeMismatch when format is incorrect(e.g. incorrect email)
        value,
        valid: x.checkValidity()
    };
})
.reduce((acc, currVal) => { //then we finally use reduce, ready to put it in our state
    const { value, valid, typeMismatch } = currVal;
    const {
        fieldName,
        requiredTxt,
        formatErrorTxt
    } = this.state[currVal.name]; //get the rest of properties inside the state object
//we'll need to map these properties back to state so we use reducer...
    acc[currVal.name] = {
        value,
        valid,
        typeMismatch,
        fieldName,
        requiredTxt,
        formatErrorTxt
    };
return acc;
}, {});
return formValues;
}
const checkAllFieldsValid = (formValues) => {
return !Object.keys(formValues)
.map(x => formValues[x])
.some(field => !field.valid);
};
const onSubmit = e => {
e.preventDefault();
const form = e.target;const formValues = this.reduceFormValues(form.elements);
const allFieldsValid = this.checkAllFieldsValid(formValues);

//note: put ajax calls here to persist the form inputs in the database.
//END
this.setState({ ...formValues, allFieldsValid }); //we set the state based on the extracted values from Constraint Validation API
};
//END
// this.setState({ ...formValues, allFieldsValid }); //we set the state based on the extracted values from Constraint Validation API


const Example = (props) => {
  const [token, setToken] = useState("")
  const login = (sessionToken) => {
    setToken(sessionToken)
  }

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/posts">
      <PostScreen token={token} />
          </Route>
      
      <Route path="/Auth">
          <CreateUser login={login} />
      </Route>
      <Route path="/">
        <TitleScreen />
      </Route>
      </Switch>
      </Router>
    </div>
  );
}


export default Example;
