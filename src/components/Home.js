import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class Home extends React.Component {
  render() {
    return (
      <Grid>
        <Col md={12} mdOffset={4}>
          <Row>
            <h1>Welcome to Taco Radar</h1>
            <br />
            <p>
              We want you get some delicious tacos — no matter where you are
            </p>
          </Row>
        </Col>
      </Grid>
    );
  }
}

//this is the default Body view