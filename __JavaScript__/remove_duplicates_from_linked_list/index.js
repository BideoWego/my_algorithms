// Given a singly linked list, remove all duplicate values from the list in O(n) time.

// test([1, 1, 3, 3, 4, 5, 5, 6, 7]);
//=> With Dupes:   1 -> 1 -> 3 -> 3 -> 4 -> 5 -> 5 -> 6 -> 7
//=> Unique:       1 -> 3 -> 4 -> 5 -> 6 -> 7

// test([7, 1, 6, 1, 3, 5, 3, 4, 5]);
//=> With Dupes:   7 -> 1 -> 6 -> 1 -> 3 -> 5 -> 3 -> 4 -> 5
//=> Unique:       7 -> 1 -> 6 -> 3 -> 5 -> 4


class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}


class LinkedList {
  constructor(values) {
    let [ value ] = values;
    this.head = new Node(value);

    let node = this.head;
    for (let i = 1; i < values.length; i++) {
      let value = values[i];
      node.next = new Node(value);
      node = node.next;
    }
  }

  render() {
    let node = this.head;
    let str = '';
    while (node) {
      str += node.value;
      if (node.next) {
        str += ' -> ';
      }
      node = node.next;
    }
    return str;
  }
}


function test(values) {
  var ll = new LinkedList(values);
  console.log('With Dupes:  ', ll.render());
  removeDuplicatesFrom(ll);
  console.log('Unique:      ', ll.render());
  console.log();
}


if (require.main === module) {
  test([1, 1, 3, 3, 4, 5, 5, 6, 7]);
  test([7, 1, 6, 1, 3, 5, 3, 4, 5]);
}


function removeDuplicatesFrom(linkedList) {
  // Your code here
}




// ----------------------------------------
// Answer
// ----------------------------------------


function removeDuplicatesFrom(linkedList) {

  var node = linkedList.head;
  var lastNode;
  var values = {};
  while (node) {
    if (values[node.value]) {
      lastNode.next = node.next;
    }
    values[node.value] = true;
    lastNode = node;
    node = node.next;
  }
}







