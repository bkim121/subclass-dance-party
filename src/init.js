$(document).ready(function() {
  window.dancers = [];
  
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
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
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      ((1000 - $('body').height() * Math.random() * 0.30) - 250),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer); //adding dancers now
  });


  $('.lineDancerButton').on('click', function(event) {
    window.dancers.forEach(function(dancer) {
      dancer.coordinates = {top: dancer.top, left: dancer.left};
      dancer.stepping = false;
      dancer.$node.stop(true, true);
      dancer.$node.css({'top': '650px'});
    });
  });


  $('.moveBackButton').on('click', function(event) {
    window.dancers.forEach(function(dancer) {
      console.log(dancer);
      dancer.stepping = true;
      var number = dancer.coordinates.top
      console.log(number)
      dancer.$node.css({'top': number + 'px'});
      dancer.step();
    });
  });
    //console.log($('.dancer'))
    //$('.dancer').each(function(index, element) {
      //$(element).css({'left': '100px'});
    //});

});

