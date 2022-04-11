
import './App.css';
import { Navbar } from './components/Navbar' 
import {Routes ,Route} from "react-router-dom"
import {Home} from "./components/Home"
import {Login} from "./components/Login"
import {Register} from "./components/Register"
import {Employees} from "./components/Employees"

function App() {
  return (
    <div className="App">
     < Navbar/>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/employee" element={<Employees/>}/>

      </Routes>
        
    </div>
  );
}

export default App;
