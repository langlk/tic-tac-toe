// Business Logic
function Player(mark) {
  this.mark = mark;
}

// UI Logic
$(document).ready(function() {
  var player1 = new Player("X");
  console.log(player1);
  console.log(player1.mark);
});
