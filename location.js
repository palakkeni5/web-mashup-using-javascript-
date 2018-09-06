function loadLocation(){

    var geocode= document.getElementById("location").value;
    
    geocode=encodeURIComponent(geocode);
    var data_file = "https://maps.googleapis.com/maps/api/geocode/json?address="+geocode;
    
    var http_request = new XMLHttpRequest();
    try{
       // Opera 8.0+, Firefox, Chrome, Safari
       http_request = new XMLHttpRequest();
    }catch (e){
       // Internet Explorer Browsers
       try{
          http_request = new ActiveXObject("Msxml2.XMLHTTP");
            
       }catch (e) {
        
          try{
             http_request = new ActiveXObject("Microsoft.XMLHTTP");
          }catch (e){
             // Something went wrong
             alert("Your browser broke!");
             return false;
          }
            
       }
    }
    
    
    http_request.open("GET", data_file, true);
    
    http_request.onreadystatechange = function(){
    
    if (http_request.readyState == 4  ){
       
       var jsonObj = JSON.parse(http_request.responseText);

       document.getElementById("Lattitude").innerHTML = jsonObj.results[0].geometry.location.lat;
       document.getElementById("Longitude").innerHTML = jsonObj.results[0].geometry.location.lng;
       document.getElementById("Address").innerHTML = jsonObj.results[0].formatted_address;

    }
 }
    http_request.send();
 }
