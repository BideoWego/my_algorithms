### Partition a Linked List

# Given a linked list and an integer `x`, write a function to partition the linked list so that all nodes less than `x` come before nodes greater than or equal to `x`. The original relative order of the nodes in each of the two partitions should be preserved.



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

# list_partition(LinkedList.new([4, 5, 3, 6, 7, 1, 0]), 5)
# (4) -> (3) -> (1) -> (0) -> (5) -> (6) -> (7)



# Move a node A to the front of B in a linked list, we need to know the nodes that are ahead of A and B. Thus, we create a new empty head node (`new_head`) in front of the current head node.
# Keep one pointer (`last`) to the last continuous node from head that has value of less than `x`. Iterate through the list from that point and if we find any node that has value of less than `x`, simply move it after the `last` pointer and forward `last` pointer by one.


def list_partition (list, x)
  # Make a new node to place
  # at the partition point
  new_head = Node.new

  # Position at front
  new_head.next = list.head

  # Position last right before
  # the value that is higher than x
  last = new_head
  last = last.next while (last.next && last.next.data < x)

  # Pointer for current
  current = last
  while current.next

    # If the node to the right
    # has a value less than current
    if current.next.data < x

      # Grab a pointer to it
      tmp = current.next

      # Set current next to
      # the node after the node
      # to the right
      current.next = tmp.next

      # Set the target node next
      # to last next
      tmp.next = last.next

      # Move the last node ahead by 1
      last.next = tmp
      last = last.next
    else
      # Move on to the next node
      current = current.next
    end
  end

  # Return the new list
  list.head = new_head.next
  new_head.next = nil
  list.head
end


p list_partition(LinkedList.new([4, 5, 3, 6, 7, 1, 0]), 5)













