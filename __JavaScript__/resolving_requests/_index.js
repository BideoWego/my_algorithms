

function Receiver(options) {
  this.id = options.id;
  this.isBusy = options.isBusy || false;

  this.reset = function() {
    var that = this;
    setTimeout(function() {
      that.isBusy = false;
    }, 1000);
  };

  this.send = function(message) {
    if (!this.isBusy) {
      console.log('Receiver[' + id + ']: ' + message);
      this.isBusy = true;
      this.reset();
    } else {
      throw new Error('Receiver[' + id + '] is busy and cannot receive any messages');
    }
  };
}

var NUM_RECEIVERS = 5;
var _receivers = [];
for (var i = 0; i < NUM_RECEIVERS; i++) {
  var receiver = new Receiver({ id: i });
  _receivers.push(receiver);
}


function Responder(options) {
  this.receivers = options.receivers;
  this.stack = [];

  this.enqueue = function(message) {
    this.stack.push({
      time: Date.now(),
      message: message
    });
  };

  this.listen = function(message) {

    // while we have messages in the stack
    // get a message
    // if the time difference is less than timeout time
    //  if there is an available receiver
    //    send message to receiver
    //  else
    //    push message back on stack
    // else
    //  send timeout error

    for (var i = 0; i < this.receivers.length; i++) {
      var receiver = this.receivers[i];
      if (recever.isBusy) {

      } else {
        receiver.send(message);
      }
    }
  };
}

var responder = new Responder({ receivers: _receivers });


var count = NUM_RECEIVERS;
var time = 1000;
while (count--) {
  setTimeout(responder.enqueue, time * (count + 1), 'Hello World!');
}

responder.listen();





