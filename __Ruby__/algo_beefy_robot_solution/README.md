Beefy Robot Simulator
=====================


## Installation

Run: `$ bundle install`


## Files and Folders

- `index.rb`: Runs the program, run with `$ ruby index.rb`
- `lib/beefy_robot_simulator.rb`: Main program class
- `spec/beefy_robot_simulator_spec.rb`: Test file


## Running Tests

- Running tests with rspec
  - Run: `$ bundle exec rspec`
- Guard is also installed if you wish to run tests with guard
    - Run: `$ bundle exec guard`
    - Save the test file to trigger test running


Description
-----------


- The application is a simulation of a small robot named Beefy moving on a square tabletop, of dimensions 5 units x 5 units.
Create an application that can read in commands of the following form:
PLACE X,Y,F MOVE
LEFT
RIGHT REPORT
- PLACE will put Beefy on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST.
- The origin (0,0) can be considered to be the SOUTH WEST most corner. - The first valid command to Beefy is a PLACE command, after that, any
sequence of commands may be issued, in any order, including another PLACE command. The application should discard all commands in the sequence until a valid PLACE command has been executed.
- MOVE will move Beefy one unit forward in the direction it is currently facing.
- LEFT and RIGHT will rotate Beefy 90 degrees in the specified direction without changing the position of the robot.
- REPORT will announce the X,Y and F of Beefy. This can be in any form, but standard output is sufficient.
- When Beefy is not on the table he can choose the ignore the MOVE, LEFT, RIGHT and REPORT commands.
- Input can be from a file, or from standard input, or as you choose. - Provide test data to exercise the application.


Constraints
-----------

- Beefy must not fall off the table during movement. Any movement that would result in Beefy falling from the table must be ignored. This also includes the initial placement. Further valid movement commands must still be allowed.
- Assume that there are no obstructions on the table surface.


Example Input and Output
------------------------

### Example a

```
PLACE 0,0,NORTH MOVE
REPORT
Expected output: 0,1,NORTH
```

### Example b

```
PLACE 0,0,NORTH LEFT
REPORT
Expected output: 0,0,WEST
```

### Example c

```
PLACE 1,2,EAST MOVE
MOVE
LEFT
MOVE REPORT
Expected output: 3,3,NORTH
```


Deliverables
------------

- The Ruby source files, the test data and any test code.
- The git repository. Please commit to a local git repo.
- Provide it all in one archive file including the .git directory.
It is not required to provide any graphical output showing the movement of the toy robot.


This is based on work by Jon Eaves.




