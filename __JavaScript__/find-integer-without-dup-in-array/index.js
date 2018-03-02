// Your company delivers products via quadcopter drones. When a drone takes off for delivery, the delivery ID is added to a list. When the drone returns, the ID is again added to the same list. One drone has gone missing, so its ID was not added to the list a second time.
// Given the list of IDs, which contains many duplicate integers and one unique integer, find the unique integer. IDs are NOT guaranteed to be sorted or sequential.
// Examples:
// findMissingDrone([1,2,3,4,1,2,4]) //=> 3
// findMissingDrone([100,33,27,89,27,99,33,99,100]) //=> 33


function findMissingDrone(array) {
  var singles = [];
  for (var i = 0; i < array.length; i++) {
    var item = array[i];
    
    if (singles.indexOf(item) < 0) {
      singles.push(item);
    }
  }

  for (var i = 0; i < singles.length; i++) {
    var item = singles[i];

    var index = array.indexOf(item);
    array.splice(index, 1);
  }

  for (var i = 0; i < array.length; i++) {
    var item = array[i];

    var index = singles.indexOf(item);
    singles.splice(index, 1);
  }

  console.log(singles, array);

  return singles;
}



function main() {
  console.log(findMissingDrone([1,2,3,4,1,2,4])); //=> 3
  console.log(findMissingDrone([100,33,27,89,27,99,33,99,100])); //=> 89
}


if (require.main === module) {
  main();
}




