### 1. Add 2 Fractions

Add two fractions of the form a/b, c/d and return the result in the simplest form.

```language-ruby
# 1/500 + 2/1500 = 1/300
add_fraction(1, 500, 2, 1500)
#=> 1 300
```

#### Solution

##### Time : O(1)

First, calculate the denominator of the sum by finding the LCM (Least Common Multiple) of the input denominators. Numerator can be calculated by adding the product of the input numerator with the LCM  divided by the other denominator (making the denominator common for both fractions). Reduce the resulting fraction to its lowest form by dividing them with their GCD (Greatest Common Divisor)


```language-ruby
def gcd(a, b)
    return b if a == 0
    return gcd(b%a, a)
end

def lowest_form(num, den)
    common_factor = gcd(num, den)
    den = den / common_factor
    num = num / common_factor
end

def add_fraction(num1, den1, num2, den2)
    res_den = gcd(den1, den2)
    # LCM * GCD = a * b
    res_den = (den1 * den2) / res_den
    res_num = (num1) * (res_den / den1) + (num2) * (res_den / den2)
    lowest_form(res_num, res_den)

end
```


### 2. Find the index of pivot in a sorted rotated array

Given an array of unique integers sorted in ascending order and then rotated at some unknown point, find index of the pivot.

```language-ruby
find_pivot([50, 60, 70, 80, 10, 20, 30, 40])
#=> 4
# pivot is 10
```

#### Naive Solution

##### Time : O(n)

Pivot is the point where sorting ends and starts again i.e, pivot is an element which is less than both the previous element and the next element. A simple solution would be to iterate through the array looking for an element which is lesser than the current element.

```language-ruby
def find_pivot (arr)
  arr.each_with_index do |num, index|
    return index + 1 if arr[index + 1] < num
  end
end
```

#### Better Solution

##### Time : O(log n)

We can use divide and conquer approach to solve this problem in `O(log n)`. This can be done using a slight modification of binary search algorithm. The pivot element is the only element whose previous element is greater than it. Therefore, we do binary search for an element which is smaller than the previous element.

```language-ruby
def find_pivot (arr)
  left = 0
  right = arr.length - 1
  while arr[right] < arr[left] do
    mid = left + (right - left) / 2
    if (arr[mid] > arr[right])
      left = mid + 1
    else
      right = mid
    end
  end
  return left
end
```

### 3. Check if two strings are anagrams of each other

Given two strings, check if one is an anagram of the other.

```language-ruby
is_anagram?("abcd", "dcba")
#=> true
is_anagram?("abce", "dcba")
#=> false
```

#### Solution #1 (Using Sort function)

##### Time : O(n log n)

If the given two strings are anagrams, then they must be of same length and have the same characters in different order. Sorting the strings will generate the characters from two strings in the same order.

```language-ruby
def is_anagram?(str1, str2)
  return false unless str1.length == str2.length
    return str1.chars.sort == str2.chars.sort
end
```

#### Solution #2 (Using Hash Table)

##### Time : O(n)

This method makes use of the definition of anagrams - two words that have the same character count. Create a hash table for one string with its characters as keys and their count as values. Navigate the second string, one character at a time and check if it exists in the hash table. If yes, decrease the count by 1, otherwise return false. At the end of the string, return true if the hash table has zero count for all keys.

```language-ruby
def is_anagram?(str1, str2)
  return false unless str1.length == str2.length
  char_count = str1
    .scan(/\w/)
    .inject( Hash.new(0) ) { |h, c| h[c] += 1; h }
  str2.chars.each do |ch|
    return false unless char_count.has_key? (ch)
    char_count[ch] -= 1
  end
  return char_count.all? { |k, v| v==0}
end
```

### 4. Add two numbers represented by Linked Lists

Given two numbers, each represented by a linked list, where each node contains a single digit. Write a function that adds the two numbers and returns the sum as a linked list.

```language-ruby
Node = Struct.new(:data, :next)

class LinkedList
  attr_accessor :head
  def initialize(num = nil)
    @head = Node.new(num, nil) unless num.nil?
  end
  def add_node (num)
    if @head.nil?
      @head = Node.new(num, nil)
    else
      current_node = @head
      current_node = current_node.next until current_node.next.nil?
      current_node.next = Node.new(num, nil)
    end
  end
end
```

#### Solution

##### Time : O(n)

The digits are stored in reverse order, such that the 1 's digit is at the head of the list.

```language-ruby
# 563 + 782
# (3)->(6)->(5) + (2)->(8)->(7)
# (5)->(4)->(3)->(1)
```

Traverse both lists, picking one node at a time from each list and add their sum (with carry, if any) to the result list, `sum`. If the sum is greater than `10` set `carry = 1` and the corresponding node in the result list will be set to the second digit of the sum. If one list is shorter than the other, then add the remaining values of the longer list with zero. Finally, when both lists are done, add the final carry, if any, to the result node.

```language-ruby
def add_lists (num1, num2)
  current_node1 = num1.head
  current_node2 = num2.head

  sum = LinkedList.new
  carry = 0

  until (current_node1.nil? && current_node2.nil?)
    current_sum = carry +
      (current_node1.nil?? 0 : current_node1.data) +
      (current_node2.nil?? 0 : current_node2.data)

    carry = (current_sum >= 10)? 1 : 0;
    current_sum %= 10

    sum.add_node(current_sum)

    current_node1 = current_node1.next unless current_node1.nil?
    current_node2 = current_node2.next unless current_node2.nil?
  end
  sum.add_node carry if carry > 0
end
```

Time complexity of this algorithm is `O(n)` where `n` is the length of the longer list.

### 5. Sort a stack

Sort a given stack of integers using only the following operations :

1. `push`
2. `pop`
3. `empty?`

```language-ruby
sort_stack([3, 2, 1, 6, 5, 4]) # top of the stack is 4
#=>[6, 5, 4, 3, 2, 1]
# top of the stack after sorting is 1
```

#### Solution

##### Time : O(n)

The stack can be sorted by recursively removing all elements from the stack and inserting them back in a sorted order.


```language-ruby
def sorted_insert (stack, elem)
  if stack.empty?
    stack.push(elem)
    return
  end
  temp = stack.pop
  if elem < temp
    stack.push(temp).push(elem)
    return
  end
  sorted_insert(stack, elem)
  stack.push temp
end

def sort_stack (stack)
  return if stack.empty?
  temp = stack.pop
  sort_stack(stack)
  sorted_insert(stack, temp)
end

```

The stack is implemented using ruby array which supports `push`, `pop` and `empty?` methods. `sort_stack` recursively pops all elements from the stack and store it in `temp`. Once the stack is empty, `sorted_insert` called and it pushes the last element removed back into the stack. Now, the second last element in the original stack is compared with the current top element of the stack. Both are pushed back in sorted order. The process is repeated until all the elements are pushed back into the stack.














