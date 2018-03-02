def find_the_missing_number_in(array)
  step = 1
  last = array.first
  array[1..-1].each do |number|
    return last + step if number - last > step
    last = number
  end
end

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



def find_the_missing_number_with_binary_search_in(array, direction=0)
  middle = array.length / 2

  p [middle, array[middle], array]

  if array.length <= 2
    if array[middle] > middle
      return middle
    elsif array[middle] < middle
      return middle - 1
    else
      return middle + 1
    end
  end

  if array[middle] == middle
    find_the_missing_number_with_binary_search_in(array[middle + 1..-1])
  else
    find_the_missing_number_with_binary_search_in(array[0..middle - 1])
  end
end





def generate_range_array_missing(number)
  (0..number + 1).to_a - [number]
end



if __FILE__ == $0
  test_numbers = [0, 1, 2, 200]
  results = []
  test_numbers.each do |number|
    array = generate_range_array_missing(number)
    # results << find_the_missing_number_in(array)
    # results << find_the_missing_number_with_binary_search_in(array)
    results << find_missing_number_with_sum(array)
  end
  p results == test_numbers
  p results
end


