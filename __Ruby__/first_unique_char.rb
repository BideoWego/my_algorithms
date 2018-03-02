# First psuedocode, then write in Ruby, a function to find the first nonrepeated character in a string. Return null if all the characters repeat.

# Think about time complexity. What would happen if you passed your function a whole paragraph of text?




# "total".first_unique_char
# #=> "o"

# "teeter".first_unique_char
# #=> "r"

# "deed".first_unique_char
# #=> nil




# A Naive Solution

# time: O(n^2)

# A naive solution would be to have a loop that looks at each character in the string, and a nested loop to sweep the rest of the string, hoping not to find a match.




# A Better Solution

# Time: O(n)

# A better solution is to establish a hash table of characters and count how often they occur. Once you have created this histogram, you can sweep the string again and return the first character that has a count of one. Two sweeps of a string is still a linear time solution.


class String
  def first_unique_char
    # Create hash
    alpha = Hash.new(0)

    # Iterate and count chars
    each_char do |char|
      alpha[char] += 1
    end

    # Initialize result
    result = nil

    # Find first unique
    each_char do |char|
      if alpha[char] == 1
        result = char
        break
      end
    end

    # Return result
    result
  end
end



if __FILE__ == $0
  p "total".first_unique_char
  #=> "o"

  p "teeter".first_unique_char
  #=> "r"

  p "deed".first_unique_char
  #=> nil
end







