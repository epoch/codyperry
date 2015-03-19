var squares = document.getElementById('contributions-calendar').getElementsByTagName('rect');

// function expression
var randomRGB = function () {
  return Math.floor(Math.random() * (255 - 0));
}

var gitRave = function() {
  setInterval(function() {
    for (var i = 0; i < squares.length; i++) {
      var fillColor = 'rgb(' + randomRGB() + ',' + randomRGB() + ',' + randomRGB() + ')'
      squares[i].style.fill = fillColor;
    }

    document.getElementsByTagName('body')[0].style.backgroundColor = 'rgb(' + randomRGB() + ',' + randomRGB() + ',' + randomRGB() + ')';
  }, 10);
}

gitRave();