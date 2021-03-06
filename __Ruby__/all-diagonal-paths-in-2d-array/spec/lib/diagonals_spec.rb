require 'diagonals'

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

