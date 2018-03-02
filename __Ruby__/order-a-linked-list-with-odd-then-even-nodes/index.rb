class Node
  attr_accessor :next,
                :value

  def initialize(options={})
    @value = options[:value]
    @next = options[:next]
  end
end


class LinkedList
  attr_accessor :head
  attr_reader :length


  def initialize(num_nodes)
    @head = Node.new(:value => 'head')
    @length = 1

    node = @head
    num_nodes.times do |i|
      node.next = Node.new(:value => i)
      node = node.next
      @length += 1
    end
  end


  # Better O(n)
  def group
    left_node = @head
    first_right_node = right_node = @head.next
    node = @head.next.next if @head.next.next

    i = 0
    while node
      if i.even?
        left_node.next = node
        left_node = node
      else
        right_node.next = node
        right_node = node
      end
      node = node.next
      i += 1
    end

    left_node.next = first_right_node

    @head
  end


  # Naive O(2n)
  def group_by_odds_and_evens
    node = @head

    groups = {
      :evens => [],
      :odds => []
    }

    i = 0
    while node = node.next
      if i.even?
        groups[:odds] << node
      else
        groups[:evens] << node
      end
      i += 1
    end

    node = @head = groups[:odds].first
    
    groups[:odds].each_with_index do |current_node, index|
      node.next = current_node
      node = node.next
    end

    groups[:evens].each_with_index do |current_node, index|
      node.next = current_node
      node = node.next
    end

    node.next = nil

    @head
  end
end




if __FILE__ == $0
  linked_list = LinkedList.new(5)
  p linked_list.group_by_odds_and_evens
  p linked_list.group
end









