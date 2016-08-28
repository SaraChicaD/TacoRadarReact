//general dependencies
var express = require('express');
var bodyParser = require('body-parser');
var Path = require('path');
var errorhandler = require('errorhandler')
var axios = require('axios');

//webpack specific dependencies
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webPackDevMiddleware = require('webpack-dev-middleware');
var config = require('./webpack.config');
var compiler = webpack(config);

//Environment variables and secret info
var env = require('./env.json');
const YelpId = env.app_id;
const YelpSecret = env.app_secret;

var app = express();

//set up webpack dev server wrapper for express
app.use(webPackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {colors: true}
}))
//set up bodyParser to get the data structure for api response
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//serve static content
var assetFolder = Path.resolve(__dirname, '/');
app.use(express.static(assetFolder));

//set up main route
app.get('/', (req, res) => {
  res.sendFile(assetFolder + '/index.html');
});

//Getting taco vendors from Yelp API based on latitude and longitude.
//Should pass in lat and lng information as query string
//ex. http://localhost:3000/api/yelp?lat=30.3934662&lng=-97.7004852 
//should receive a JSON object with all the available vendors under the search term "taco" and based on the lat and lng info
//See ReadMe for response object example
app.get('/api/yelp', (req, res)=> {
  var lat = req.query.lat;
  var lng = req.query.lng;

  //Yelp 3 uses OAuth2 and requires an initial api request to get the access token
  axios({
    method: 'post',
    url: 'https://api.yelp.com/oauth2/token',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    params: {
      grant_type: "client_credentials",
      client_id: YelpId,
      client_secret: YelpSecret
    }
   
  })
  .then((token) => {
      let yelpToken = token.data.access_token;
    //using the access token to make the actual Yelp business search request - function getTacoVendors
    //should pass in the yelp token, the latitude and the longitude for the search
    return getTacoVendors(null, lat, lng)
  })
  .then((results) => {
      res.status(201).send(results);
  })
  .catch((err)=> {
    res.status(err.status).send(err);
  })
});

//helper function to make the Yelp business search request. 
//should pass in the yelp token, the latitude and the longitude for the search
function getTacoVendors(token, lat, lng) {
  //set the Authorization header with Yelp token
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    let error = errorHandler('503', "There's a problem with the service right now. Please try again later.")
    return Promise.reject(error);
  }

  // set up for CORS
  axios.defaults.headers.common['Access-Control-Allow-Headers'] = "authorization, Access-Control-Allow-Origin";
  axios.defaults.headers.common['Access-Control-Allow-Methods'] = "GET,OPTIONS";
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*"; 
  axios.defaults.headers.common['Access-Control-Max-Age'] = "11560";      
  return axios({
    method: 'get',
    url: 'https://api.yelp.com/v3/businesses/search',
    params: {
      term: "taco",
      latitude: lat,
      longitude: lng
    }
  })
  .then((results) => {
    return results.data;
  })
  .catch((err) =>{
    //setting up errorHandling to reflect the send back the proper status and error message from Yelp API 
    if (err.response) {
      let error = errorHandler(err.response.status, err.response.data)
      return Promise.reject(error);
    }
    
  })

  function errorHandler(status, data) {
    console.log('error?')
    let errorObj = {
        status: status,
        data: data
      }
    return errorObj;
  }
} 
//serve static content from the dist directory
var assetFolder = Path.resolve(__dirname, './dist');
app.use(express.static(assetFolder));

var port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('Listening at http://localhost:3000/');
})



