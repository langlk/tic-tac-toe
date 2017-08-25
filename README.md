# Tic Tac Toe

#### _Epicodus Practice in JavaScript, HTML, and CSS, August 25, 2017_

#### By Gennaro Anzalone, Kelsey Langlois, and Linda Luu

## Description

_An online version of Tic Tac Toe, offerring options for playing local Player vs Player as well as playing vs Easy or Hard AI. Hard AI uses Minimax, Easy AI chooses a random square._

## Setup/Installation Requirements

* Clone this repository
* Open index.html in web browser of your choice

## Specifications

* Player
  * Player object stores mark corresponding to Player
  * Player object returns mark corresponding to player

* Space
  * Space knows whether it's marked and what it's marked with
    * Example Input: space.mark()
    * Example Output: X
  * Space stores its coordinates
    * Example Input: space.coordinates()
    * Example Output: 1,1
  * Space can be marked
    * Example Input: space.mark(X)
    * Example Output: space.mark = X

* Board
  * Board should consists of nine spaces
  * nine spaces have coordinates to create a 3x3 square
  * Board should be able to tell if 3 spaces in a row are marked by the same player
    * Example Input: 1,1 = X, 1,2 = X, 1,3 = X
    * Example Output: X wins!
  * Board knows when all spaces are marked

* Game
  * Game should create two players
  * Game should assign each player a different mark
  * Game should end turn after one mark is placed
  * Game should alternate player turn
  * Game should know when it's over
  * Game should identify winner

* AI Easy
  * AI returns random number between 0-8
  * If number is unavailable, AI returns another random number

* AI Hard
  * Implement the minimax algorithm
  * Scores moves based on outcome
  * Wins worth 10 points
  * Losses worth -10 points
  * Everything else is 0 points
  * AI chooses next move with the highest score.
  * AI assumes other player will choose moves with the lowest score.
  * AI sums the scores of "best" possible followup moves ("best" alternates based on whether AI or Player 1 is choosing.)
  * AI chooses the move with the best cumulative score.

## Known Bugs

* When playing vs AI, clicking the next square too quickly can result in player marking a square before an AI's move has appeared in that square. This is due to a programmed delay in displaying the AI's move (in order to give it the appearance of thinking its move over). The game state still knows the correct placement of marks, but the UI will show an incorrect mark till game end. Waiting for the AI's move to appear is recommended.

## Support and contact details

_Please contact [kels.langlois@gmail.com](mailto:kels.langlois@gmail.com) or Gennaro Anzalone with questions, comments, or issues._

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript

### License

Copyright (c) 2017 **Gennaro Anzalone, Kelsey Langlois, and Linda Luu**

*This software is licensed under the MIT license.*
