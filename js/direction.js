var mapApiKey = require('./../.env').mapApiKey;

function Direction() {
}

// Direction.prototype.getRoute = function(origin, destination) {
//   var directionsService = new google.maps.DirectionsService();
//   var directionsRequest = {
//       origin: origin,
//       destination: destination,
//       travelMode: google.maps.DirectionsTravelMode.DRIVING,
//       unitSystem: google.maps.UnitSystem.METRIC
//   };
//   directionsService.route(directionsRequest, function (response, status) {
//       if (status == google.maps.DirectionsStatus.OK) {
//         console.log(JSON.stringify(response));
//         console.log('response ' + response);
//       }    //Error has occured
//   });
// }

// Direction.prototype.getRoute = function(origin, destination, mode) {
//   var array = [];
//   $.get('https://maps.googleapis.com/maps/api/directions/json?origin=' + origin + '&destination=' + destination + '&mode=' + mode + '&key=' + mapApiKey).then(function(response) {
//     console.log(JSON.stringify(response));
//     console.log(JSON.stringify(response));
//   });
//   return;
// }

exports.directionModule = Direction;
