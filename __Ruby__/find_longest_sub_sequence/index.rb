
# Find longest sub sequence of array


# Works, but don't do this

def find_longest_sub(array)
  sequences = {}
  array.each do |num|
    sequences[num] ||= []
    sequences[num] << num
    if sequences[num - 1]
      sequences[num] = [sequences[num - 1], sequences[num]].flatten
      sequences.delete(num - 1)
    end
  end
  sequences.max_by { |key, value| value.length }
end

array = [5, 1, 3, 2]


p find_longest_sub(array)

