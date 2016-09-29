console.log("app.js is working");

$(document).ready(function() {
    // array of colors
    var colorArray = ['red', 'green', 'yellow', 'blue'];

    //append 4 block with jQuery
    createBlocks();
    $('.textContainer').text("Please pick a block.");

    //createBlock function
    function createBlocks() {
        for (var i = 0; i < colorArray.length; i++) {
            $('.container').append("<div class='" + colorArray[i] + "'></div>");
            $('.container').children().last().data('id', colorArray[i]);
        }
    }

    //Prompt the player to pick one of the color blocks you created at random.
    $('.textContainer').text("Please pick a block.");


    function randomNumber(min, max) {
        return Math.floor(Math.random() * (1 + max - min) + min);
    }

    //event listeners
    $('.red').on('click', randomColor);
    $('.green').on('click', randomColor);
    $('.yellow').on('click', randomColor);
    $('.blue').on('click', randomColor);

    function randomColor() {
        var result = randomNumber(0, 4);
        console.log("Result of random number function:", result);
        console.log("This:", this);

        var className = $(this).attr('class');
        var colorData = $(this).data('id');
        console.log("Data on div:", colorData);

        var chosen = colorArray.indexOf(colorData);
        console.log("Array index number of color chosen:", chosen);
        //var chosen2 = colorArray.indexOf(className);
        //console.log(chosen2);

        //If the player clicks on the correct color block, give them a success message.
        //Prompt the player to pick another block randomly and let them keep playing.

        if (chosen == result) {
            $('.textContainer').text("Good job. Please keep playing");
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





});
