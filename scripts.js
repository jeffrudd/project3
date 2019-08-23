function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

$(document).ready(function () {

    let ttcArray = [
        
      'Friendly driver',

      'Angry driver',

      'Wet spot on seat',

      'Person sitting too close',

      'Presto reader not working',

      'Fare inspector on board',

      'Had a convo with a rando passenger',

      'Person loud talking on phone',

      'Too many people on board to find a seat',

      'Man-spreading',

      'Someone singing',

      'Got hit by a backpack',

      'Driver does not stop at stop',

      'Someone is grooming themselves',

      'Someone is playing music too loud',

      'Backpack taking up a seat',

      'Emergency button gets pressed',

      'Unexpected detour/delay',

      'Someone eating something that smells',

      'Witness a dispute',

      'See a cute dog',

      'Get a seat with nobody beside you',

      'Someone sitting or standing too close',

      'You have to watch a TTC vehicle go past',

      'A presto card is declined',

      'Someone is sleeping',

      'Someone sitting on outside of a double seat'

    ];

    ttcArray = shuffle(ttcArray);

    let hackerYouArray = [

      'Intro cat video',

      'Intro dog video',

      'safiIsGreat used as a variable',

      'Something about chocolate',

      'Something about coffee',

      'Story about travelling',

      '"So and so, we\'re going to brunch (mitzi\'s)!"',

      '"call a wizard"',

      '"was that a hand I saw over there?"',

      '"can I get a show of..."',

      "safiIsGreat used as a function",

      "Awkward silence",

      '"it\'s like Greek Hell"',

      "Story about father",

      "Story about Simon",

      '"it\'s the greatest thing ever!"',

      '"remember I told you..."',

      "console.log(safiIsGreat)",



    ]

  $("select").change(function () {
      const themeChoice = $('option:selected').attr("value");
      console.log(themeChoice);
  });

    for (let i = 6; i <= 30; i++) {
        const spaceAssignment = ttcArray[i-6];
        $("ul li:nth-child("+ i + ")").text(spaceAssignment);
      if (i == 30) {
        $(".gridItem18").text("Free Space");
      }
    }
    
    //Logic Statements 
    
    $("li").click(function() {
    const Button = $(this).attr("class");

    if (Button.includes("uncheckable") === false) {
        $(this).toggleClass("checked");
    }
      if (
        $(".gridItem6").hasClass("checked") &&
        $(".gridItem7").hasClass("checked") &&
        $(".gridItem8").hasClass("checked") &&
        $(".gridItem9").hasClass("checked") &&
        $(".gridItem10").hasClass("checked")
      ) {
        console.log("You WON");
      } else if (
        $(".gridItem11").hasClass("checked") &&
        $(".gridItem12").hasClass("checked") &&
        $(".gridItem13").hasClass("checked") &&
        $(".gridItem14").hasClass("checked") &&
        $(".gridItem15").hasClass("checked")
      ) {
        console.log("You WON");
      } else if (
        $(".gridItem16").hasClass("checked") &&
        $(".gridItem17").hasClass("checked") &&
        $(".gridItem18").hasClass("checked") &&
        $(".gridItem19").hasClass("checked") &&
        $(".gridItem20").hasClass("checked")
      ) {
        console.log("You WON");
      } else if (
        $(".gridItem21").hasClass("checked") &&
        $(".gridItem22").hasClass("checked") &&
        $(".gridItem23").hasClass("checked") &&
        $(".gridItem24").hasClass("checked") &&
        $(".gridItem25").hasClass("checked")
      ) {
        console.log("You WON");
      } else if (
        $(".gridItem26").hasClass("checked") &&
        $(".gridItem27").hasClass("checked") &&
        $(".gridItem28").hasClass("checked") &&
        $(".gridItem29").hasClass("checked") &&
        $(".gridItem30").hasClass("checked")
      ) {
        console.log("You WON");
      } else if (
        $(".gridItem6").hasClass("checked") &&
        $(".gridItem11").hasClass("checked") &&
        $(".gridItem16").hasClass("checked") &&
        $(".gridItem21").hasClass("checked") &&
        $(".gridItem26").hasClass("checked")
      ) {
        console.log("You WON");
      } else if (
        $(".gridItem7").hasClass("checked") &&
        $(".gridItem12").hasClass("checked") &&
        $(".gridItem17").hasClass("checked") &&
        $(".gridItem22").hasClass("checked") &&
        $(".gridItem27").hasClass("checked")
      ) {
        console.log("You WON");
      } else if (
        $(".gridItem8").hasClass("checked") &&
        $(".gridItem13").hasClass("checked") &&
        $(".gridItem18").hasClass("checked") &&
        $(".gridItem23").hasClass("checked") &&
        $(".gridItem28").hasClass("checked")
      ) {
        console.log("You WON");
      } else if (
        $(".gridItem9").hasClass("checked") &&
        $(".gridItem14").hasClass("checked") &&
        $(".gridItem19").hasClass("checked") &&
        $(".gridItem24").hasClass("checked") &&
        $(".gridItem29").hasClass("checked")
      ) {
        console.log("You WON");
      } else if (
        $(".gridItem10").hasClass("checked") &&
        $(".gridItem15").hasClass("checked") &&
        $(".gridItem20").hasClass("checked") &&
        $(".gridItem25").hasClass("checked") &&
        $(".gridItem30").hasClass("checked")
      ) {
        console.log("You WON");
      } else if (
        $(".gridItem6").hasClass("checked") &&
        $(".gridItem12").hasClass("checked") &&
        $(".gridItem18").hasClass("checked") &&
        $(".gridItem24").hasClass("checked") &&
        $(".gridItem30").hasClass("checked")
      ) {
        console.log("You WON");
      } else if (
        $(".gridItem10").hasClass("checked") &&
        $(".gridItem14").hasClass("checked") &&
        $(".gridItem18").hasClass("checked") &&
        $(".gridItem22").hasClass("checked") &&
        $(".gridItem26").hasClass("checked")
      ) {
        console.log("You WON");
      }
    });

});
