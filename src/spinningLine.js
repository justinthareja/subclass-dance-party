var SpinningLine = function (top, left, color) {
  Line.call(this, top, left, color);
  this.rotateRight(); // initialize with a right spin
};

SpinningLine.prototype = Object.create(Line.prototype);
SpinningLine.prototype.constructor = SpinningLine;

SpinningLine.prototype.makeBigger = function () {
  var getHuge = {
    height: "3%",
    width: "30%"
  };
  this.$node.css(getHuge);
};

SpinningLine.prototype.makeSmaller = function () {
  var getTiny = {
    height: "3%",
    width: "30%"
  };
  this.$node.css(getTiny);
};

SpinningLine.prototype.rotateRight = function () {
  this.$node.removeClass("rotate-left");
  this.$node.addClass("rotate-right");
};

SpinningLine.prototype.rotateLeft = function () {
  this.$node.removeClass("rotate-right");
  this.$node.addClass("rotate-left");
};



