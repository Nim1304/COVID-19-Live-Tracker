### Directions
    Run the Node App normally.
    Open Localhost:3000

    localhost:3000/yesterday gives yesterday's numbers
    
    OR

    https://covid-19-live-api.herokuapp.com/{yesterday}
    
    API can still be accessed with /getData route
    https://covid-19-live-api.herokuapp.com/getData/{yesterday}
    This route will give response as an array of JSON objects


## Note
   The Data is based on https://www.worldometers.info
   The main API is the ./db/data.js . You can use the Promise in your APP