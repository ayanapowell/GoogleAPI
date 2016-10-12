var Map = require('./../js/map.js').mapModule;

$(document).ready(function() {
  $("#city-form").submit(function(event) {
    event.preventDefault();
    var newMap = new Map();
    var inputCity = $('#city').val();
    var location = newMap.getLocation(inputCity);
    setTimeout(function() {
      initMap(location);
    }, 500);
  });
});

function initMap(location) {

   var myLatLng = {lat: location[0], lng: location[1]};
   var map = new google.maps.Map(document.getElementById('map'), {
     center: myLatLng,
     scrollwheel: false,
     zoom: 12
   });
   var marker = new google.maps.Marker({
     map: map,
     position: myLatLng,
     title: 'Hello World!'
   });
   }
