# http://yucoding.blogspot.com/2013/05/leetcode-question-111-trapping-rain.html


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





