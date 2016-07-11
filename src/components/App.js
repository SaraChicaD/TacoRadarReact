import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

export default class App extends Component {

componentDidMount() {

	//If brower supports HTML5 geoLocation
	if (navigator.geolocation) {
	  navigator.geolocation.getCurrentPosition(function(position) { 
	    const lat = position.coords.latitude;
	    const lng = position.coords.longitude;

	    console.log('run');

	  });
	    
	}
	else {
	  alert('This Browser doesn\'t support HTML5 geolocation');
	}

}

render() {
    return (
	  <div>
	  	<Header />
      	<Main />
      	<Footer />
      </div>
    );
}

}
