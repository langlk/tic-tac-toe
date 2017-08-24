// Business Logic
function Player(mark) {
  this.mark = mark;
}

function Space(xCoord, yCoord) {
  this.xCoord = xCoord;
  this.yCoord = yCoord;
  this.mark = "";
}

Space.prototype.coordinates = function() {
  return [this.xCoord, this.yCoord];
}

Space.prototype.getMark = function() {
  return this.mark;
}

Space.prototype.addMark = function(newMark) {
  if (this.mark === "") {
    this.mark = newMark;
  } else {
    return("This space is already marked.")
  }
}

// UI Logic
$(document).ready(function() {
  var player1 = new Player("X");
  console.log(player1);
  console.log(player1.mark);

  var space1 = new Space(1,1);
  console.log(space1);
  console.log(space1.getMark());
  console.log(space1.addMark("O"));
  console.log(space1.getMark());
  console.log(space1.addMark("X"));
});
