import React from "react";
import {Navbar, Container, Nav } from 'react-bootstrap'
function Header() {
  return (
    <div>
     <Navbar className="nav">
        <Container>
          <h1 className="text center" href="#home">Magic Moon</h1>
        </Container>
      </Navbar>

      <h1 className="text-center mt-3">MAGIC MOON</h1>
      <h3 className="text-center mt-3">Read horoscope today, tomorrow and weekly news. Get astrological predictions related to your zodiac signs</h3>
    </div>
  );
}
export default Header;