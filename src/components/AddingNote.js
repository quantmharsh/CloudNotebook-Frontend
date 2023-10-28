
import React, { useContext ,useState } from 'react'
import Button from 'react-bootstrap/Button';
import noteContext  from '../context/notes/noteContext';
import Form from 'react-bootstrap/Form';


function AddingNote(props) {
    const context=useContext(noteContext)
    const {addNote}=context;
       
    const [note, setNote] = useState({title:"" ,description:"",tag:""})
    const handleClick=(e)=>{
        e.preventDefault();
        addNote(note.title ,note.description ,note.tag);
        setNote({title:"",description:"",tag:""});
        props.showAlert("Notes Added Succesfully","success");

    }
    const onChange=(e)=>{
        setNote({...note ,[e.target.name]:e.target.value})

    };
  return ( 
    
    <div>
        <div  className='container my-3'> 
      <h2>Add Notes</h2>
      <Form className='container my-3'>
      <Form.Group className="mb-3" >
        <Form.Label>Title</Form.Label>
        <Form.Control type="text"  placeholder="Enter Title" id="title" name="title" value={note.title} onChange={onChange} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Description..."id="description"  name="description" value={note.description} onChange={onChange} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>tag</Form.Label>
        <Form.Control type="text" placeholder="tag..."id="tag"  name="tag" value={note.tag} onChange={onChange} />
      </Form.Group>
     
      <Button variant="primary" type="submit" onClick={handleClick}>
        Add Note
      </Button>
    </Form>
      <h2> Your Notes</h2>

     
      </div>
    </div>
  )
}

export default AddingNote