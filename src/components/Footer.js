import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';

export default class Footer extends React.Component {
  render() {
    return (
      <Grid>
        <hr />
        <footer className="taco-footer">
          <p>Taco Radar 2016</p>
        </footer>
      </Grid>
    );
  }
}