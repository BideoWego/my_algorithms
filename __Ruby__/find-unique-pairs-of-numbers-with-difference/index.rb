
# O(n) Solution
def pairs_with_difference(array, k)
  # implementing uniq in-house O(n)
  unique = {}
  array.each do |num|
    unique[num] = num
  end

  results = []

  # instead of checking a - b = diff, we check if diff + b = a
  # i.e., we check if a exists in the hash
  unique.each do |key, value|
    results << [value, unique[k + value]] if unique[k + value]
  end

  return results
end

if __FILE__ == $0
  p pairs_with_difference([1, 9, 4, 2, 2, 4, 3, 8], 5)
  # => [[9, 4], [3, 8]]
end

