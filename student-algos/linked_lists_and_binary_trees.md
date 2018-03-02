







***







### Linked List Palindrome



Given a singly linked list, figure out whether or not it is a palindrome. Is the sequence of node values the same forward as backward?


#### Example:

```language-ruby
  # racecar
  # (r)->(a)->(c)->(e)->(c)->(a)->(r)
  p LinkedList.new('racecar').palidrome?

  # foobar
  # (f)->(o)->(o)->(b)->(a)->(r)
  p LinkedList.new('foobar').palidrome?
```


#### `O(n)` Solution

```language-ruby
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
  # racecar
  # (r)->(a)->(c)->(e)->(c)->(a)->(r)
  p LinkedList.new('racecar').palidrome?

  # foobar
  # (f)->(o)->(o)->(b)->(a)->(r)
  p LinkedList.new('foobar').palidrome?
end



```


For more information about this problem and linked lists see this student's [blog post](http://thomasjlo.tumblr.com/post/139257662138/fun-with-linkedlist).








***







### Group Odd and Even Nodes of a Linked List


Given a singly linked list, group all odd nodes together followed by the even nodes.

**NOTE** we are talking about the node number and not the value in the nodes.


### Classes

Here are the classes used in the solutions

```language-ruby
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
end
```


#### Naive `O(2n)` Solution

This solution works by first gathering the odds and evens in two arrays. Then it iterates over them rebuilds the linked list.

At first this seems like a pretty good solution. However the result can be acheived without the extra looping.


```language-ruby
class LinkedList
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

linked_list = LinkedList.new(5)
p linked_list.group_by_odds_and_evens

#=> #<Node:0x007ff772837ae0 @value="head", @next=#<Node:0x007ff772837a40 @value=1, @next=#<Node:0x007ff772837978 @value=3, @next=#<Node:0x007ff772837a90 @value=0, @next=#<Node:0x007ff7728379c8 @value=2, @next=#<Node:0x007ff772837928 @value=4, @next=nil>>>>>>

```



### Better `O(n)` Solution

This solution works by rebuilding the linked list while iterating over it the first time. The key is to retain pointers to the last even node and the first odd node. Then they can be attached to join evens and odds.


```language-ruby
class LinkedList
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
end

linked_list = LinkedList.new(5)
p linked_list.group

#=> #<Node:0x007ff772837ae0 @value="head", @next=#<Node:0x007ff772837a40 @value=1, @next=#<Node:0x007ff772837978 @value=3, @next=#<Node:0x007ff772837a90 @value=0, @next=#<Node:0x007ff7728379c8 @value=2, @next=#<Node:0x007ff772837928 @value=4, @next=nil>>>>>>
```









