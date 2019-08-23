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
        
        'friendly driver',

        'wet spot on seat',

        'person sitting too close',

        'presto reader not working',

        'fare inspector on board',

        'had a convo with a rando passenger',

        'person loud talking on phone',

        'too many people on board to find a seat',

        'man-spreading',

        'someone singing',

        'being hit by a backpack',

        'driver does not stop at stop',

        'not being able to fit on board',

        'someone is playing music too loud',

        'backpack taking up a seat',

        'emergency button gets pressed',

        'unexpected detour/delay',

        'someone eating something that smells',

        'witness a dispute',

        'see a cute dog',

        'get a seat with nobody beside you',

        'someone sitting or standing too close',

        'you have to watch a ttc vehicle go past',

        'A presto card is declined',

        'someone is sleeping',

        'someone sitting on outside of a double seat'

    ];

    ttcArray = shuffle(ttcArray);

    // let hackerYouArray = [

    // ]
    
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
