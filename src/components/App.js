import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

export default class App extends Component {

componentDidMount() {

	navigator.geolocation.getCurrentPosition((position) => { 
	  var lat = position.coords.latitude;
	  var lng = position.coords.longitude;

	  //this works
	  console.log(lat, lng);

	});
}

render() {
    return (
	  <div>
	  	<Header />
      	<Body />
      	<Footer />
      </div>
    );
}

}
