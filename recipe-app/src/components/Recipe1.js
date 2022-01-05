import React from 'react'
import { withRouter } from 'react-router-dom';

function Recipe1(props) {

   let navigateToSteps=()=>{
    // console.log(props);
    props.history.push('/steps')
   }

    return (
        <div>
            <h1>Recipe1</h1>
        
            <h4 style={{cursor:'pointer'}} onClick={navigateToSteps}>Steps In Making</h4>
        </div>
    )
}

export default withRouter(Recipe1) 
