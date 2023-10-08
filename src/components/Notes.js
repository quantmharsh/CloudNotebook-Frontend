import React , { useContext,useEffect}from 'react'

import Noteitem from './Noteitem'; 
import noteContext  from '../context/notes/noteContext';

import AddingNote from './AddingNote';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';




function Notes() {
  
  const context=useContext(noteContext)
    const {notes  ,getNote ,editNote} =context;
    useEffect(() => {
      getNote();
    
    
    }, [])
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
   
   
   const updateNote=(currentnote)=>{
    setShow(true);
    setNote({ id: currentnote._id ,etitle:currentnote.title ,edescription:currentnote.description ,etag:currentnote.tag});

   }
   const [note, setNote] = useState({ id:"" ,etitle:"" ,edescription:"",etag:"default"})
    const handleClick=(e)=>{
       editNote(note.id ,note.etitle ,note.edescription ,note.etag);
       setShow(false);
       setNote({ etitle:"" ,edescription:"" ,etag:""}); 
       

    }
    const onChange=(e)=>{
        setNote({...note ,[e.target.name]:e.target.value})

    };
 
  return (
    <>
     
     <AddingNote/>
     {/* //Modal for updating notes */}
     

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Notes</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!
        <Form className='container my-3'>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text"  placeholder="Enter Title" id="etitle" name="etitle" value={note.etitle} onChange={onChange} />
        <Form.Text className="text-muted">
       
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Description..."id="edescription"  name="edescription"value={note.edescription} onChange={onChange} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>tag</Form.Label>
        <Form.Control type="text" placeholder="tag..."id="etag"  name="etag"value={note.etag} onChange={onChange} />
      </Form.Group>
     
    
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    <div className= "row my-3"> 
         { notes.map((notes)=>{
        return  <Noteitem notes={notes} key={notes.id} updateNote ={updateNote}/>
         
      })}
     
    </div>
    </>
  )
}

export default Notes