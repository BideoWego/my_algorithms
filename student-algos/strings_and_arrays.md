






***







### Rain Trap Array


Given an array of positive integers, assume the integers represent various elevations. Find the total amount of water that can be trapped in the valleys between the peaks of those elevations.

Assume that water units are simple integers. Also assume water can "leak" out of the beginning and end
of the array.

#### Solution in `O(n)`:

This solution iterates from the left to right, right to left, and then once more from left to right. Simple eh? **Why?**

It's all about finding min and max values. The trick is, we target the max values of the opposite direction in which we're traveling. Then we get the min value of that index (between the `left` and `right` array) and subtract the value of the original array from it. That value is the amount of water at that index (assuming it is a positive value).

Here's the code.

```language-ruby
def find_rain_traps_in(array)
  # cache array length for eaze
  n = array.length

  # can't hold water if
  # array length < 2
  return 0 if n < 2
  
  # initialize rain counter
  # and left/right arrays of length n
  # with all 0s
  rain = 0
  left = Array.new(n) { 0 }
  right = Array.new(n) { 0 }

  # we start at 1 because rain
  # cannot be trapped at index 0
  1.upto(n) do |index|

    # set the current left index
    # to the max of the previous index
    # in the left and original arrays
    left[index] = [left[index - 1], array[index - 1]].max
  end

  p left

  # we start at n - 2 because rain
  # cannot be trapped at index n - 1
  (n - 2).downto(0) do |index|

    # set the current right index
    # to the max of the next index
    # in the right and original arrays
    right[index] = [right[index + 1], array[index + 1]].max
  end

  # now we loop through
  # all arrays from start to end
  n.times do |index|
    
    # we want to subtract the value
    # in the original array from
    # the min value
    # between left and right
    drops = [left[index], right[index]].min - array[index]

    # we're not interested in
    # negative values
    if drops > 0

      # accumulate that rain water
      rain += drops
    end
  end

  # return result
  rain
end


if __FILE__ == $0

  # Standard "random" examples
  # [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1] # => 6
  # [4, 0, 2, 1, 2, 1, 4] # => 14
  # [0, 1, 2, 1, 2, 3, 0] # => 1
  # [5, 4, 3, 2, 1, 2, 3, 2, 1, 3] # => 7
  ​
  # Special cases
  # [1, 3, 5, 0, 5, 3, 1] # => 5 Symmetric - odd
  # [1, 0, 2, 2, 0, 1] # => 2 Symmetric - even
  # [1, 2, 3, 4, 3, 2, 1] # => 0 Mountain
  # [0, 1, 2, 3, 4, 5] # => 0 Up slope
  # [5, 4, 3, 2, 1, 0] # => 0 Down slope
  # [4, 3, 2, 1, 2, 3, 4] # => 9 Valley
  # [1, 0, 1, 1, 1, 0, 1, 1] # => 2 Plain

  # Run the tests!
  [
    [6, find_rain_traps_in([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])],
    [14, find_rain_traps_in([4, 0, 2, 1, 2, 1 ,4])],
    [1, find_rain_traps_in([0, 1, 2, 1, 2, 3, 0])],
    [7, find_rain_traps_in([5, 4, 3, 2, 1, 2, 3, 2, 1, 3])],

    [5, find_rain_traps_in([1, 3, 5, 0, 5, 3, 1])],
    [2, find_rain_traps_in([1, 0, 2, 2, 0, 1])],
    [0, find_rain_traps_in([1, 2, 3, 4, 3, 2, 1])],
    [0, find_rain_traps_in([0, 1, 2, 3, 4, 5])],
    [0, find_rain_traps_in([5, 4, 3, 2, 1, 0])],
    [9, find_rain_traps_in([4, 3, 2, 1, 2, 3, 4])],
    [2, find_rain_traps_in([1, 0, 1, 1, 1, 0, 1, 1])]
  ].each do |pair|
    p [pair.first == pair.last, pair.first, pair.last]
  end
end
```


