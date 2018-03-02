



***




### Max Product of 3 Integers in an Array

Given an array of integers (positive and negative), find the highest product you can get from three of the integers. **Don't forget negative values!**

**DO NOT USE RUBY SORT**

**ASSUME AT LEAST 3 INTEGERS GIVEN**


#### Solution `O(n^2)`


This solution is marked as `O(n^2)` because of it's nested loops. The ruby `array.max` function is looping inside each `times` loop to find the max of the array. The `array.min` loop is looping each `times` loop to find the min. While in practice with small arrays this nested iteration goes fairly quickly, it should be noted that it is an expensive operation.

The comments in the code below explain how the solution works. Part of the key here is to remove min and max values after each is found. A crucial part is `concat`enating the max values back onto the original array before getting the min values. This is because in small arrays an integer can appear in both the min and max arrays.


```language-ruby
def highest_product_of_three_integers_in(array)
  # bail unless we have 3 integers
  return unless array.length >= 3

  # initialize containers for the various
  # maxs and mins
  maximums = []
  minimums = []

  # the answer is either:
  #   max1 * max2 * max3
  # or
  #   max1 * min1 * min2

  # get 3 maxs
  3.times do
    max = array.max
    index = array.index(max)
    array.slice!(index, 1)
    maximums << max
  end

  # put maxs back
  # because one may also
  # be a min
  array.concat(maximums)

  # get 2 mins
  2.times do
    min = array.min
    index = array.index(min)
    array.slice!(index, 1)
    minimums << min
  end if array.length > 1

  # get the max between
  #   max1 * max2 * max3
  # and
  #   max1 * min1 * min2
  result = [
    maximums.reduce(:*),
    minimums.length > 1 ? maximums.shift * minimums.reduce(:*) : 0
  ].max

  # return result
  result
end


if __FILE__ == $0
  p highest_product_of_three_integers_in([1, 2, 3, 4])
  #=> 24
  p highest_product_of_three_integers_in([1, 2, 3, -4])
  #=> 6
  p highest_product_of_three_integers_in([1, 2, -3, -4])
  #=> 24
  p highest_product_of_three_integers_in([1, -2, -3, -4])
  #=> 12
  p highest_product_of_three_integers_in([0, 1, -2, -3, -4])
  #=> 12
  p highest_product_of_three_integers_in([0, -1, -2, -3, -4])
  #=> 0
  p highest_product_of_three_integers_in([2,10,-1,10,10,9,2])
  # => 1000
  p highest_product_of_three_integers_in([2,10,-1,10])
  # => 200
  p highest_product_of_three_integers_in([1, 10, -5, 1, -100])
  # => 5000
  p highest_product_of_three_integers_in([-1,6,10,-12,9,12])
  # => 1080
  p highest_product_of_three_integers_in([-1,6,10,-12,9,-8])
  # => 960
  p highest_product_of_three_integers_in([1,6,10,12,9,8])  
  # => 1080
  p highest_product_of_three_integers_in([-1,-6,-10,-12,-9,-8])
  # => -48
  p highest_product_of_three_integers_in([-5,-6,1,2])
  # => 60
  p highest_product_of_three_integers_in([1,-6,-5,2])
  # => 60
end
```







***







### Finding the Missing Integer in a Sorted Sequence

Assume you have a sorted array of integers from 0 to `n` and one is missing. Find the missing integer.


#### Simple Naive (But Cool) Solution

Subtract the sum of all numbers from the `array.length` down to `0` from the sum of all numbers in the array.

The difference between the two sums will be equal to the number missing. This however is in `O(n)` time.

```language-ruby
def sum(n)
  result = 0
  until n == -1
    result += n
    n -= 1
  end
  result
end


def find_missing_number_with_sum(array)
  sum(array.length) - array.reduce(:+)
end


find_missing_number_with_sum([0, 1, 2, 4, 5, 6, 7, 8, 9, 10])
#=> 3
```


#### Better solution

Iterate over the array. When a number is found with an index not equal to its value, return that `number + 1`.

This however is still `O(n)`.

```language-ruby
def find_the_missing_number_in(array)
  step = 1
  last = array.first
  array[1..-1].each do |number|
    return last + step if number - last > step
    last = number
  end
end

find_the_missing_number_in([0, 1, 2, 4, 5, 6, 7, 8, 9, 10])
#=> 3
```


#### Best solution

Use a binary search to exclude half of the array on each pass. If an index is not equal to its value, take the left side of the array. If it is, take the left.

This technique is tricky but results in `O(log n)` time.


















