class MyApp extends React.Component{
    state={
        adminName:"Virat",
        userName:"Kohli",
        isAdmin:true
    }
    render(){
        let {adminName,userName,isAdmin}=this.state;
        let dataRender=null
        if(isAdmin){
            dataRender=<div>
                <h1>Admin Name:{adminName}</h1>
                <h2>Home</h2>
                <h3>Login</h3>
         </div>
        }
        else{
            dataRender=<div>
                <h1>UserName : {userName}</h1>
                <h2>Login</h2>
            </div>
        }
        return <div>
            {dataRender}
            <button onClick={()=>{this.change()}}>{isAdmin ? "change to user" : " change to admin"}</button>
       
        </div>
    }
    change(){
        this.setState(
            {
                isAdmin:!this.state.isAdmin
            }
        )
    }
}

ReactDOM.render(<MyApp />,document.getElementById('container'))