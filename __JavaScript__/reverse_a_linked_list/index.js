

function reverseLinkedList(ll) {
  let current = ll.head;
  let last = null;
  while (current) {
    let next = current.next;
    current.next = last;
    last = current;
    current = next;
  }
  ll.head = last;
}


const ll = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  }
};

reverseLinkedList(ll)
console.log(JSON.stringify(ll, null , 2));
