# Given a sorted array of integers and a number n, perform a binary search on the array to find the index at which the number should be inserted. Return that index with a comparator to specify if n should be inserted above, below or exists at that index. Perform the search in-place.


# Example:

#    Input: [ 1, 2, 3 ], 4
#    Output: [ 2, 1 ]

#    Input: [ 1, 2, 3, 4, 5 ], 4
#    Output: [ 3, 0 ]

#    Input: [ 1, 2, 3, 5 ], 4
#    Output: [ 3, -1 ]


# 1. If the number exists in the array, return that index and 0 for the comparator
# 2. If the number does not, return the index at of the closest number and...
#    i. If n should be inserted before the number at the returned index the comparator should be -1
#    ii. If n should be inserted after the number at the returned index the comparator should be 1
# 3. If the array is empty return undefined

n = 1234

a = [
  0,
  1,
  12,
  123,
  1234,
  12345,
  123456
]

b = [
  1,
  12,
  123,
  1234,
  12345,
  123456
]

c = [
  1,
  12,
  123,
  12345
]

d = [
  1,
  12,
  123,
  124,
  125
]

e = []


def binary_search(array, n)
  return if array.empty?

  index = nil
  bottom_index = 0
  top_index = array.length
  i = 0
  while (top_index - bottom_index) > 1
    # Find the middle
    # by dividing the difference of top/bottom by 2
    # and add the bottom to normalize
    middle = ((top_index - bottom_index) / 2) + bottom_index


    # Uncomment to see values
    # by iteration
    i += 1
    puts "Iteration: #{i}"
    puts "#{n} <=> #{array[middle]}"


    # Always return the index
    # of the current middle
    index = middle


    if n > array[middle]
      # Move up bottom index
      bottom_index = middle + 1
    elsif n < array[middle]
      # Move up top index
      top_index = middle - 1
    else
      # Set bottom, top to middle
      top_index = bottom_index = middle
    end
  end


  # Set comparator
  comparator = 0
  if n > array[middle]
    comparator = 1
  elsif n < array[middle]
    comparator = -1
  end


  # return index and comparator
  return [index, comparator]
end




puts ["\n", '--- a ---']
p [a, binary_search(a, n)]
puts ["\n", '--- b ---']
p [b, binary_search(b, n)]
puts ["\n", '--- c ---']
p [c, binary_search(c, n)]
puts ["\n", '--- d ---']
p [d, binary_search(d, n)]
puts ["\n", '--- e ---']
p [e, binary_search(e, n)]

# Big number!
f = []
puts ["\n", '--- f ---']
i = 10**6
j = 0
i.times do
  f << j
  j += 1
end
p ['f', binary_search(f, n)]
















