
import './App.css';
import Navigationbar from './components/Navigationbar';
import  Home from './components/Home';
import About from './components/About';
import Notes  from './components/Notes';
import { Login } from './components/Login';
import Signup from './components/Signup';

import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom";
import NoteState from './context/notes/noteState';
import Noteitem from './components/Noteitem';

import Alert from './components/Alert';
import { useState } from 'react';






function App() {
  const[alert ,setAlert] =useState(null);
  const showAlert=(message ,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <div className="App">
     
      <NoteState>
    
          <BrowserRouter>
          <Navigationbar/>
          <Alert alert={alert}/>
          {/* <Notes/> */}
         
         
        
        
      <Routes>
        <Route  exact   path="/home" element={<Home showAlert={showAlert} />} />
        
        <Route  exact path="/About" element={<About />} />
        <Route  exact path="/Login" element={<Login showAlert={showAlert}/>} />
        <Route  exact path="/Signup" element={<Signup showAlert={showAlert} />} />
      </Routes>
    </BrowserRouter>
         
         <h1>This is I Notebook</h1>
         <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"
/>
</NoteState>

    </div>
    
  );
}

export default App;
