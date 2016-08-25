import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Home from './Home';

import Button from 'react-bootstrap/lib/Button';

export default class Body extends React.Component {
  render() {
    return (
    	<div>
	      	<Home />
	      	<br />
	      	<Button bsSize="large" bsStyle="danger" className="center-block">Taco Me!</Button>
		</div>

    );
  }
}

//add logic in here to return search results after they press the button