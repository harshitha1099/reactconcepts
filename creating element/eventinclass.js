class Event extends React.Component{
    render(){
        return <div>
            <h1>Welcome</h1>
            <button onClick={this.get}>Click</button>
            <button onClick={ ()=>{this.getName()}}>Name</button>
            <button onClick={()=>{this.getAge("22")}}>Age</button>
        </div>
    }
    get(){
        alert("hello")
    }
    getName(){
        alert("Boss")
    }
    getAge(age)
    {
        alert(age)
    }
}

ReactDOM.render(<Event/>,document.getElementById('container'))