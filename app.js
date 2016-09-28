console.log("app.js is working");

$(document).ready(function() {
    // array of colors
    var colorArray = ['red', 'green', 'yellow', 'blue'];



    //append 4 block with jQuery
    createBlocks();


    //createBlock function
    function createBlocks() {
        for (var i = 0; i < colorArray.length; i++) {
            $('.container').append("<div class='" + colorArray[i] + "'></div>");
            var colorData = $('.container').closest().data(working: "Yes");
            console.log(colorData);

        }
    }


    //associate number with block




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
        console.log(result);
        console.log()
        console.log(this);
        var className = $(this).attr('class');
        console.log(className);
        //if className == colorArray index (id) data value
    }


    //If the player clicks on the correct color block, give them a success message.
    //Prompt the player to pick another block randomly and let them keep playing.

    //if (color picked == random color) {
    //$('.textContainer').text("Please pick a block.");

    //alert("Good job. Please reload the page and keep playing")
    //} else {
    //If they pick the wrong color, let them know.
    //
    //alert("Please try again.")
    //}





});
