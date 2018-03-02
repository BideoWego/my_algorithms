# Pseudo Code:

# Each time a node is inserted into the list track the current length
# to get a node at an index (n to the last)
#   increment a counter starting from 0
#   as you iterate through from head to last
#   compare n with (length - counter)
#   when n == (length - counter)
#     return the current node

class Node
  attr_accessor :value,
                :next

  def initialize(options={})
    @value = options[:value]
    @next = options[:next]
  end
end


class LinkedList
  attr_reader :head,
              :last,
              :length

  def initialize(length=1)
    @head = Node.new(:value => 1)
    @length = length
    
    node = @head
    @length.times do |value|
      node.next = Node.new(:value => value)
      node = @tail = node.next
    end
  end


  def nth_index(n)
    counter = 0
    node = @head
    while node = node.next
      return node if counter == n
      counter += 1
    end
  end


  def nth_from_last_index(n)
    counter = 0
    node = @head
    while node = node.next
      return node if (@length - counter) == n
      counter += 1
    end
  end
end




if __FILE__ == $0
  l = LinkedList.new(5)
  # p [l]
  p [l.nth_index(3)]
  p [l.nth_from_last_index(3)]
end

