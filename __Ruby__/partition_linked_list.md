### Partition a Linked List

Given a linked list and an integer `x`, write a function to partition the linked list so that all nodes less than `x` come before nodes greater than or equal to `x`. The original relative order of the nodes in each of the two partitions should be preserved.

```language-ruby
Node = Struct.new(:data, :next)
class LinkedList
  attr_accessor :head
  def initialize(arr)
    node = @head = Node.new(arr.first)
    arr[1..-1].each do |n|
      node.next = Node.new(n)
      node = node.next
    end
  end
end

list_partition(LinkedList.new([4, 5, 3, 6, 7, 1, 0]), 5)
# (4) -> (3) -> (1) -> (0) -> (5) -> (6) -> (7)
```
**Note:** This problem is different from moving all nodes less than `x` before `x` and all nodes greater than or equal to `x` after `x`.

#### Solution
##### Time : O(n)

Move a node A to the front of B in a linked list, we need to know the nodes that are ahead of A and B. Thus, we create a new empty head node (`new_head`) in front of the current head node.
Keep one pointer (`last`) to the last continuous node from head that has value of less than `x`. Iterate through the list from that point and if we find any node that has value of less than `x`, simply move it after the `last` pointer and forward `last` pointer by one.

```language-ruby
def list_partition (list, x)
  new_head = Node.new
  new_head.next = list.head
  last = new_head
  last = last.next while (last.next && last.next.data < x)
  current = last
  while current.next
    if current.next.data < x
      tmp = current.next
      current.next = tmp.next
      tmp.next = last.next
      last.next = tmp
      last = last.next
    else
      current = current.next
    end
  end
  list.head = new_head.next
end
```
The above solution runs in time O(n) since both pointers visit each node once.




