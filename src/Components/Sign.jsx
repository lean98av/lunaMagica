import React, { useState, useEffect } from "react";
import zodiac from "../Data/zodiac";

function Sign(props) {
  const [detailsSign, setDetailsSign] = useState([]);
  const urlImgs = "./assets/img/bola/"

  useEffect(() => {
    setDetailsSign(zodiac[props.sign[0]]);
  }, [props.sign]);

  return (
    <div className="sign">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center">{detailsSign.sign}</h1>
          <h3 className="text-center">{detailsSign.title}</h3>
          <p className="text-center">{detailsSign.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Sign;