class String
  def list_permutations
    str = self
    n = length
    e = length
    a = Array.new(n**e) do |i|
      results = []
      j = e - 1
      while j >= 0
        results << str[i / n**j % n]
        j -= 1
      end
      results
    end
    a.reject { |value| value != value.uniq }
  end
end


def permutations(str, index=0, collection=[])
  # when index == str.size we know we have a permutation
  collection << str.dup if index == str.size

  # iterate from index to n - 1
  (index..str.size - 1).each do |swap|

    # swap that index with the nested index
    str[index], str[swap] = str[swap], str[index]

    # recursively call permutations on the result
    permutations(str, index + 1, collection)

    # swap back
    str[index], str[swap] = str[swap], str[index]
  end

  # return collected permutations
  collection
end


if __FILE__ == $0
  p permutations('abc')
end

