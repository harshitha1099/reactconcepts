function App(props){
    let bikes=['ktm','ns','bullet','discover']
    return <div>
        <h1>Welcome, {props.Uname}</h1>
        <List Bikes={bikes}/>
    </div>
}

function List(props){
    return <div>
        {props.Bikes.map((val,index)=>{
            return <li key={val+index}>{val}</li>
        })}
    </div>
}

ReactDOM.render(<App Uname="Virat"/>,document.getElementById('container'))