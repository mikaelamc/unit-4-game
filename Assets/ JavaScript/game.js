

var counter = 0;           // Create a counter for each time user clicks a crystal
var targetNumber = 55;     // Establish the Target Number 



// Set the "number-to-guess" with the "target number"

$("#number-to-guess").text(targetNumber);

// Create a onclick function for each crystal


// Onclick function for Ruby
$('#Ruby').on("click", function (){

   counter += 2;
   alert("Your new score is: " + counter);

});

// Onclick function for Citrine
$('#Citrine').on("click", function (){

   counter += 10;
   alert("Your new score is: " + counter);

});

// Onclick function for Teardrop
$('#TeardropStone').on("click", function (){

    counter += 7;
    alert("Your new scores is: " + counter);

});

// Onclick function for Topaz
$('#Topaz').on("click", function (){

    counter += 1;
    alert ("Your new score is: " + counter);

});

// Check if the click counter matches the target number

if (counter === targetNumber){

    alert("You Win!");
}

else if (counter >= targetNumber){
    alert("You Lose!");
};

