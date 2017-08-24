# Tic Tac Toe

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

* AI
  * AI returns random number between 0-8
  * If number is unavailable, AI returns another random number
