// var transitApiKey = require('./../.env').transitApiKey;

function Transit() {
}

Transit.prototype.getLines = function() {
  var results = [];
  $.get('https://transit.land/api/v1/stops?lon=-121.977772198&lat=37.413530093&r=100').then(function(response) {
    var stops = response.stops;
    for(var i = 0; i < stops.length; i++) {
      // var operatorName =  stops[i].routes_serving_stop[0].operator_name;
      var routeNumber = stops[i].routes_serving_stop[0].route_name;
      // console.log(typeof(routeNumber[0]));
      results.push(routeNumber);
    }
  });
    return results;

}

exports.transitModule = Transit;
