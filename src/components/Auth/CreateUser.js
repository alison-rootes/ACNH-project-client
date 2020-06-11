import React, { useState } from 'react';
import AuthForm from './AuthForm';
import './createUser.css';




const CreateUser = (props) => {
    return (
      <div id="createUserBody">
        <div id="authForm">
          <AuthForm login={props.login} />
        </div>
      </div>
    );
  }
  
  export default CreateUser;