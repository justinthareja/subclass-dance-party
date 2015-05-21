$(document).ready(function(){
  window.lines = [];
  window.colors = ['#00FFFF', '#9933FF', '#3366FF', '#6600CC', '#FF33CC', '#CC0000'];

  var shuffle = function(array) {
    var shuffle = [];

    array.forEach(function(item) {
      shuffle.splice(Math.random(0, shuffle.length), 0, item);
    });

    if(shuffle === array) {
      shuffle(shuffle);
    };

    return shuffle;
  };

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a line with a random position and color
    var randomColor = Math.floor(Math.random() * colors.length);
    var dancer = new dancerMakerFunction(
      $(".partyScreen").height() * Math.random(),
      $(".partyScreen").width() * Math.random(),
      colors[randomColor]
    );



    window.lines.push(dancer);

    $('.partyScreen').append(dancer.$node);

    $(".line").mouseover(function() {
      $(this).toggleClass('rotate-right');
      $(this).toggleClass('rotate-left');
    });

  });

  $('.fillScreen').on("click", function(event) {
    var numLines = 0;
    var addObject = function () {
      var line = new window.SpinningLine (
        $(".partyScreen").height() * Math.random(),
        $(".partyScreen").width() * Math.random()
        );

      window.lines.push(line);
      $('.partyScreen').append(line.$node);

      while (numLines < 1000) {
        numLines++;
        setTimeout(addObject, 50);
      }
    };

    addObject();
  });


  $(".swapRotation").on("click",function(event) {
    for (var i =0; i < lines.length; i++) {
      lines[i].swapDirection();
    }
  });

  $('.groupColors').on("click", function (event){
    var colors = shuffle(window.colors);
    var height = $(".partyScreen").height();
    var width = $(".partyScreen").width();


    for (var i=0; i<lines.length; i++) {
      if (lines[i].top < height/2 && lines[i].left < width/2) {
        lines[i].setColor(colors[0]);
      }
      else if (lines[i].top > height/2 && lines[i].left < width/2) {
        lines[i].setColor(colors[1]);
      }

      else if (lines[i].top < height/2 && lines[i].left > width/2) {
        lines[i].setColor(colors[2]);
      }

      else {
        lines[i].setColor(colors[3]);
      }
    }
  });

  $(".swapColors").on("click", function (event){

    for(var i = 0; i < lines.length; i++) {
      for(var j = 0; j < lines.length; j++) {
        if(window.Line.prototype.getDistance(lines[i], lines[j]) < 100) {
          var temp = lines[j].color;
          lines[j].setColor(lines[i].color);
          lines[i].setColor(temp);
        }
      }
    }
  });
});

