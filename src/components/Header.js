import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import Grid from 'react-bootstrap/lib/Grid';

export default class Header extends React.Component {
  render() {
    let brand = <a href='#'>Taco Radar</a>;
    return (
    	<Grid>
	      <Navbar brand={brand} inverse>
	        <Nav>
	        </Nav>
	      </Navbar>
        </Grid>
    );
  }
}