# def median_of(a, b)
#   a.concat(b).sort!
#   index = a.length / 2
#   if a.length.even?
#     if a.length == 0
#       nil
#     else
#       result = (a[index-1] + a[index]).to_f / 2.0
#       result % 1 == 0 ? result.to_i : result
#     end
#   else
#     a[index]
#   end
# end


def median_of(array)
  n = array.length
  index = n / 2
  if n.odd?
    array[index]
  else
    if array.length == 0
      nil
    else
      result = (array[index - 1] + array[index]).to_f / 2.0
      result == result.to_i ? result.to_i : result
    end
  end
end


def combined_median_of(a, b)
  median_a = median_of(a)
  median_b = median_of(b)
  n = a.length

  if n <= 1
    result = (median_a + median_b).to_f / 2.0
    result == result.to_i ? result.to_i : result
  else
    index = n / 2
    if median_a < median_b
      a = a[index..-1]
      b = b[0..index]
    else
      a = a[0..index]
      b = b[index..-1]
    end
    combined_median_of(a, b)
  end
end




if __FILE__ == $0
  a = [1234, 123, 12, 1].sort
  b = [1234, 123, 12, 1].sort
  {
    a => b
  }.each do |a, b|
    p combined_median_of(a, b)
  end
end