For more information on the "Rain Trap" problem see this student [blog post](https://medium.com/@j.masland/raindrops-keep-falling-on-my-array-9e3fb4eda37e#.eemc1gbeq).








***








### 2D Array Diagonals


Given the dimension of a square (2D array), return the collection of all its diagonal paths.

A square has the same width and height. Thus all of the information needed to create a 2D representation of that square is one of those dimensions.

This also means it is all that we need to find all of the possible diagonal paths of that square.

Only count each path once, paths going left to right and right to left are included, and paths with a length of 1 count i.e. `0,0` is right to left path.

#### Example spec:

```language-ruby
describe 'diagonals' do
  it 'it returns arrays of coordinates representing each diagonal path through a 2D array of size n x n' do

    # [
    #   [[0, 0], [1, 0], [2, 0]],
    #   [[0, 1], [1, 1], [2, 1]],
    #   [[0, 2], [1, 2], [2, 2]]
    # ]

    answer =  [
      [[0, 0]],
      [[0, 1], [1, 0]],
      [[0, 2], [1, 1], [2, 0]],
      [[1, 2], [2, 1]],
      [[2, 2]],
      [[2, 0]],
      [[1, 0], [2, 1]],
      [[0, 0], [1, 1], [2, 2]],
      [[0, 1], [1, 2]],
      [[0, 2]],
    ]
    expect(diagonals(3)).to match_array answer
  end

  it 'works for larger arrays' do

    # [
    #   [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0]],
    #   [[0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1]],
    #   [[0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2]],
    #   [[0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3]],
    #   [[0, 4], [1, 4], [2, 4], [3, 4], [4, 4], [5, 4]],
    #   [[0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5]]
    # ]

    answer =  [
      [[0, 0]],
      [[0, 1], [1, 0]],
      [[0, 2], [1, 1], [2, 0]],
      [[0, 3], [1, 2], [2, 1], [3, 0]],
      [[0, 4], [1, 3], [2, 2], [3, 1], [4, 0]],
      [[0, 5], [1, 4], [2, 3], [3, 2], [4, 1], [5, 0]],
      [[1, 5], [2, 4], [3, 3], [4, 2], [5, 1]],
      [[2, 5], [3, 4], [4, 3], [5, 2]],
      [[3, 5], [4, 4], [5, 3]],
      [[4, 5], [5, 4]],
      [[5, 5]],
      [[5, 0]],
      [[4, 0], [5, 1]],
      [[3, 0], [4, 1], [5, 2]],
      [[2, 0], [3, 1], [4, 2], [5, 3]],
      [[1, 0], [2, 1], [3, 2], [4, 3], [5, 4]],
      [[0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5]],
      [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]],
      [[0, 2], [1, 3], [2, 4], [3, 5]],
      [[0, 3], [1, 4], [2, 5]],
      [[0, 4], [1, 5]],
      [[0, 5]]
    ]
    expect(diagonals(6)).to match_array answer
  end
end
```

#### Solution in `O(n^2)`

This solution works by taking advantage of the properties of diagonals in a square. As we iterate up towards the mid diagonal (the longest diagonal) we know the length of the diagonal increases by one. Using this knowledge with the current `x`, `y`, and the overall `n` we can find the diagonal coordinates. We can also be sure they are correct without checking to see if they'd exist in an actual 2D array representation with width and height dimensions of `n` because of these properties of a square.

Here is the code.


```language-ruby
def diagonals(n)
  results = []
  
  # left to right

  # start a y of 0
  0.upto(n - 1) do |y|
    # initialize next index
    # in results as an array
    index = results.length
    results[index] = []

    # we know that the length of
    # the diagonal will be equal to
    # the current y + 1
    (y + 1).times do |x|

      # coord
      #   x: x
      #   y: y - x
      result = [x, y - x]
      results[index] << result
    end
  end

  # now we iterate backwards
  # on the y axis
  # starting from n - 2
  (n - 2).downto(0) do |y|
    index = results.length
    results[index] = []

    # same diagonal length will always apply
    (y + 1).times do |x|

      # coord
      #   x: n - y - 1 + x
      #   y: n - x - 1
      result = [n - y - 1 + x, n - x - 1]
      results[index] << result
    end
    p results[index]
  end

  # right to left
  0.upto(n - 1) do |y|
    index = results.length
    results[index] = []
    (y + 1).times do |x|

      # coord
      #   x: n - y - 1 + x
      #   y: x
      result = [n - y - 1 + x, x]
      results[index] << result
    end
    p results[index]
  end

  (n - 2).downto(0) do |y|
    index = results.length
    results[index] = []
    (y + 1).times do |x|


      # coord:
      #   x: x
      #   y: n - y - 1 + x
      result = [x, n - y - 1 + x]
      results[index] << result
    end
    p results[index]
  end

  results
end


if __FILE__ == $0
  diagonals(3)
  #=>[
  #   [[0, 0]],
  #   [[0, 1], [1, 0]],
  #   [[0, 2], [1, 1], [2, 0]],
  #   [[1, 2], [2, 1]],
  #   [[2, 2]],
  #   [[2, 0]],
  #   [[1, 0], [2, 1]],
  #   [[0, 0], [1, 1], [2, 2]],
  #   [[0, 1], [1, 2]],
  #   [[0, 2]],
  # ]

  diagonals(6)
  #=>[
  #   [[0, 0]],
  #   [[0, 1], [1, 0]],
  #   [[0, 2], [1, 1], [2, 0]],
  #   [[0, 3], [1, 2], [2, 1], [3, 0]],
  #   [[0, 4], [1, 3], [2, 2], [3, 1], [4, 0]],
  #   [[0, 5], [1, 4], [2, 3], [3, 2], [4, 1], [5, 0]],
  #   [[1, 5], [2, 4], [3, 3], [4, 2], [5, 1]],
  #   [[2, 5], [3, 4], [4, 3], [5, 2]],
  #   [[3, 5], [4, 4], [5, 3]],
  #   [[4, 5], [5, 4]],
  #   [[5, 5]],
  #   [[5, 0]],
  #   [[4, 0], [5, 1]],
  #   [[3, 0], [4, 1], [5, 2]],
  #   [[2, 0], [3, 1], [4, 2], [5, 3]],
  #   [[1, 0], [2, 1], [3, 2], [4, 3], [5, 4]],
  #   [[0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5]],
  #   [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]],
  #   [[0, 2], [1, 3], [2, 4], [3, 5]],
  #   [[0, 3], [1, 4], [2, 5]],
  #   [[0, 4], [1, 5]],
  #   [[0, 5]]
  # ]
end

```







***







### Integer Pairs with Difference


Given an array of positive integers, find all pairs that have a difference of a specified value `k`.


#### Example:

```language-ruby
# Input
[1, 9, 4, 2, 2, 4, 3, 8]

# Output
# => [[4, 9], [3, 8]]
```

#### Naive Solution

This solution works by brute forcing all the possibilities for each index of the array and then getting the unique pairs with a difference of `k`. It also uses `array.sort` which further slows this solution down, even though it is only sorting an array with length of 2.


```language-ruby
def pairs_with_difference(array, k)
  array.uniq!
  results = []
  array.each_with_index do |left, left_index|
    array.each_with_index do |right, right_index|
      unless left_index == right_index
        results << [left, right].sort if (left - right).abs == k
      end
    end
  end
  results.uniq
end

if __FILE__ == $0
  p pairs_with_difference([1, 9, 4, 2, 2, 4, 3, 8], 5)
  # => [[9, 4], [3, 8]]
end
```



#### Optimized Solution

This solution uses a hash to map out unique values in the array. Once that hash is constructed, we check to see if keys exist for the value of the current `key` plus `k`, which is also the same as checking to `a - b == k`.

```language-ruby
# O(n) Solution
def pairs_with_difference(array, k)
  # implementing uniq in-house O(n)
  unique = {}
  array.each do |num|
    unique[num] = num
  end

  results = []

  # instead of checking a - b = diff, we check if diff + b = a
  # i.e., we check if a exists in the hash
  unique.each do |key, value|
    results << [value, unique[k + value]] if unique[k + value]
  end

  return results
end

if __FILE__ == $0
  p pairs_with_difference([1, 9, 4, 2, 2, 4, 3, 8], 5)
  # => [[9, 4], [3, 8]]
end
```


See this student's blog post [Algorithms Warmup](http://strychemi.tumblr.com/post/137984763853/algorithms-warmup) for more information.







***






### Minimum  Sub-Array with a Zero Sum

Given an array of integers, find the smallest sub array with elements that add up to 0.


#### Slower Solution

This solution takes advantage of multiple ruby methods and works, however it is not very optimized in that it makes many iterations that can be avoided.

```language-ruby
def zero_sum_of(array)
  sub_arrays = []
  n = array.length - 1
  n.times do |i|
    i.upto(n) do |j|
      sub_arrays << array[i..j]
    end
  end


  sub_arrays = sub_arrays.select do |sub_array|
    sub_array.reduce(0) { |sum, value| sum += value } == 0
  end

  min = Float::INFINITY

  sub_arrays.select do |sub_array|
    total = sub_array.reduce(0) { |sum, value| sum+= value.abs }
    less_than = total < min
    min = total if less_than
    less_than
  end.min
end
```


#### Optimized `O(n)` Solution

This solution uses a hash to store sums and indexes to allow for solving the problem in `O(n)` time.

```language-ruby
def zero_sum_of(arr)

  sum = 0 # Stores sum to element[i - 1]
  min = arr.size + 1 # Size of the min sub array with sum 0
  hash = {} # key is current sum and value is the index
  sub_arr = [] # zero sum minimum sub-array

  arr.each_with_index do |item, index|

    sum += item

    if prev_index = hash[sum]
      len = index - prev_index
      if len < min
        min = len
        sub_arr = arr[prev_index + 1..index]
      end

    elsif sum == 0

      if (index + 1) < min
        sub_arr = arr[0..index]
        min = index + 1
      end

    end

    hash[sum] = index

  end

  return "Minimum length is #{min} and sub-array is #{sub_arr}" if min < arr.size + 1
  return "No zero sub minimal array found!"

end



if __FILE__ == $0
  p zero_sum_of([1,  2,  3, 4, 5, -15, 8, 11, 10])
  #=> "Minimum length is 6 and sub-array is [1, 2, 3, 4, 5, -15]"
  p zero_sum_of([1,  2,  3, 4, 23, 7, 2, -3, 3])
  #=> "Minimum length is 2 and sub-array is [-3, 3]"
  p zero_sum_of([8,  2,  -1, -3, 2, -6, -2, 6])
  #=> "Minimum length is 4 and sub-array is [2, -1, -3, 2]"
  p zero_sum_of([0, 1, 1])
  #=> "Minimum length is 1 and sub-array is [0]"
  p zero_sum_of([8, 2, -1, -3, 2, -6, -2, 6])
  #=> "Minimum length is 4 and sub-array is [2, -1, -3, 2]"
  p zero_sum_of([1, 2, 3, 4, 5, -15, 8, 11, 10])
  #=> "Minimum length is 6 and sub-array is [1, 2, 3, 4, 5, -15]"
  p zero_sum_of([1, 2, 3, 4, 23, 7, 2, -3, 3])
  #=> "Minimum length is 2 and sub-array is [-3, 3]"
end
```

See this student's [blog post](https://deepakackar.wordpress.com/algorithms/) for more information.









***







### Find All Prime Numbers in Range in `O(n log log n)` Time


The name of this problem says it all.


#### Brute Force Solution

First try to solve with the more brute force `O(n^2)` solution.


```language-ruby
def is_prime?(num)
 return false if num <= 1
 2.upto(Math.sqrt(num).to_i) do |x|
 return false if num % x == 0
 end
 true
end
```


#### Sieve of Eratosthenes


Now try implementing the [Sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes). Which solves this problem in `O(n log log n)`.

Basically the Sieve of Eratosthenes works by excluding multiples of prime numbers.

```language-ruby
def sieve_upto(highest)
  sieve = []
  (2..highest).each do |num|
    sieve[num] = num
  end
  (2..Math.sqrt(highest)).each do |num|
    next unless sieve[num]
    (num*num).step(highest, num) do |factor|
      sieve[factor] = nil
    end
  end
  sieve.compact
end
```


See this student's [blog post](https://medium.com/@jgisin/sieve-of-eratosthenes-42db4d70c612#.jrp83rml3) for more information.







***







### Find All Permutations of a String


Find all possible permutations of an input string. Do NOT use the built-in ruby `'Some string'.permutation` function.


#### Example

```lanuage-ruby
permutations("abc")

#=> ["abc", "acb", "bac", "bca", "cba", "cab"]
```



#### Solution

```language-ruby
def permutations(str, index=0, collection=[])
  # when index == str.size we know we have a permutation
  collection << str.dup if index == str.size

  # iterate from index to n - 1
  (index..str.size - 1).each do |swap|

    # swap that index with the nested index
    str[index], str[swap] = str[swap], str[index]

    # recursively call permutations on the result
    permutations(str, index + 1, collection)

    # swap back
    str[index], str[swap] = str[swap], str[index]
  end

  # return collected permutations
  collection
end

permutations('abc')

#=> ["abc", "acb", "bac", "bca", "cba", "cab"]
```

For more information check out this student's [blog post](https://medium.com/@julia.herron/interview-practice-find-all-possible-permutations-of-an-input-string-1f316f5692f1#.cbemj8ih4).












***










### Median of Two Sorted Arrays in `O(log n)`


Assuming two arrays, containing numbers, sorted ascending and being of the same length, find the median of the would-be combined array in O(log n) time.  In Ruby:


#### Solution


```language-ruby
def median( a ) 
  if a.length.odd?
    a[ a.length / 2]
  else
    (a[ (a.length / 2) - 1] + a[ a.length / 2]) / 2.0
  end
end

def median_of_two_sorted_arrays( arr1, arr2 )
  len = arr1.length
  
  return (arr1[0] + arr2[0]) / 2.0 if len == 1
  if len == 2
    return ( [ arr1[0], arr2[0] ].max + [ arr1[1], arr2[1] ].min ) / 2.0 
  end
  
  m1 = median( arr1 )
  m2 = median( arr2 )
  
  return m1 if m1 == m2
  
  if m1 < m2
    if arr1.length.odd?
      new_arr1 = arr1[ (len/2)..-1 ]
      new_arr2 = arr2[ 0..(len/2) ]
      median_of_two_sorted_arrays(new_arr1, new_arr2)
    else
      new_arr1 = arr1[ (len/2)..-1 ]
      new_arr2 = arr2[ 0...(len/2) ] 
      median_of_two_sorted_arrays(new_arr1, new_arr2)
    end
  else
    if arr1.length.odd?
      new_arr1 = arr1[ 0..(len/2) ] 
      new_arr2 = arr2[ (len/2)..-1 ]
      median_of_two_sorted_arrays(new_arr1, new_arr2)
    else
      new_arr1 = arr1[ 0...(len/2) ] 
      new_arr2 = arr2[ (len/2)..-1 ]
      median_of_two_sorted_arrays(new_arr1, new_arr2)
    end
  end
end
```

For more information about this solution have a look at this student's [blog post](https://kozondata.wordpress.com/2016/02/16/median-of-two-sorted-arrays/).





