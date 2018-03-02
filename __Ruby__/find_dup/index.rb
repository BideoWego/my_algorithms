
def find_dup(array)
  hash = Hash.new(0)
  array.each do |i|
    hash[i] += 1
    return i if hash[i] > 1
  end
end

array = (1..100).to_a
array << 50

p find_dup(array)




