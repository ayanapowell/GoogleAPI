var mapApiKey = require('./../.env').mapApiKey;
function Map() {
}

Map.prototype.getLocation = function(city) {
  var array = [];
  $.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + "9417 sw 50th ave."  + ',+' + '&key=' + mapApiKey).then(function(response) {
    lat = response.results[0].geometry.location.lat;
    lng = response.results[0].geometry.location.lng;
    console.log(lat)
    console.log(lng)
    array.push(lat, lng);
  });
  return array;
}

exports.mapModule = Map;
