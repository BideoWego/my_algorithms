# 2^31 Tic Tac Toe


> Given a 2^31 x 2^31 tic tac toe board, describe how you would store the state of the game to check if there is a winner.


This answer assumes:

* All squares in a line horizontal, vertical and diagonal must be filled with an "X" or "O"
* The only diagonal lines that can win are those starting from the corners
* Users would input the square they wish to move to by x,y coordinates
* Rendering is not necessary


Goals:

* Speed
* Avoiding iteration (numbers are too large)


Solution:

1. Create a hash
1. Each key has a default value of 2^31 which is 2147483648
    1. Upon accessing a key for the first time, the value would be set to this default before further operations
1. Each key will be a composite key
    1. Starts with x, y or d
    1. Separator is a dash
    1. Ends with the position of a "square" 0 to (2^31 - 1)
    1. Example: `x-1234`
    1. There are only 2 diagonals represented by `d-0` and `d-2147483647`
1. Each time a player chooses an x,y coordinate
    1. Subtract 1 from the corresponding x and y key
    1. If the x,y coordinate is within a diagonal
        1. Subtract 1 from that diagonal as well
    1. If any of the keys equal 0 after subtracting 1
        1. That player wins!





