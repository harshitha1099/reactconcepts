import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import UseEffectWithArray from './components/UseEffectWithArray';
import { useState } from 'react';

function App() {

  const [isRender, setisRender] = useState(true)
  return (
    <div className="App">
      <button onClick={()=>setisRender(false)}>Remove component</button>

     {isRender && <MyComponent/>} 
      {/* <UseEffectWithArray /> */}
    </div>
  );
}

export default App;
