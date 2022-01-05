import React from 'react'
import { withRouter } from 'react-router-dom';

function Login(props) {

   let navigateToSignup=()=>{
    // console.log(props);
    props.history.push('/signup')
   }

    return (
        <div>
            <h1>I m Login</h1>
            <h4 style={{cursor:'pointer'}} onClick={navigateToSignup}>Don't have an account? Signup here !</h4>
        </div>
    )
}

export default withRouter(Login) 
