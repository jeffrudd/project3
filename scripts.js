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

    ];

    ttcArray = shuffle(ttcArray);

    for (let i = 4; i <= 14; i++) {
        const spaceAssignment = ttcArray[i-4];
        $("ul li:nth-child("+ i + ")").text(spaceAssignment);
    }
    //Logic Statements 
    $("li").click(function() {
      $(this).toggleClass("checked");
      if (
        $(".gridItem4").hasClass("checked") &&
        $(".gridItem5").hasClass("checked") &&
        $(".gridItem6").hasClass("checked")
      ) {
        console.log("You WON");
      } else if (
        $(".gridItem7").hasClass("checked") &&
        $(".gridItem8").hasClass("checked") &&
        $(".gridItem9").hasClass("checked")
      ) {
        console.log("You WON");
      } else if (
        $(".gridItem10").hasClass("checked") &&
        $(".gridItem11").hasClass("checked") &&
        $(".gridItem12").hasClass("checked")
      ) {
        console.log("You WON");
      } else if (
        $(".gridItem4").hasClass("checked") &&
        $(".gridItem7").hasClass("checked") &&
        $(".gridItem10").hasClass("checked")
      ) {
        console.log("You WON");
      } else if (
        $(".gridItem5").hasClass("checked") &&
        $(".gridItem8").hasClass("checked") &&
        $(".gridItem11").hasClass("checked")
      ) {
        console.log("You WON");
      } else if (
        $(".gridItem6").hasClass("checked") &&
        $(".gridItem9").hasClass("checked") &&
        $(".gridItem12").hasClass("checked")
      ) {
        console.log("You WON");
      } else if (
        $(".gridItem4").hasClass("checked") &&
        $(".gridItem8").hasClass("checked") &&
        $(".gridItem12").hasClass("checked")
      ) {
        console.log("You WON");
      } else if (
        $(".gridItem6").hasClass("checked") &&
        $(".gridItem8").hasClass("checked") &&
        $(".gridItem10").hasClass("checked")
      ) {
        console.log("You WON");
      }
    });

});
