Node = Struct.new(:value, :next)

class LinkedList
  attr_reader :head

  def initialize(str)
    build_linked_list(str)
  end


  def palidrome?
    stack = []
    
    node = @head
    while node
      stack << node
      node = node.next
    end

    node = @head
    while node
      node_value = node.value
      reverse_value = stack.pop.value
      return false unless node_value == reverse_value
      node = node.next
    end
    true
  end


  private
  def build_linked_list(str)
    node = @head = Node.new(str.chars.first)
    str.chars[1..-1].each do |char|
      node.next = Node.new(char)
      node = node.next
    end
  end
end


if __FILE__ == $0
  p LinkedList.new('racecar').palidrome?
  p LinkedList.new('foobar').palidrome?
end


