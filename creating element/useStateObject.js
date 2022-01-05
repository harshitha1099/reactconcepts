function MyApp(){
    const [person, setperson] = React.useState({
        firstName:'Rakshith',
        secondName:"M V"
    })
     console.log(person);

     let updateFirstName=()=>{
         // never update state like below while using react hooks for objects (like always use spread operator to update state in react hooks)
         // setperson({
           //  firstName:"HArshitha"
        // })
        setperson({
            ...person,
            firstName:"Harshitha",
            secondName:"S"
        })

     }
    return<div>

        <p> First Name:{person.firstName}</p>
        <p>Last Name:{person.secondName}</p>
        <button onClick={updateFirstName}>Update First Name</button>
    </div>
}
ReactDOM.render(<MyApp/>,document.getElementById('container'))