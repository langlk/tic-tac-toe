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
    return newMark;
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
   var isFull = true;
   this.spaces.forEach(function(spaceFull){
     if(spaceFull.getMark() === "") {
       isFull = false;
     }
   });
   return isFull;
 }



Board.prototype.threeInRow = function() {
  if (this.spaces[0].getMark() === this.spaces[1].getMark() && this.spaces[1].getMark() === this.spaces[2].getMark() && this.spaces[0].getMark() !== ""){
    return this.spaces[0].getMark();
  } else if(this.spaces[3].getMark() === this.spaces[4].getMark() && this.spaces[4].getMark() === this.spaces[5].getMark()&& this.spaces[3].getMark() !== ""){
    return this.spaces[3].getMark();
  } else if (this.spaces[6].getMark() === this.spaces[7].getMark() && this.spaces[7].getMark() === this.spaces[8].getMark()&& this.spaces[6].getMark() !== "") {
    return this.spaces[6].getMark();
  } else if (this.spaces[0].getMark() === this.spaces[3].getMark() && this.spaces[6].getMark() === this.spaces[0].getMark()&& this.spaces[0].getMark() !== "") {
    return this.spaces[0].getMark();
  } else if (this.spaces[1].getMark() === this.spaces[4].getMark() && this.spaces[7].getMark() === this.spaces[4].getMark()&& this.spaces[1].getMark() !== "") {
    return this.spaces[1].getMark();
  } else if (this.spaces[2].getMark() === this.spaces[5].getMark() && this.spaces[8].getMark() === this.spaces[2].getMark()&& this.spaces[2].getMark() !== "") {
    return this.spaces[2].getMark();
  } else if (this.spaces[0].getMark() === this.spaces[4].getMark() && this.spaces[8].getMark() === this.spaces[0].getMark()&& this.spaces[0].getMark() !== "") {
    return this.spaces[0].getMark();
  } else if (this.spaces[2].getMark() === this.spaces[4].getMark() && this.spaces[6].getMark() === this.spaces[2].getMark()&& this.spaces[2].getMark() !== "") {
    return this.spaces[2].getMark();
  } else {
    return false;
  }
}

function Game(mode, player1, player2) {
  this.mode = mode;
  this.player1 = player1;
  this.player2 = player2;
  this.board = new Board();
  this.activePlayer = this.player1;
  this.inactivePlayer = this.player2;
}

Game.prototype.markSpace = function(spaceNumber) {
  return this.board.spaces[spaceNumber].addMark(this.activePlayer.mark);
}

Game.prototype.endTurn = function() {
  if (!this.isOver()) {
    var lastPlayer = this.activePlayer;
    this.activePlayer = this.inactivePlayer;
    this.inactivePlayer = lastPlayer;
  } else {
    return this.isOver();
  }
}

Game.prototype.isOver = function() {
  if (this.board.threeInRow()) {
    return this.board.threeInRow();
  } else if (this.board.boardFull()) {
    return "full";
  } else {
    return false;
  }
}

function TicTacBot(mark) {
  this.mark = mark;
}

TicTacBot.prototype.chooseSpace = function() {
  return parseInt(Math.random() * 9);
}

Game.prototype.botTurn = function() {
  var botMove = this.player2.chooseSpace();
  while (this.board.spaces[botMove].getMark() !== "") {
    botMove = this.player2.chooseSpace();
  }
  this.markSpace(botMove);
  return botMove;
}

Game.prototype.copyGame = function() {
  var player1 = new Player("X");
  var bot = new Player("O");
  var game2 = new Game("ai", player1, bot);
  for (var i = 0; i < 9; i++) {
    var newMark = this.board.spaces[i].getMark();
    game2.board.spaces[i].addMark(newMark);
  }
  if (this.activePlayer.mark === "X") {
    game2.activePlayer = game2.player1;
    game2.inactivePlayer = game2.player2;
  } else {
    game2.activePlayer = game2.player2;
    game2.inactivePlayer = game2.player1;
  }
  return game2;
}

Game.prototype.getAvailableMoves = function() {
  var moves = []
  for (var i = 0; i < 9; i ++) {
    if (this.board.spaces[i].getMark() === "") {
      moves.push(i);
    }
  }
  return moves;
}

Game.prototype.getNewState = function(move) {
  var newGame = this.copyGame();
  newGame.markSpace(move);
  newGame.endTurn();
  return newGame;
}

