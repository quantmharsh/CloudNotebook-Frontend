import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Notes from './Notes';






function Home(props) {
  const {showAlert}=props;
  return (
    <div>This is Home
       
      <Notes  showAlert={showAlert}/>
  
      
    </div>
  )
}

export default Home