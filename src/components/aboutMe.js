import pic from '../images/Profile_photo.jpeg';
import '../index.css'
import '../bootstrap.css'
import { Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <div className="container">
      <Row>
        <Col className="aboutMe">
            <Link to='/'>About Me</Link>
        </Col>
        <Col className="myTown" onClick={() => {}}>
          <Link to='/town'>My Town</Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image className="myImage" src={pic} />
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="introText">
          My name is Nitin Kumar. I have 8 years of software development experience. 
      </p>

        </Col>
      </Row>
      <br/>
      <Row>
        <Col>
          <p className="motiveText">
          I have worked on mainly Java and its related technologies such as Rest API , Spring boot, Hibernate, Micro services , relational database, etc. I have worked with organization IBM , Innoviti payment solution, Standard Charted Bank -GBS during time period of year 2013-2021.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default AboutMe;
