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


