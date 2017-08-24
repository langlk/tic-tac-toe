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

function Board() {
  this.spaces = [];
  for (var i = 0; i < 3; i++) {
    for(var j = 0; j < 3; j ++) {
      this.spaces.push(new Space(i,j));
    }
  }
}

 Board.prototype.boardFull = function(){
   this.spaces.forEach(function(spaceFull){
     if(spaceFull.getMark() === "") {
       return false;
     }
   });
   return true;
 }

Board.prototype.threeInRow = function() {
  if (this.spaces[0].getMark() === this.spaces[1].getMark() && this.spaces[1].getMark() === this.spaces[2].getMark() && this.spaces[0].getMark() !== ""){
    return true;
  } else if(this.spaces[3].getMark() === this.spaces[4].getMark() && this.spaces[4].getMark() === this.spaces[5].getMark()&& this.spaces[3].getMark() !== ""){
    return true;
  } else if (this.spaces[6].getMark() === this.spaces[7].getMark() && this.spaces[7].getMark() === this.spaces[8].getMark()&& this.spaces[6].getMark() !== "") {
    return true;
  } else if (this.spaces[0].getMark() === this.spaces[3].getMark() && this.spaces[6].getMark() === this.spaces[0].getMark()&& this.spaces[0].getMark() !== "") {
    return true;
  } else if (this.spaces[1].getMark() === this.spaces[4].getMark() && this.spaces[7].getMark() === this.spaces[4].getMark()&& this.spaces[1].getMark() !== "") {
    return true;
  } else if (this.spaces[2].getMark() === this.spaces[5].getMark() && this.spaces[8].getMark() === this.spaces[2].getMark()&& this.spaces[2].getMark() !== "") {
    return true;
  } else if (this.spaces[0].getMark() === this.spaces[4].getMark() && this.spaces[8].getMark() === this.spaces[0].getMark()&& this.spaces[0].getMark() !== "") {
    return true;
  } else if (this.spaces[2].getMark() === this.spaces[4].getMark() && this.spaces[6].getMark() === this.spaces[2].getMark()&& this.spaces[2].getMark() !== "") {
    return true;
  } else {
    return false;
  }
}


// UI Logic
$(document).ready(function() {
  var player1 = new Player("X");
  console.log(player1);
  console.log(player1.mark);

  var space1 = new Space(1,1);
  console.log(space1);

  var board1 = new Board();
  console.log(board1);

  console.log(board1.threeInRow());


});
