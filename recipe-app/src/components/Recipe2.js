import React from 'react'
import { withRouter } from 'react-router-dom'

function Recipe2(props) {

    let navigateToSteps2=()=>{
        // console.log(props);
        props.history.push('/steps2')
       }
    return (
        <div>
            <h1>Recipe2</h1>
            <h4 style={{cursor:'pointer'}} onClick={navigateToSteps2}>Steps In Making</h4>
        </div>
    )
}

export default withRouter(Recipe2) 
