var mapApiKey = require('./../.env').mapApiKey;
var latLng = [];
function Map() {

}

Map.prototype.getLocation = function(city, state) {
  $.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + city + ',+' + state + '&key=' + mapApiKey).then(function(response) {
    lat = response.results[0].geometry.location.lat;
    lng = response.results[0].geometry.location.lng;
    latLng.push(lat, lng);
    return latLng;
    // console.log("Lat : " + lat);
    // console.log("Lng : " + lng);
  });
}

// Map.prototype.initialize = function(location) {
//   lat = location[0];
//   lng = location[1];
//   myLatLng = new google.maps.LatLng(lng, lat);
//   var myOptions = {
//     zoom: 8,
//     center: myLatlng,
//     mapTypeId: google.maps.MapTypeId.ROADMAP
//   }
//   var map = new google.maps.Map(document.getElementById("map"), myOptions);
// };

exports.mapModule = Map;

// to get lat/lng: https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY
