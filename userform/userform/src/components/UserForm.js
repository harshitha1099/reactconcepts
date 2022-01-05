import { useState } from "react";
import './style.css';
function UseForm(props) {
    const [userData, setuserData] = useState({
        email:'',
        firstName:'',
        lastName:'',
        password:''
})
console.log(userData);

const [emailError, setemailError] = useState("")
const validateEmail=()=>{
    if(userData.email){
        let regex = /^\S+@\S+$/;
        if(regex.test(userData.email)){
            setemailError("");
            return true;
        }
        else{
            setemailError("enter valid email-Id");
        }}
        else{
            setemailError("enter email-ID");
        }
        return false; 
};

const [nameError, setnameError] = useState("")
const validateName=()=>{
    if(userData.firstName){
        let regex =/^[a-zA-Z ]{2,30}$/;
        if(regex.test(userData.firstName)){
            setnameError("");
            return true;
        }
        else{
            setnameError("enter valid name");
        }}
        else{
            setnameError("enter name");
        }
        return false; 
};

let updateUserData=(event)=>{
    // event.preventDefault();
    setuserData({
        ...userData,
        [event.target.name]:event.target.value,
    })
}


let saveData=(event)=>{
  
    validateEmail();
    validateName();
    if(validateEmail()&& validateName()){
        props.getUserData(userData)
        // event.preventDefault();
        //clearing the form
        setuserData({
            email:'',
            firstName:'',
            lastName:'',
            password:''
        });
    }
   
};



    return (
        <div className="container">
            <h2>Login Form</h2>
            
                <div className="mb-3">
                    <input
                    name="email"
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Email"
                    value={userData.email}
                    onChange={(event)=>{updateUserData(event)}}
                    />
                {emailError&&<div className="errMsg">{emailError}</div>}
                </div>
                <div className="mb-3">
                    <input
                    name="firstName"
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Firstname"
                    value={userData.firstName}
                    onChange={(event)=>{updateUserData(event)}}
                    />
                {nameError&&<div className="errMsg">{nameError}</div>}
                </div>
                <div className="mb-3">
                    <input
                    name="lastName"
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Lastname"
                    value={userData.lastName}
                    onChange={(event)=>{updateUserData(event)}}
                    />
                
                </div>
                <div className="mb-3">
                    <input
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                    value={userData.password}
                    onChange={(event)=>{updateUserData(event)}}
                    />
                
                </div>
                <button type="submit" className="btn btn-primary" onClick={saveData}>Save</button>
           
            
        </div>
    )
}

export default UseForm