// // Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');

//   dancer.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// }; 


//////

 
var makeDancer = function(top, left, timeBetweenSteps) {
  this.stepping = true;
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');

  this.setPosition(this.top, this.left); 
  this.step();
};


makeDancer.prototype.step = function() {

  var context = this;
  // setTimeout(context.step, context.timeBetweenSteps);
  setTimeout(this.step.bind(context), context.timeBetweenSteps);


  // setTimeout(function() {
  //   this.step();
  // }.bind(context), context.timeBetweenSteps);

};

makeDancer.prototype.setPosition = function(top, left) {
  styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};


makeDancer.prototype.move = function()  {
}














// // Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) { 
//   this.$node = $('<span class="dancer"></span>');
//   this.top = top;
//   this.left = left;
//   this.timeBetweenSteps = timeBetweenSteps;
//   //this.step();

//   // dancer.step = function() {
//   //   // the basic dancer doesn't do anything interesting at all on each step,
//   //   // it just schedules the next step
//   //   setTimeout(dancer.step, timeBetweenSteps);
//   // };
//   // this.step();

//   // dancer.setPosition = function(top, left) {
//   //   // Use css top and left properties to position our <span> tag
//   //   // where it belongs on the page. See http://api.jquery.com/css/
//   //   //
//   //   var styleSettings = {
//   //     top: top,
//   //     left: left
//   //   };
//   //   dancer.$node.css(styleSettings);
//   // };

//   // // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // // this one sets the position to some random default point within the body
//   // dancer.setPosition(top, left);

//   // return dancer;
// };




// //must passin time between steps?
// makeDancer.prototype.step = function() {
//   //this.step();

//   var context = this;
//   // setTimeout(context.step, context.timeBetweenSteps);
//   setTimeout(function() {
//     this.step();
//   }.bind(context), context.timeBetweenSteps);

// };

// makeDancer.prototype.setPosition = function(top, left) {

//   this.styleSettings = {
//     top: this.top,
//     left: this.left
//   };
  
//   dancer.$node.css(styleSettings);
// };
