
# Write an algorithm to partition a linked list around a value x,
# such that all nodes less than x come before all nodes greater than
# or equal to x
#
# for 77 -> 2 -> 9 -> -9 -> 0 -> 0 -> 55 -> -876 -> 8.1 -> 7.9
# partition(root, 8)
# one valid return value would be
# 2 -> -9 -> 0 -> 0 -> -876 -> 7.9 -> 77 -> 9 -> 55 -> 8.1


Node = Struct.new(:data, :next)

seven_nine      = Node.new(7.9, nil)
eight_one       = Node.new(8.1, seven_nine)
eight_seven_six = Node.new(-876, eight_one)
fifty_five      = Node.new(55, eight_seven_six)
zero_two        = Node.new(0, fifty_five)
zero_one        = Node.new(0, zero_two)
nnine           = Node.new(-9, zero_one)
nine            = Node.new(9, nnine)
two             = Node.new(2, nine)
root            = Node.new(77, two)


def partition(head, value)
  first_left = left = Node.new
  first_right = right = Node.new
  node = head
  while node
    if node.data < value
      left.next = node
      left = left.next
    else
      right.next = node
      right = right.next
    end
    node = node.next
  end
  right.next = nil
  first_left = first_left.next
  first_right = first_right.next
  left.next = first_right
  first_left
end


p partition(root, 8)












