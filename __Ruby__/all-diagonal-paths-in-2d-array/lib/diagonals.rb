

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


