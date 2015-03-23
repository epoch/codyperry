var line = ['a','b','c','d'];
// goal ['b','c','d']
// indexOf, slice

$('form').on('submit', function(event) {
  event.preventDefault();
  
  var startStation = $('#start-station').val();
  var endStation = $('#end-station').val();

  var startStationIdx = line.indexOf(startStation);
  var endStationIdx = line.indexOf(endStation);

  var journey = line.slice(startStationIdx, endStationIdx + 1);

  console.log(journey);
  console.log(journey.length);
});

