function MyApp() {

    const [user, setuser] = React.useState({
        userName: '',
        password: ''
    })

    let updateUserName = (event) => {
        //console.log(event.target.value); // to get see the output in the console window
        setuser({
            ...user,
            userName: event.target.value
        })
    }

    let updatepassword = (event) => {
        // console.log(event.target.value); // to get see the output in the console window
        setuser({
            ...user,
            password: event.target.value
        })
    }
    // this login event is used to clear username and password when we  click on login button 
    let login = (event) => {
        event.preventDefault();
        console.log(user);
        setuser({
            userName: '',
            password: ''

        })

    }

    return <form>
        UserName: <input type="text" value={user.userName} onChange={(event) => { updateUserName(event) }} />
        <br />
        <br />
        Password: <input type="password" value={user.password} onChange={(event) => { updatepassword(event) }} />
        <br />
        <br />
        <button onClick={login}>Login</button>
    </form>
}

ReactDOM.render(<MyApp />, document.getElementById('container'))