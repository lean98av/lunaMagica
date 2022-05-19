import React, { useState } from "react";

import Header from "../Components/Header";
import Horoscope from "../Components/Horoscope";
import Sign from "../Components/Sign";
import Tarot from "../Components/Tarot";
import searchSign from "../Utils/searchSign";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";


function Home() {

  const [sign, setSign] = useState([]);
  const [showSign, setShowSign] = useState(false);
  const [showTarot, setShowTarot] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);

  };
  const getBirthday = (e) => {
    let month = parseInt(e.target.value.split("-")[1]);
    let day = parseInt(e.target.value.split("-")[2]);
    setSign(searchSign(month, day));
  };
 
  const checkHoroscope = (e) => {
   if(setValidated()===true){

   }
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
      <h1 className="text-center mt-3">MAGIC MOON</h1>
      <h3 className="text-center mt-3">Read horoscope today, tomorrow and weekly news. Get astrological predictions related to your zodiac signs</h3>
      <Container>
    
      <Container className="p-5 mb-4 rounded-3 col-md-4">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              required
            />
            <Form.Control.Feedback type="invalid">
            Name is required
          </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Control.Feedback type="invalid">
            Email is required
          </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicGenero">
            <Form.Label>Gender</Form.Label>
            <Form.Control required as="select" > 
              <option value="">Select your gender</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="M">Non binary</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
            Gender is required
          </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicFechaNacimiento">
            <Form.Label>Birthday</Form.Label>
            <Form.Control required type="date" onChange={getBirthday}/>
          </Form.Group>

        </Form>

        <div className="text-center mt-3">
          <h2>Check your horoscope!!</h2>
          <button  onClick={checkHoroscope}><img src="./assets/img/bola.jpg" width="100" /></button>
        </div>
      </Container>

      {showSign && (<>
        <Sign sign={sign} />
        <Horoscope sign={sign} />
      </>    
      )}
      <Container className="text-center mt-4 mb-4">
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