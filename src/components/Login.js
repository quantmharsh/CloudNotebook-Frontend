import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState , } from 'react';
import {useNavigate} from 'react-router-dom'



export const Login = (props) => {
    const[credentials ,setCredentials] =useState({email:"" ,password:""});
    let navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();

        const response= await fetch(`http://localhost:3000/api/auth/login` ,{
            method :'POST',
           
            headers:{
              'Content-Type':'application/json',
            
            },   body: JSON.stringify({email: credentials.email ,password:credentials.password})  
          
            
          });
       
          const json= await response.json();
          console.log(json);
          if(json.success)
          {
            //save the auth token and redirect
            localStorage.setItem('token',json.authToken)
            console.log("This is authToken " ,json.authToken);
            props.showAlert("Successfully" ,"success");
            //using useHistory hook for redirecting
          navigate("/Home")
          return;


          }
          else{
          
            props.showAlert("Invalid Credentials" ,"danger");
            return;
          }

    }
    const onChange=(e)=>{
        setCredentials({...credentials ,[e.target.name]:e.target.value})

    };
  return (
  
        <div  className="container mt-2">
         <h2> Login  With Credentials to access CloudNotebook</h2>
        <Form onSubmit={handleSubmit} >
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"id="email" name="email" onChange={onChange} value={credentials.email}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"id="password" name="password" onChange={onChange} value={credentials.password} />
      </Form.Group>
     
      <Button variant="primary" type="submit"  >
        Submit
      </Button>
    </Form>
    </div>
  )
}
