// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) { 
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  //this.step();
 
  // dancer.step = function() {
  //   // the basic dancer doesn't do anything interesting at all on each step,
  //   // it just schedules the next step
  //   setTimeout(dancer.step, timeBetweenSteps);
  // };
  // this.step();

  // dancer.setPosition = function(top, left) {
  //   // Use css top and left properties to position our <span> tag
  //   // where it belongs on the page. See http://api.jquery.com/css/
  //   //
  //   var styleSettings = {
  //     top: top,
  //     left: left
  //   };
  //   dancer.$node.css(styleSettings);
  // };

  // // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // // this one sets the position to some random default point within the body
  // dancer.setPosition(top, left);

  // return dancer;
};




//must passin time between steps?
makeDancer.prototype.step = function() {
  //this.step();
  var context = this;
  // setTimeout(context.step, context.timeBetweenSteps);
  setTimeout(function() {
    this.step.call(context);
  }, context.timeBetweenSteps);
};

//makeDancer.prototype.setPosition = function() {}
