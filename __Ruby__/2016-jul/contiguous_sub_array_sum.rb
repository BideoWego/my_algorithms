# def contiguous_sub_array_sum(array, target)
#   n = array.length
#   (n-2).times do |i|
#     sum = 0
#     (i..(n-1)).each do |j|
#       sum += array[j]
#       return true if sum == target
#     end
#   end
#   false
# end


def contiguous_sub_array_sum(array, target)
  sum = 0
  last_value = array.first
  n = array.length
  (1..(n - 1)).each do |i|
    
  end
end


if __FILE__ == $0
  p contiguous_sub_array_sum([2, 4, 7, 8], 6)
  p contiguous_sub_array_sum([2, 5, 7, 8], 6)
  p contiguous_sub_array_sum([2, 1, 3, 8], 6)
  p contiguous_sub_array_sum([2, 1, 2, 1], 6)
  p contiguous_sub_array_sum([2, 1, 2, 1], 7)
  p contiguous_sub_array_sum([2, 1, 2, 1, 1], 7)
end





