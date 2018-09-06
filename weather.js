function loadWeather(){
    var lat=document.getElementById("Lattitude").innerHTML;
    var lng=document.getElementById("Longitude").innerHTML;
    if(lat==="" && lng===""){
        alert("enter location info");
    }
    else{
        var data_file = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/3b2f2bfdcae86d91b774bafb2a83b589/"+lat+","+lng;
        //alert(data_file);
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
                // Javascript function JSON.parse to parse JSON data
                
                var jsonObj = JSON.parse(http_request.responseText);
                alert(data_file);
                // jsonObj variable now contains the data structure and can
                // be accessed as jsonObj.name and jsonObj.country.
                document.getElementById("apparentTemp").innerHTML ="Apparent Temperature : "+jsonObj.currently.temperature + " F";
                document.getElementById("Temp").innerHTML = "Actual Temperature  : "+jsonObj.currently.apparentTemperature + " F";

            }
        }
        http_request.send();
    }
    
 }
