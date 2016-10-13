var mapApiKey = require('./../.env').mapApiKey;
function Direction() {
}

Direction.prototype.getRoute = function() {
  var array = [];
  $.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + "9417 sw 50th ave."  + ',+' + '&key=' + mapApiKey).then(function(response) {

  });
  return;
}

exports.directionModule = Direction;
