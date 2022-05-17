import React, { useState, useEffect } from "react";

function Horoscope(props) {
    const [prediction, setPrediction] = useState([]);

    const getPrediction = async () => {
        const URL = `https://aztro.sameerkumar.website/?sign=${props.signo[1]}&day=today`;
        fetch(URL, {
            method: 'POST'
        }).then(response => response.json())
        .then(data => {
        setPrediction(data);
        })
        .catch(error => console.log(error));
    }

    useEffect(() => {
        getPrediction();
    }, [])

    return (
        <div className="horoscope">
            <div className="row">
                <ul className="card-text">
                   <li>This week. {prediction.description}</li> 
                   <li>Compatibility: {prediction.compatibility}</li>
                   <li>Lucky Number: {prediction.lucky_number}</li>
                   <li>Lucky Time: {prediction.lucky_time}</li>
                   <li>Color: {prediction.color}</li>
                   <li>Date Range: {prediction.date_range}</li>
                   <li>Mood: {prediction.mood}</li>
                </ul>
            </div>
        </div>
    )
}

export default Horoscope;