var Map = require('./../js/map.js').mapModule;

$(document).ready(function() {
  var newMap = new Map();
  $("#city-form").submit(function(event) {
    event.preventDefault();
    var inputCity = $('#city').val();
    var location = newMap.getLocation(inputCity);
    setTimeout(function() {
      $('.text').addClass('show');
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
  var bikeLayer = new google.maps.BicyclingLayer();
  bikeLayer.setMap(map);
}
