import React, { useState, useEffect } from 'react';
import tarot from '../Data/tarot.json';

function Tarot(props) {
  const [predictionPast, setPredictionPast] = useState({});
  const [predictionPresent, setPredictionPresent] = useState({});
  const [predictionFuture, setPredictionFuture] = useState({});

  const seePrediction = () => {
    let number = Math.floor(Math.random() * tarot.length);
    setPredictionPast(tarot[number]);
    number = Math.floor(Math.random() * tarot.length);
    setPredictionPresent(tarot[number]);
    number = Math.floor(Math.random() * tarot.length);
    setPredictionFuture(tarot[number]);
  }

  useEffect(() => {
    seePrediction();
  }, [])

  return (
    <div className='tarot'>
      <div className='row'>
        <div className='col-md-4'>
          <h2 className='text-center'>Past</h2>
          <img src={predictionPast.image} alt='tarot' className='img-fluid p-4' style={{ height: 500 }}/>
          <h5 className='text-center'>{predictionPast.name}</h5>
          <p>Upright: {predictionPast.upright}</p>
          <p>Reversed: {predictionPast.reversed}</p>
        </div>
        <div className='col-md-4'>
          <h2 className='text-center'>Present</h2>
          <img src={predictionPresent.image} alt='tarot' className='img-fluid p-4'  style={{ height: 500 }}/>
          <h5 className='text-center'>{predictionPresent.name}</h5>
          <p>Upright: {predictionPresent.upright}</p>
          <p>Reversed: {predictionPresent.reversed}</p>
        </div>
        <div className='col-md-4'>
          <h2 className='text-center'>Future</h2>
          <img src={predictionFuture.image} alt='tarot' className='img-fluid p-4'  style={{ height: 500 }} />
          <h5 className='text-center'>{predictionFuture.name}</h5>
          <p>Upright: {predictionFuture.upright}</p>
          <p>Reversed: {predictionFuture.reversed}</p>
        </div>
      </div>
      <div className='row'>
        <h3>Past</h3>
        <h5>Summary</h5>
        <p>{predictionPast.summary}</p>
        <h5>Meaning</h5>
        <p>{predictionPast.full_meaning}</p>
      </div>
      <div className='row'>
        <h3>Present</h3>
        <h5>Summary</h5>
        <p>{predictionPresent.summary}</p>
        <h5>Meaning</h5>
        <p>{predictionPresent.full_meaning}</p>
      </div>
      <div className='row'>
        <h3>Future</h3>
        <h5>Summary</h5>
        <p>{predictionFuture.summary}</p>
        <h5>Meaning</h5>
        <p>{predictionFuture.full_meaning}</p>
      </div>
      </div>
  );
}

export default Tarot; 