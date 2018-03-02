def find_single_element(array)
  # counters = Hash.new(0)
  # array.each do |item|
  #   counters[item] += 1
  # end
  # result = nil
  # counters.each do |key, value|
  #   result = key if value == 1
  # end
  # result

  result = array.first
  array[1..-1].each { |item| result ^= item }
  result
end




if __FILE__ == $0
  p find_single_element([1, 1, 2, 2, 3, 3, 4, 4, 5])
  p find_single_element([1, 1, 2, 2, 3, 3, 4, 5, 5])
  p find_single_element([1, 1, 2, 2, 3, 4, 4, 5, 5])
  p find_single_element([1, 1, 2, 3, 3, 4, 4, 5, 5])
  p find_single_element([1, 2, 2, 3, 3, 4, 4, 5, 5])
end


