import React,{ useContext} from 'react'
import LoginContext from '../context/loginContext'


function ComponentD() {

    // we're using hooks useContext it returns object
    let context  = useContext(LoginContext)
    console.log('context',context);

    let logout=()=>{
        //function from context object
        context.logoutUser()
    }
    let sendData=()=>{
        context.getDataFromD('i am sending data from componentD')
    }

    return (
        <div>
            {context.login ? <p> {context.userName} is logged in </p>: <p>Please Login ..!</p>}
         <button onClick={logout}>Logout</button>
        </div>
    );
}

export default ComponentD;
