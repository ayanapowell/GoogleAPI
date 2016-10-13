var Direction = require('./../js/direction.js').directionModule;

$(document).ready(function() {
  var newDirection = new Direction();
  $("#direction-form").submit(function(event) {
    event.preventDefault();
    var origin = $('#origin').val();
    var destination = $('#destination').val();
    setTimeout(function() {
      getMap(origin, destination);
    }, 500);
  });
});

function getMap(origin, destination) {
  var myOptions = {
    zoom: 10,
    center: new google.maps.LatLng(45.5230622, -122.6764816),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  // Draw the map
  var mapObject = new google.maps.Map(document.getElementById("output"), myOptions);
  var directionsService = new google.maps.DirectionsService();
  var directionsRequest = {
    origin: origin,
    destination: destination,
    travelMode: google.maps.DirectionsTravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC
  };

  directionsService.route(
    directionsRequest, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        new google.maps.DirectionsRenderer({
          map: mapObject,
          directions: response
        });
      } else {
        $("#error").append("Unable to retrieve your route<br />");
      }
    }
  );
}
