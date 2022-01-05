// react hooks 
// it should be written on top


function MyApp(){
     // format of setstate in functional component
    //const[state, setState]= useState(initials)
    const [Name, setName]=React.useState('ajay')
    const [Age, setAge]= React.useState(22)
    
    let updateName=()=>{
        setName("vijay")
        setAge(18)
    }

    return <div>
        <h1>welcome,{Name} Age:{Age}</h1>
        <button onClick={updateName}>Update Name</button>
    </div>
}
ReactDOM.render(<MyApp/>,document.getElementById('container'))