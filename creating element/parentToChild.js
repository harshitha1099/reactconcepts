function PC(props){
    return <div>
        <h1>Welcome, {props.name}</h1>
    <C1 Uname={props.name} age="30"/>
    </div>
    
}
state={
    fnmae:"Rohit",
}
function C1(props){
    return <div>
        <h1>Hello,{this.state.fnmae} {props.Uname}</h1>
        <h2>Age: {props.age}</h2>
    </div>
}

ReactDOM.render(<PC name="Kohli"/>,document.getElementById('container'))