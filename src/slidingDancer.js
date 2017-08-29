var makeSlidingDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = makeDancer.prototype.step;  
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeSlidingDancer.prototype = Object.create(makeDancer.prototype);
makeSlidingDancer.prototype.constructor = makeSlidingDancer;


makeSlidingDancer.prototype.step = function() {
  this.oldStep();
  this.$node.animate( { 'left': '+=200px'} );
  this.$node.animate( { 'left': '-=200px'} );
};