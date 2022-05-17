import React, { useState } from "react";

import Header from "../Components/Header";
import Horoscope from "../Components/Horoscope";
import Sign from "../Components/Horoscope";
import Tarot from "../Components/Tarot";
import searchSign from "../Utils/searchSign";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";


function Home() {
  const [sign, setSign] = useState([]);
  const [showSign, setShowSign] = useState(false);
  const [showTarot, setShowTarot] = useState(false);

  const getBirthday = (e) => {
    let month = parseInt(e.target.value.split("-")[1]);
    let day = parseInt(e.target.value.split("-")[2]);
    setSign(searchSign(month, day));
  };
 
  const checkHoroscope = (e) => {
    e.preventDefault();
    setShowSign(true);
  };

  const cardsTarot = (e) => {
    setShowTarot(true);
  }
  const hideTarot = (e) => {
    setShowTarot(false);
  }

  return (
    <>
      <Header/>
      <Container>
      <Container className="p-5 mb-4 rounded-3 col-4">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicGenero">
            <Form.Label>Gender</Form.Label>
            <Form.Control as="select" > 
              <option value="">Select your gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="M">Non binary</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicFechaNacimiento">
            <Form.Label>Birthday</Form.Label>
            <Form.Control type="date" onChange={getBirthday} />
          </Form.Group>
        </Form>

        <div className="text-center mt-3">
          <h2>Check your horoscope!!</h2>
          <img src="./assets/img/bola.jpg" width="100" onClick={checkHoroscope} />
        </div>
      </Container>

      {showSign && (<>
        <Sign sign={sign} />
        <Horoscope sign={sign} />
      </>    
      )}
      <Container className="text-center">
        <h3>Tarot reading</h3>
        <img src="./assets/img/bola.jpg" width="100" onClick={cardsTarot} className="img-fluid" />
        </Container>

      {showTarot && (
      <>       
      <Tarot tirarCartasTarot={cardsTarot} hideTarot={hideTarot} />
      </>
      )}
      </Container>
   </>
  );
}

export default Home;