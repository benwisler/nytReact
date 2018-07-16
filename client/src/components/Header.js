import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>New York Times Article Search</h1>
          <p>
                Search for articles by keyword and save them for future reference.
          </p>
          <p>
            <Button bsStyle="primary">View Saved</Button>
          </p>
        </Jumbotron>;
      </div>
    );
  }
}

export default Header;