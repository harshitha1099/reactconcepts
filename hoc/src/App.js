import logo from './logo.svg';
import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

function App() {
  return (
    <div className="App">

     <ClickCounter name="good counter" />

     <HoverCounter />

    </div>
  );
}

export default App;