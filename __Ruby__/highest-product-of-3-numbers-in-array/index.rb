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




