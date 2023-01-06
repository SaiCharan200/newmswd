
import './App.css';
import logo from './logo.svg';
 import Home from './components2003/Home.js';
 import Login from './components2003/Login.js';
 import Registration from './components2003/Registration.js';
  import Ids from './components2003/Ids.js';
 import Calculator from './components2003/Calculator.js';
import Profile from './components2003/Profile.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (  <div>
             <div className='App-header'>
                <img src={logo} style={{width:"130px",height:"130px"}}/>
                <h1>This is my sample Web page</h1>
            </div>
            <div className='App-body'>
              <container>
              <Home/>
              <BrowserRouter>
              <Routes>
                <Route path="log"  element={<Login/>}/>
                <Route path="reg"  element={<Registration/>}/>
                <Route path="ids" element={<Ids/>}/>
                <Route path="cal" element={<Calculator/>}/>
                <Route path="pro" element={<Profile/>}/>
              </Routes>
              </BrowserRouter> 
              </container> 
              </div>
              </div>
  );
}

export default App;

/*import Cse from './components/Cse.js';
import Ece from './components/Ece.js';
import Mech from './components/Mech.js';
import Biot from './components/Biot.js';
import Home from './components/Home.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (  <div>
             <div className='App-header'>
                <img src={logo} style={{width:"130px",height:"130px"}}/>
                <h1>This is my sample Web page</h1>
            </div>
            <div className='App-body'>
              <BrowserRouter>
              <Routes>
                <Route path="/"  element={<Home/>}/>
                <Route path="cse"  element={<Cse/>}/>
                <Route path="ece"  element={<Ece/>}/>
                <Route path="me" element={<Mech/>}/>
                <Route path="bt" element={<Biot/>}/>
              </Routes>
              </BrowserRouter>  
              </div>
              </div>
  );
}

export default App;*/