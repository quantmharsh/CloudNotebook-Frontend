import React from 'react'
import Alert from 'react-bootstrap/Alert';

function AlertFeature(props) {
  return (
    <div>
        <Alert key='info' variant='info'>
         Hello! This  is {props.message}
        </Alert>
        
    </div>
  )
}

export default AlertFeature