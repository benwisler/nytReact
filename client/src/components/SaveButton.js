import React from 'react';
import { Button } from "react-bootstrap"

class SaveButton extends React.Component {
  render() {
    return (
    <Button className="save-btn" {...this.props} disabled={this.props.text==="Saved"} >
      {this.props.text}
    </Button>
  );
  }
  };
  
export default SaveButton;