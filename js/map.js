var mapApiKey = require('./../.env').mapApiKey;
function Map() {
}

Map.prototype.getLocation = function(city, state) {
  var array = [];
  $.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + city + ',+' + state + '&key=' + mapApiKey).then(function(response) {
    lat = response.results[0].geometry.location.lat;
    lng = response.results[0].geometry.location.lng;
    array.push(lat, lng);
  });
  return array;
}

exports.mapModule = Map;

// to get lat/lng: https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY
