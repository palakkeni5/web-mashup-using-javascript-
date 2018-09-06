# web-mashup-using-javascript-
A web mashup which takes a part of address as input and finds the coordinates of the location and then displays the temperature of the location

1)webmashup.html :

  It contains a simple html code to insert and display the data from the apis.
  
  
2)location.js:

  It contains the following api 
  
  "https://maps.googleapis.com/maps/api/geocode/json?address="+geocode
  
  where geocode is a part of the address
  
  It will set the latitude and longitude of the location and dispaly it in the browser.
  
  
 3)weather.js:
 
 It contains the following api:
 
 https://api.darksky.net/forecast/api-key/lat,long
 
 NOTE: API key is provided in the code as well as the syntax. If you do not find the project working then it is because that the number of queries that have been sent to the api have exceeded the limit as my account is not a premium one.Feel free to create a new free account at darksky.net
 
 It will take in the latitude and longitude from the location.js file and display the temperature 
