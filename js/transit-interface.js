var Transit = require('./../js/transit.js').transitModule;

$(document).ready(function() {
  //debugger;
  var newTransit =  new Transit();
  var stops = newTransit.getLines();
  console.log(stops);
  // $('#output').append("<h1>" + results + "</h1>");
});
