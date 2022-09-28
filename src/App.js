import logo from './images/logo.png';
import './App.css';
import Body from './components/Body/Body';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div>
      <img className='logo' src={logo} alt="" />
      <h1>Alpha Fitness Club</h1>
      <Body></Body>
      <Sidebar></Sidebar>
    </div>
  );
}

export default App;
