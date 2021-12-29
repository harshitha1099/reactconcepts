class PCData extends React.Component{
    state={
        //setting initial state value to null
        text:''
    }
    render(){
        return <div>
            <h1>Parent</h1>
            {/* displaying the data from child to parent */}
            <h2>data from child: {this.state.text}</h2>
            {/* send the function to child */}
            <Child action={this.getDataFPC.bind(this)}/>
        </div>
    }

    //get function as data to child
    getDataFPC(childData){
        //setting the state
        this.setState({
            text:childData
        })
    }
}
function Child(props){
    let data="I have your Data";
    return <div>
        <h1>Child</h1>
        {/* passing action method as props and while clicking the button it will pass the
        parameter data to parent */}
        <button onClick={()=>{props.action(data)}}>Send data</button>
    </div>
}

ReactDOM.render(<PCData />,document.getElementById('container'))

