/*
// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){

  var dancer = {};

  // use jQuery to create an HTML <span> tag
  dancer.$node = $('<span class="dancer"></span>');


  dancer.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(dancer.step, timeBetweenSteps);
  };
  dancer.step();

  dancer.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    dancer.$node.css(styleSettings);
  };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  dancer.setPosition(top, left);

  return dancer;
};
*/

var Line = function(top, left) {
  this.$node = $('<span class="line"></span>');
  this.top = top;
  this.left = left;
  this.setLine();
  this.generateColor();
};

Line.prototype.generateColor = function () {
  var colors = ['#00FFFF', '#9933FF', '#3366FF', '#6600CC', '#FF33CC', '#CC0000', '#FFFF00', '#FF3300', '#FF0009', '#56600FF', '#39FF14'];
  var randomColor = Math.floor(Math.random() * colors.length);
  var colorStyle = {"background-color": colors[randomColor]};
  this.color = colors[randomColor];
  this.$node.css(colorStyle);
};

Line.prototype.setLine = function() {
  var styleSettings = {
      top: this.top,
      left: this.left
  };
  this.$node.css(styleSettings);
};

Line.prototype.setColor = function(color) {
  this.color = color;
  var colorStyle = {"background-color":color};
  this.$node.css(colorStyle);
};

Line.prototype.getDistance = function(line1, line2) {
  return Math.sqrt((line1.top - line2.top)*(line1.top-line2.top) + (line1.left - line2.left) * (line1.left - line2.left));
}










