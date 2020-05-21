import React from 'react';
import { Spinner, Jumbotron, Row, Col, Container } from 'react-bootstrap';
import './Canvas.css';

const Canvas = props => {
  if (props.weather != null) {
    const iconURL = `img/${props.weather.icon}.png`
    return (
      <div className="weather-info">
        <Jumbotron>
          <Container fluid>
            <Row>
              <Col>
                <img src={iconURL} alt={props.weather.icon} />
              </Col>
              <Col>
                <h1>
                  {props.weather.city}
                </h1>
                <p>
                  {props.weather.weather}, {props.weather.temp}°C
                </p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  } else {
    return (
      <div className="weather-info">
        <Jumbotron>
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Jumbotron>
      </div>
    );
  }
}

export default Canvas;