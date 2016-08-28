# TacoRadarReact
A React/Redux mobile web app utilizing geolocation and the Yelp API to help you find the best taco nearest you!

## Required dependencies
- Install globally: `npm install webpack -g`
- Install globally: `npm install -g nodemon`
- Run npm install: `npm install`

---

## To run the app

### To run overall app for both front-end and back-end. This will start nodemon watch and you just need to refresh browser to reflect any changes for both front-end and back-end.
Listening at http://localhost:3000/

`npm start` 

### For front-end development, if you want to utilize web-pack-dev-server's hot reload and let the browser automatically reflect all your front-end changes real time
Listening at http://localhost:8080/

`npm run dev`

---
## Yelp Api integration

### Server-side set up and Yelp API Credentials
server side set up with node and express are all in server.js. You will need to create a env.json file at the root level with your Yelp api credentails with the following code

`{
  "app_id": "{your yelp app id}",
  "app_secret": "your yelp app secret"
}
`
### server-side yelp Search request details
Yelp search request is set to search for *term: taco* with user browser latitude and longitude passed in as query strings.

#### API endpoint: GET request
API Endpoint: http://localhost:3000/api/yelp?lat={latitude}&lng={longitude}
ex: `http://localhost:3000/api/yelp?lat=30.3934662&lng=-97.7004852`

#### Success Response body
Upon success, you should get the following response body in return

example:

```javascript
{
  "businesses": [
    {
      "price": "$",
      "coordinates": {
        "latitude": 30.4080660721362,
        "longitude": -97.6976297423244
      },
      "name": "JR'S Tacos",
      "url": "https://www.yelp.com/biz/jrs-tacos-austin",
      "image_url": "http://s3-media1.fl.yelpcdn.com/bphoto/fnaXuL1k7mRC0nDbxVbjSQ/o.jpg",
      "id": "jrs-tacos-austin",
      "categories": [
        {
          "alias": "mexican",
          "title": "Mexican"
        }
      ],
      "rating": 4.5,
      "phone": "+15128315554",
      "review_count": 96,
      "location": {
        "address1": "1921 Cedar Bend Dr",
        "state": "TX",
        "country": "US",
        "zip_code": "78758",
        "address2": "",
        "city": "Austin",
        "address3": ""
      }
    },
    {
      "price": "$",
      "coordinates": {
        "latitude": 30.4075987943487,
        "longitude": -97.7134108543396
      },
      "name": "Tacodeli",
      "url": "https://www.yelp.com/biz/tacodeli-austin-6",
      "image_url": "http://s3-media1.fl.yelpcdn.com/bphoto/UBB1WtnBa8hMZ5R95SWmag/o.jpg",
      "id": "tacodeli-austin-6",
      "categories": [
        {
          "alias": "mexican",
          "title": "Mexican"
        },
        {
          "alias": "delis",
          "title": "Delis"
        }
      ],
      "rating": 4,
      "phone": "+15123391700",
      "review_count": 750,
      "location": {
        "address1": "12001 N Burnet Rd",
        "state": "TX",
        "country": "US",
        "zip_code": "78758",
        "address2": null,
        "city": "Austin",
        "address3": ""
      }
    },
    {
      "price": "$",
      "coordinates": {
        "latitude": 30.3965867686806,
        "longitude": -97.7275697452126
      },
      "name": "WhaTaTaco",
      "url": "https://www.yelp.com/biz/whatataco-austin-2",
      "image_url": "http://s3-media4.fl.yelpcdn.com/bphoto/91iQU5DttmziZlfyKDgsEg/o.jpg",
      "id": "whatataco-austin-2",
      "categories": [
        {
          "alias": "mexican",
          "title": "Mexican"
        },
        {
          "alias": "foodtrucks",
          "title": "Food Trucks"
        }
      ],
      "rating": 4.5,
      "phone": "+15122846080",
      "review_count": 88,
      "location": {
        "address1": "3215 Amy Donovan Plz",
        "state": "TX",
        "country": "US",
        "zip_code": "78758",
        "address2": null,
        "city": "Austin",
        "address3": ""
      }
    }, ...
    ```

#### Error Handling
Error handling for the Yelp API integration utilizes Yelp API's error handling. This app will pass along the error status from Yelp to it's response status, as well as the error data.

````javascript
{
	"status":400,
	"data":{
		"error":{"code":"VALIDATION_ERROR","description":"Please specify a location or a latitude and longitude"}
	}
}

````

Custom error handling handles for when a valid Yelp token is not available. 
````javascript
{"status":"503","data":"There's a problem with the service right now. Please try again later."}
````