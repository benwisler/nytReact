import React from 'react';
import { Button } from "react-bootstrap"
const DeleteButton = props => (
    <Button className="delete-btn" {...props}>
      Delete
    </Button>
  );
  
export default DeleteButton;