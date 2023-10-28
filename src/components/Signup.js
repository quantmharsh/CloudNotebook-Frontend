import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState , } from 'react';
import {useNavigate} from 'react-router-dom'

const Signup = (props) => {
    const[credentials ,setCredentials] =useState({ name:"",email:"" ,password:"" ,cpassword:""});
    let navigate=useNavigate();
  
    const handleSubmit=async(e)=>{
        
        e.preventDefault();
        const{name ,email ,password} =credentials;

        const response= await fetch(`http://localhost:3000/api/auth/createuser` ,{
            method :'POST',
           
            headers:{
              'Content-Type':'application/json',
            
            },   body: JSON.stringify({name ,email  ,password})  
          
            
          });
       
          const json= await response.json();
console.log(json);
if(json.success) {
    //save the auth token and redirect
    localStorage.setItem('token ',json.authtoken)   
    //using useHistory hook for redirecting
    navigate("/Home")
    props.showAlert("Account created succesfully" ,"success");
} else {
    props.showAlert("Invalid Credentials" ,"danger");
    // Handle the error without sending another response to the client
}


    }
    const onChange=(e)=>{
        setCredentials({...credentials ,[e.target.name]:e.target.value})

    };
  return (
    <div  className="container mt-2">
    <h2> SignUp to Continue  CloudNotebook</h2>
        <Form onSubmit={handleSubmit} >
        <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name"id="name" name="name" onChange={onChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"id="email" name="email" onChange={onChange} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"id="password" name="password" onChange={onChange}  />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> confirm Password</Form.Label>
        <Form.Control type="password" placeholder=" Confirm Password"id="cpassword" name="cpassword" onChange={onChange}  />
      </Form.Group>
     
      <Button variant="primary" type="submit"  >
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Signup