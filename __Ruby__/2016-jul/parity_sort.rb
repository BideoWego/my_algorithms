# parity_sort([1, 2, 3, 4, 5, 6, 7, 8]) => [2, 4, 6, 8, 1, 3, 5, 7]


def parity_sort(array)
  current_index = 0
  array.each_index do |index|
    if array[index].even?
      array[index], array[current_index] = array[current_index], array[index]
      current_index += 1
    end
  end
end

p parity_sort([1, 2, 3, 4, 5, 6, 7, 8])
