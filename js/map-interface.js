var Map = require('./../js/map.js').mapModule;

$(document).ready(function() {

  $("#city-form").submit(function(event) {
    event.preventDefault();
    var newMap = new Map();
    var inputCity = $('#city').val();
    var inputState = $('#state').val();
    var location = newMap.getLocation(inputCity, inputState);
    setTimeout(function() {
      initMap(location);
    }, 1000);
  });
});

function initMap(location) {

   var myLatLng = {lat: location[0], lng: location[1]};
   // Create a map object and specify the DOM element for display.
   var map = new google.maps.Map(document.getElementById('map'), {
     center: myLatLng,
     scrollwheel: false,
     zoom: 12
   });
   // Create a marker and set its position.
   var marker = new google.maps.Marker({
     map: map,
     position: myLatLng,
     title: 'Hello World!'
   });
   }
