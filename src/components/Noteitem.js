import React, { useContext ,useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AddingNote from './AddingNote';
import noteContext from '../context/notes/noteContext';



const Noteitem =(props)=> {
    const{notes ,updateNote}=props;
    const context=useContext(noteContext);
    const{deleteNote }= context;
  return (
  <div className="col-md-3">
    <div class="row my-3">
             <Card   border="warning"style={{ width: '18rem' }}>

   
      <Card.Body   >
        <Card.Title>{notes.title} </Card.Title>
        <Card.Text>{notes.description}
          
        </Card.Text>
        <div >
          {/* adding functionality  to delete notes */}
        <i className="fa-solid fa-trash-can" onClick={()=>{deleteNote(notes._id)}} style={{color: '#511f4d', marginRight:'20px'}}></i>
        <i className="fa-solid fa-marker" onClick={()=>{updateNote(notes)}} style={{color: '#1f3d2c'}}></i>


        
        </div>
      </Card.Body>
    </Card>
    </div>
       </div>
  )
}

export default Noteitem;