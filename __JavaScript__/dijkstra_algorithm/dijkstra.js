var Dijkstra = (function($) {

  var map = {};
  var nodes =  {};
  var getAjacencyList = function(func) {

    $.get('https://dijkstra.firebaseio.com/nodes.json', function(data) {
      for (var id in data) {
        var node = data[id];
        nodes[id] = node.name;
      }
    })
    .done(function() {
      $.get('https://dijkstra.firebaseio.com/edges.json', function(data) {
        for (var edge in data) {
          var edge = data[edge];
          var node = nodes[edge.node];
          var to = nodes[edge.to];
          map[node] = map[node] || [];
          map[node].push([to, edge.weight]);
        }
      }).done(function() {
        func(map)
      });
    });

  };

  

  return {
    getAjacencyList: getAjacencyList
  };

})($);



