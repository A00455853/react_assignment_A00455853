import pic from '../images/bangalore.jpeg';
import cold from '../images/cold.png';
import mild from '../images/mild.png';
import sunny from '../images/sunny.png';
import celciusIcon from '../images/degree_celcius.png';
import farenIcon from '../images/degree_f.jpeg';
import '../index.css'
import { Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

function MyTown() {
  const getTemperature = async () => {
    try {
      const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Bangalore&appid=9ce5f357abf3161618342c23d2a53d82');
      const data = await res.json();
      const temp = data && data.main && data.main.temp ? data.main.temp - 273.15 : 30;
      return Math.trunc(temp);;
    } catch(err) {
      console.log(err);
      return 20;
    }
  };

  useEffect(() => {
    const getCityTemperature = async () => {
      const getTempFromAPI = await getTemperature();
      setTemperature(getTempFromAPI);
    };
    getCityTemperature();
  }, [])

  const [temp, setTemperature] = useState(20);

  return (
    <div className="container">
      <Row>
        <Col className="aboutMe">
            <Link to='/'>About Me</Link>
        </Col>
        <Col className="myTown">
            <Link to='/town'>My Town</Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image className="myTownImage" src={pic} />
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="introText">
           I belong from Bangalore, which is known as IT Hub of India.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
            <Image className="wheatherIcon" src={ temp < 10 ? cold : temp < 20 ? mild : sunny} />
        </Col>
        <Col>
            <p className="temperature">
                {temp}
            </p>
        </Col>
        <Col>
          <Image className="degree_c" src={celciusIcon} onClick={
            async () => {
              const temp = await getTemperature(); 
              console.log(temp);
              setTemperature(temp); 
          }}/>
        </Col>
        <Col>
          <Image className="degree_f" src={farenIcon} onClick={
            async () => {
              let temp_f = await getTemperature(); 
              temp_f = (temp_f * 9/5) + 32;
              temp_f = Math.trunc(temp_f);
              console.log(temp_f);
             setTemperature(temp_f); 
            }
          }/>
        </Col>
      </Row>
    </div>
  );
}

export default MyTown;
