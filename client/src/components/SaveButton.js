import React from 'react';
import { Button } from "react-bootstrap"
var changeText = () =>
{
    if (this.a.text =="Save") this.a.text = "Saved";
    else this.value = "Saved";
}
const SaveButton = props => (
  
    <Button className="save-btn" {...props} >
      Save
    </Button>
  );
  
export default SaveButton;