

function Node(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
  this.show = function() {
    return this.value;
  };
}


var root = new Node(10);

root.left = new Node(12);
root.left.left = new Node(25);
root.left.right = new Node(30);

root.right = new Node(15);
root.right.left = new Node(36);


function ListNode(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}


function binaryTreeToLinkedList(node) {

  var head = new ListNode(node.value);

  var traverse = function(treeNode, listNode) {
    if (!treeNode) return;
    if (treeNode.left) {
      listNode.prev = new ListNode(treeNode.left.value, listNode);
    }
    if (treeNode.right) {
      listNode.next = new ListNode(treeNode.right.value, undefined, listNode);
    }
    traverse(treeNode.left, listNode.prev);
    traverse(treeNode.right, listNode.next);
  };
  traverse(node, head);

  while (head.prev) {
    head = head.prev;
  }

  return head;
}

console.log(binaryTreeToLinkedList(root));




