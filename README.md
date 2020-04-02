### Directions
    Run the Node App normally.
    Open Localhost:5000
    The App will give response as an array of JSON Objects which contain information about the Number of cases.

    localhost:5000/yesterday gives yesterday's numbers
    OR

    https://covid-19-live-api.herokuapp.com/{yesterday}


## Note
   The Data is based on https://www.worldometers.info
   This is not a Functional Web App. It is just an API which will return the COVID-19 stats.
   The main API is the ./db/data.js . You can use the Promise in your APP