import React from 'react'
import { withRouter } from 'react-router-dom'

function SignUp(props) {

    let navigateToLogin=()=>{
        // console.log(props);
        props.history.push('/login')
       }
    return (
        <div>
            <h1>i am Signup</h1>
            <h4 style={{cursor:'pointer'}} onClick={navigateToLogin}>Already have an account? Login here !</h4>
        </div>
    )
}

export default withRouter(SignUp) 
