import React from 'react';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Grid from 'react-bootstrap/lib/Grid';

export default class SearchResults extends React.Component {
  render() {
    return (
    	<Grid>
	      <ListGroup>
    	    <ListGroupItem>Item 1</ListGroupItem>
    	    <ListGroupItem>Item 2</ListGroupItem>
    	    <ListGroupItem>...</ListGroupItem>
	      </ListGroup>
    	</Grid>
    );
  }
}