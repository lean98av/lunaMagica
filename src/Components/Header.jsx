import React from "react";
import {Navbar, Container} from 'react-bootstrap'
function Header() {
  return (
    <div>
     <Navbar className="nav">
        <Container>
          <h1 className="text center" href="#home">Magic Moon</h1>
        </Container>
      </Navbar>

      </div>
  );
}
export default Header;