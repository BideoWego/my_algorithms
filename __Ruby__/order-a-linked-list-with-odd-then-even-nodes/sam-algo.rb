# After a week of data structures, it was time to get some practice.

# Given that Linked Lists appear to be the favorite teaser in interviews, I thought it was time for a little more practice. 
# The key conceptual take away in practicing this and other problems is the idea that the whole list is actually “stored” in the head. To be specific, the head, or first node, contains a pointer to the next node and so on. You’re able to traverse the list, search the list and return the list all by only having a the head. 
# This is somewhat of a challenging concept as “having” a list could be mistaken for “having” an array, where you can use the index to easily pinpoint an single element.
# Give the problem below a try for more practice with Linked Lists!


# Prompt: 


# Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.


# Example:
# Given 1->2->3->4->5->NULL,
# return 1->3->5->2->4->NULL.
# Note: The relative order inside both the even and odd groups should remain as it was in the input. The first node is considered odd, the second node even and so on ...
# Given:


#Definition for singly-linked list.
class ListNode
  attr_accessor :val, :next

  def initialize(val)
    @val = val
    @next = nil
  end
end

# Solution:


# Though certainly not the most efficient solution, my first attempt is function and fairly easily to read.


def odd_even_list(head)
  odd_array = []
  even_array = []
  ordered_array = []
  position = 1
  
  if head
    odd_array << head.val
  else
    return nil
  end
  
  while head.next
    head = head.next
    position += 1
    if position % 2 == 0
      even_array << head.val
    else
      odd_array << head.val
    end
  end
  ordered_array = odd_array.concat(even_array)
  
  item_old = nil
  item_first = nil
  ordered_array.each_with_index do |value, index|
    if index == 0
      item_first = ListNode.new(value)
      item_old = item_first
    else
      item = ListNode.new(value)
      item_old.next = item
      item_old = item
    end
  end
  item_first
end

# Now this will work. However, what if we tried to do the problem without creating any new objects? Since we have a linkedlist, we can leverage the .next value of our nodes to in a sense create paths, one each for the odd and even positions. Since the entire list in “in” in the head, all we need is a head node for each (which we can set). Once we reach the end of the sample list, we can change the last element of the odd list to point to the first element in the even list.

# Solution V2
#Here I include the functions to generate a sample LinkedList.
#Definition for singly-linked list.

class ListNode
  attr_accessor :val, :next
  def initialize(val)
    @val = val
    @next = nil
  end
end

# Creating a sample linked list.

head = ListNode.new(4)
current_node = head

5.times do |x|
  current_node.next = ListNode.new(x+2)
  current_node = current_node.next
end

def list_str(head) 
  if head.next 
    rest = list_str(head.next)
  else
    rest = nil
  end
  "#{head.val}, #{rest}"
end
puts list_str(head)

def odd_even_list(head)
  tail_head_node = head.next
  tail_current_node = tail_head_node
  position = 3
  previous_node = nil

  if tail_head_node && tail_head_node.next
    current_node = tail_head_node.next
    head.next = current_node
  else
    return head
  end

  while current_node
    puts position, current_node.val

    if position % 2 == 0
      previous_node.next = current_node.next

      tail_current_node.next = current_node
      tail_current_node = tail_current_node.next
    else
       previous_node = current_node
    end
    position += 1
    current_node= current_node.next

  end
  previous_node.next = tail_head_node  
  head
end

puts list_str(odd_even_list(head))








