def sum_consecutives(array)
  counts = Hash.new(0)
  array.each do |num|
    counts[num] += 1
  end
  counts.map { |key, value| key * value }
end




if __FILE__ == $0
  a = [1, 1, 3, 4, 4, 4, 2]
  p sum_consecutives(a)
end


