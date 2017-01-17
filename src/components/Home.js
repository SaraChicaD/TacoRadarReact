import React, { Component } from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div className="taco-home">
        <h2>Welcome to Taco Radar!</h2>
        <p>We want you to have some delicious tacos NOW!</p>
        <input type="button" 
        	   value="Taco me Baby!"
        	   clasName="taco-button" />
      </div>
    );
  }
}

//this is the default Body view