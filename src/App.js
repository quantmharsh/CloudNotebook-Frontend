
import './App.css';
import Navigationbar from './components/Navigationbar';
import  Home from './components/Home';
import About from './components/About';
import Notes  from './components/Notes';
import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom";
import NoteState from './context/notes/noteState';
import Noteitem from './components/Noteitem';
import { Alert } from 'react-bootstrap';
import AlertFeature from './components/AlertFeature';






function App() {
  return (
    <div className="App">
     
      <NoteState>
        
          <BrowserRouter>
          <Navigationbar/>
          <AlertFeature message="Harsh"/>
          <Notes/>
         
        
        
      <Routes>
        <Route  exact   path="/Home" element={<Home />} />
        
        <Route  exact path="/About" element={<About />} />
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
