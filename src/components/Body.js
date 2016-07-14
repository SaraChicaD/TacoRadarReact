import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class Body extends React.Component {
  render() {
    return (
      <Grid>
        <Col md={12}>
          <Row>
            <h2>Heading 1</h2>
            <h2>Heading 2</h2>
            <p>Adipisicing ratione incidunt eaque expedita rerum porro inventore.</p>
            <p><Button>View details »</Button></p>
          </Row>
        </Col>
      </Grid>
    );
  }
}