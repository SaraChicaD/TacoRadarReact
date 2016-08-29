"use strict";

import axios from 'axios';
let lat,
    lng;

navigator.geolocation.getCurrentPosition((position) => { 
    lat = position.coords.latitude;
    lng = position.coords.longitude;
})