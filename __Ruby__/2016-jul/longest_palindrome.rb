def longest_palindrome(str)

  # Init hash counter
  letters = Hash.new(0)

  # Count chars
  str.chars.each do |char|
    letters[char] += 1
  end

  # Get odd and even counted chars
  odds = []
  evens = []
  letters.each do |key, value|
    if value.even?
      evens << key
    elsif value >= 3
      evens << key
      odds << key
    else
      odds << key
    end
  end

  # Middle char will be
  # first char with odd count
  middle = odds.first

  # Construct palindrome
  palindrome = ''
  left = ''
  evens.each do |char|
    left += char * (letters[char] / 2)
  end
  right = left.reverse

  palindrome = "#{left}#{middle}#{right}"
end


if __FILE__ == $0
  p longest_palindrome('abc')
  p longest_palindrome('aabbcc')
  p longest_palindrome('aabbccd')
  p longest_palindrome('aba')
  p longest_palindrome('aabbaab')
  p longest_palindrome('aabbaabcccc')
end




