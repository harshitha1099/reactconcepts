import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ComponentA from './components/ComponentA';
import { UserProvider } from './context/Context';
import ComponentD from './components/ComponentD';
import {LoginProvider} from './context/loginContext'

function App() {
  const [uname, setuname] = useState('google');

  // get data from componentD
  
  let getDataFromD=(data)=>{
    console.log(Data);

  }
//to logout user we need to make login false
  const logoutUser = () => {
    setloginData({
      ...loginData,
      login: false
    })
  }

  const [loginData, setloginData] = useState({
    login: true,
    userName: 'Harshitha',
    logoutUser:logoutUser
  });
//to update the username in loginData
  let updateUser = () => {
    setloginData({
      ...loginData,
      userName: 'Sunny',
    })
  }


  return (
    <div className="App">

      {/* wraping UserProvider to use data in ComponentA and all its child componnts */}
      <UserProvider value={uname}>
        < ComponentA uname={uname} />
        <button onClick={() => { setuname('facebook') }}>update uname</button>
        < button onClick={updateUser}>update user</button>
      </UserProvider>

      {/* login data to componentD by login context */}

      <LoginProvider value={loginData}>
        <ComponentD />
      </LoginProvider>
    </div>
  );
}

export default App;
