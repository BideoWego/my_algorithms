function Container() {
  var _receivers = Array(10);

  this.send = function(receiverId, message) {
    if (receiverId !== undefined) {
      throw new Error('Receiver[' + id + '] is busy');
    } else {
      _receivers[receiverId] = message;
      setTimeout(function() {
        _receivers[receiverId] = undefined;
      }, 2000);
    }
  };

  this.isBusy = function(receiverId) {
    return _receivers[receiverId] !== undefined;
  };

  this.numReceivers = _receivers.length;
}


var _count = 5;
function start(listener) {
  while (_count--) {
    setTimeout(listener, _count * 1000, 'Hello World!');
  }
}


var container = new Container();
var stack = [];
start(function(message) {
  stack.push(message);
});


while (true) {
  var message = stack.pop();
  for (var i = 0; i < container.numReceivers; i++) {
    if (container.isBusy(i)) {
      stack.push(message);
    } else {
      container.send(i, message);
    }
  }
}







