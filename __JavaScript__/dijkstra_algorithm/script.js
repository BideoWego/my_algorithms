function getShortestDistanceBetween(cityA, cityB, list) {
  var distance = 0;

  var connectionsA = list[cityA];
  var connectionsB = list[cityB];

  var nameA,
      nameB,
      distanceA,
      distanceB;

  for (var i = 0; i < connectionsA.length; i++) {
    var conA = connectionsA[i];
    nameA = conA[0];
    distanceA = conA[1];
    for (var j = 0; j < connectionsB.length; j++) {
      var conB = connectionsB[j];
      nameB = conB[0];
      distanceB = conB[1];
      if (nameA === nameB) {
        distance += (distanceA + distanceB);
        break;
      }
    }
    if (nameA === nameB) {
      break;
    }
  }

  return distance;
};


Dijkstra.getAjacencyList(function(list) {
  // Your code goes in here!!!
  // The "list" parameter is the adjacency list you have to work with.
  // Inspect it in the console.
  _list = list;
  console.log(list);

  var cityA = 'Dwarmton';
  var cityB = 'Uranus';

  var distance = getShortestDistanceBetween(cityA, cityB, list);

  console.log(distance);
});












