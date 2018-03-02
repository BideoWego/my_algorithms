
var NUM_EGGS = 2;
var NUM_FLOORS = 500;
var MAX_FLOOR = 547;

function findHighestFloor(floors, numEggs, maxFloor) {
  var chunk = Math.floor(floors / 14);
  var step = chunk;
  var floorNum = step;
  var iterations = 0;
  while (floorNum !== maxFloor && numEggs) {
    if (floorNum > maxFloor) {
      // We broke an egg
      numEggs--;
      floorNum -= step;
      break;
    } else {
      floorNum += step;
    }
    iterations++;
  }

  while (floorNum !== maxFloor) {
    floorNum++;
    iterations++;
  }

  // Debugging
  console.log(iterations);
  return floorNum;
} 


console.log(findHighestFloor(NUM_FLOORS, NUM_EGGS, MAX_FLOOR));






