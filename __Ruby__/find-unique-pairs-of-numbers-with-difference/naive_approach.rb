
def pairs_with_difference(array, k)
  array.uniq!
  results = []
  array.each_with_index do |left, left_index|
    array.each_with_index do |right, right_index|
      unless left_index == right_index
        results << [left, right].sort if (left - right).abs == k
      end
    end
  end
  results.uniq
end

if __FILE__ == $0
  p pairs_with_difference([1, 9, 4, 2, 2, 4, 3, 8], 5)
end

