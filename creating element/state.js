class StateExmp extends React.Component{
    state={
        Fname:"Virat",

    }
    render(){
        return <div>
            <h1>Welcome, {this.state.Fname}</h1>
            <button onClick={()=>{this.change()}}>Change</button>
        </div>
    }
     change(){
        this.setState({
            Fname:"Kohli"
        },()=>{console.log(this.state.Fname)})
    }
}

ReactDOM.render(<StateExmp />,document.getElementById('container'))