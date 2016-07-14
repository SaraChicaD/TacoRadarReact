import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class Home extends React.Component {
  render() {
    return (
      <Grid>
        <Col md={12}>
          <Row>
            <h2>Welcome to Taco Radar!</h2>
            <p>We want you to have some delicious tacos NOW!</p>
            <p><Button>Taco me Baby!</Button></p>
          </Row>
        </Col>
      </Grid>
    );
  }
}

//this is the default Body view