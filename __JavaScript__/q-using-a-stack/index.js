function Stack(collection) {
  var _collection = collection || [];
  
  this.length = 0;
  
  this.pop = function() {
    var value = _collection.pop();
    this.length = _collection.length;
    return value;
  };

  this.push = function(value) {
    this.length++;
    return _collection.push(value);
  };

  this.peek = function() {
    return _collection;
  };
}

function Queue(collection) {
  var _stack = new Stack(collection);

  this.length = 0;

  this.dequeue = function(value) {
    var result = _stack.pop(value);
    this.length = _stack.length;
    return result;
  };

  this.enqueue = function(value) {
    var temp = [];
    while (_stack.length) {
      var item = _stack.pop();
      temp.push(item);
    }
    var result = _stack.push(value);

    for (var i = 0; i < temp.length; i++) {
      var item = temp[i];
      _stack.push(item);
    }

    this.length = _stack.length;
    return result;
  };

  this.peek = function() {
    return _stack.peek();
  };
}



function main() {
  var q = new Queue();
  q.enqueue(1);
  q.enqueue(2);
  console.log(q.peek());

  q.dequeue();
  console.log(q.peek());
}


if (require.main === module) {
  main();
}

