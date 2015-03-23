var pt = {
  'ally': ['a','b','x','c','d'],
  'sandy': ['e','x','f','g'] 
}

// assume single line for now
function calcTrip(line, startStation, endStation) {
  var startStationIdx = pt[line].indexOf(startStation);
  var endStationIdx = pt[line].indexOf(endStation);

  if (startStationIdx < endStationIdx) {
    return pt[line].slice(startStationIdx, endStationIdx + 1);  
  } else {
    return pt[line].slice(endStationIdx, startStationIdx + 1).reverse();     
  }

}

$('form').on('submit', function(event) {
  event.preventDefault();

  var startLine = 'ally';
  var endLine = 'sandy';
  var startStation = $('#start-station').val();
  var endStation = $('#end-station').val();

  if (startLine === endLine) {
    // single line journey, call calcTrip once
    calcTrip(startLine, startStation, endStation);
  } else {
    // multi line journey, call calcTrip twice
    var firstTrip = calcTrip(startLine, startStation, 'x');
    var secondTrip = calcTrip(endLine, 'x',endStation);

    console.log(firstTrip.concat(secondTrip));
  }
});

