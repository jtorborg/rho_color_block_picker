console.log("app.js is working");

$(document).ready(function() {
    // array of colors
    var colorArray = ['red', 'green', 'yellow', 'blue'];
    var result;
    //append 4 block with jQuery
    createBlocks();
    chooseRandomBlock();


    //$('.textContainer').text("Please click on the " + colorArray[result] + " block.");

//     //Run the initial random function
//     chooseColor()
//
//     //Initial random function
//     function chooseColor () {
//
// var result = randomNumber(0, 3);
// var firstClass = colorArray[result];
// console.log(firstClass);
// $('.textContainer').text("Please click the " + firstClass + " block.");
//
//     }


    //Prompt the player to pick one of the color blocks you created at random.

    //event listeners
    $('.red').on('click', randomColor);
    $('.green').on('click', randomColor);
    $('.yellow').on('click', randomColor);
    $('.blue').on('click', randomColor);

    function randomColor() {

      //chooseRandomBlock();
      //var result = randomNumber(0, 3);

        //console.log("Result of random number function:", result);
        console.log("This:", this);

        var className = $(this).attr('class');
        var colorData = $(this).data('id');
        console.log("Data on div:", colorData);

        var chosen = colorArray.indexOf(colorData);
        console.log("Array index number of color chosen:", chosen);
        var chosen2 = colorArray.indexOf(className);
        console.log("Result", result);
        console.log(chosen2);
        $('.textContainer').text("Please click on the " + colorArray[colorData] + " block.");

        //If the player clicks on the correct color block, give them a success message.
        //Prompt the player to pick another block randomly and let them keep playing.
        if (chosen == result) {
            $('.textContainer').text("Good job. Please play again.");

        } else {
            //If they pick the wrong color, let them know.
            $('.textContainer').text("Please try again.");
        }

    }



    //if (color picked == random color) {

    //alert("Good job. Please reload the page and keep playing")
    //} else {
    //
    //alert("Please try again.")
    //}

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (1 + max - min) + min);
    }



    //createBlock function
    function createBlocks() {
        for (var i = 0; i < colorArray.length; i++) {
            $('.container').append("<div class='" + colorArray[i] + "'></div>");
            $('.container').children().last().data('id', colorArray[i]);

        }
    }

    function chooseRandomBlock() {
      result = randomNumber(0, 3);
      console.log("Result of random number function:", result);
      $('.textContainer').text("Please click on the " + colorArray[result] + " block.");
      return result;


    }


});