function minMax(game) {
  var state = game.isOver();
  console.log(state);
  if (state === "full") {
    console.log("Tie");
    return 0;
  } else if (state === "X") {
    console.log("Loss");
    return -10;
  } else if (state === "O") {
    console.log("Win");
    return 10;
  } else { // Game is not over
    var scores = []
    var moves = []
    game.getAvailableMoves().forEach(function(move) {
      possibleGame = game.getNewState(move);
      scores.push(minMax(possibleGame));
      moves.push(move);
    });
    console.log("Scores: " + scores);
    console.log("Moves: " + moves);
    if (game.activePlayer.mark === "O") {
      var maxScoreIndex = scores.indexOf(Math.max.apply(null, scores));
      bestMove = moves[maxScoreIndex];
      return scores[maxScoreIndex];
    } else { // oponent's turn, they will pick min score
      var minScoreIndex = scores.indexOf(Math.min.apply(null, scores));
      bestMove = moves[minScoreIndex];
      return scores[minScoreIndex];
    }
    console.log(bestMove);
  }
}

// UI Logic
function updateSpace(space, mark){
  $("#" + space).text(mark);
}

function printEnd(result) {
  if (result !== "full") {
    $("#result").text(result + " is the winner!");
  } else {
    $("#result").text("It's a tie!");
  }
  $("#restart").show();
}

function updateTurn(player) {
  $("#active-player").text(player);
}

$(document).ready(function() {
  $("#restart").click(function() {
    window.location.reload();
  });
  $("#pvp").click(function(){
    $(".gameStart").hide();
    $(".gameplay").show();
    var player1 = new Player("X");
    var player2 = new Player("O");
    var newGame = new Game("pvp", player1, player2);
    updateTurn(newGame.activePlayer.mark);

    $(".space").click(function(){
      var mark = newGame.markSpace(parseInt($(this).attr("id")));
      if (mark !== "This space is already marked.") {
        updateSpace(parseInt($(this).attr("id")), newGame.activePlayer.mark);
        var turnEnd = newGame.endTurn();
        if (turnEnd) {
          printEnd(turnEnd);
        } else {
          updateTurn(newGame.activePlayer.mark);
        }
      } else {
        console.log("Already Marked");
      }
    });
  });

  $("#ai").click(function(){
    $(".gameStart").hide();
    $(".gameplay").show();
    var player1 = new Player("X");
    var bot = new TicTacBot("O");
    var newGame = new Game("ai", player1, bot);
    updateTurn(newGame.player1.mark);
    $(".space").click(function(){
      var mark = newGame.markSpace(parseInt($(this).attr("id")));
      if (mark !== "This space is already marked.") {
        updateSpace(parseInt($(this).attr("id")), newGame.player1.mark);
        var turnEnd = newGame.endTurn();
        if (turnEnd) {
          printEnd(turnEnd);
        } else {
          updateTurn(newGame.player2.mark);
          var botMove = newGame.botTurn();
          setTimeout(function() {
            updateSpace(botMove, newGame.player2.mark)
            turnEnd = newGame.endTurn();
            if (turnEnd) {
              printEnd(turnEnd);
            } else {
              updateTurn(newGame.player1.mark);
            }
          }, 800);
        }
      } else {
        console.log("Already Marked");
      }
    });
  });

  $("#beastAI").click(function() {
    $(".gameStart").hide();
    $(".gameplay").show();
    var player1 = new Player("X");
    var bot = new TicTacBot("O");
    var newGame = new Game("beastAI", player1, bot);
    updateTurn(newGame.player1.mark);
    $(".space").click(function(){
      var mark = newGame.markSpace(parseInt($(this).attr("id")));
      if (mark !== "This space is already marked.") {
        updateSpace(parseInt($(this).attr("id")), newGame.player1.mark);
        var turnEnd = newGame.endTurn();
        if (turnEnd) {
          printEnd(turnEnd);
        } else {
          updateTurn(newGame.player2.mark);
          console.log(newGame.getAvailableMoves());
          minMax(newGame)
          console.log(bestMove);
          console.log(newGame);
          var botMove = bestMove;
          newGame.markSpace(botMove);
          setTimeout(function() {
            updateSpace(botMove, newGame.player2.mark)
            turnEnd = newGame.endTurn();
            if (turnEnd) {
              printEnd(turnEnd);
            } else {
              updateTurn(newGame.player1.mark);
            }
          }, 800);
        }
      } else {
        console.log("Already Marked");
      }
    });
  });
});
