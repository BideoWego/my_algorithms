=begin

Write a monkey patch method for Fixnum `to_s26` that converts an integer into base 26 letters

Write a monkey patch method for String that `to_i26` that converts a string of letters into it's base 10 integer


Examples:

{
  1=>"a",
  26=>"z", 
  27=>"aa"
}
{
  :original=>"foobar",
  :to_i26=>78407932,
  :to_s26=>"foobar"
}
{
  :original=>1234567890,
  :to_s26=>"cywoqvj",
  :to_i26=>1234567890
}

Extra Credit, make it work for Bignum!

{
  :original=>"abcdefghijklmnopqrstuvwxyz", :to_i26=>256094574536617744129141650397448476, :to_s26=>"abcdefghijklmnopqrstuvwxyz"
}



=end




module Base26
  ALPHA = ('a'..'z').to_a

  module Number
    def to_s26
      # initialize an empty string
      str = ''

      # return that string if
      # value is not at least 1
      # which would be 'a'
      return str if self < 1

      # initialize quotient to this value
      quotient = self

      # until we get to 0
      until quotient.zero?
        # get the result and remainder
        # of (q - 1) / 26
        quotient, remainder = (quotient - 1).divmod(26)

        # prepent that str with
        # the value at the index of
        # the remainder
        str.prepend(ALPHA[remainder])
      end
      str
    end
  end
end


class Fixnum
  include Base26
  include Base26::Number
end


class Bignum
  include Base26
  include Base26::Number
end


class String
  include Base26

  def to_i26
    # initialize the return value to 0
    result = 0

    # ensure we only have lowercase alpha chars
    downcase!
    gsub!(/[^a-z]/, '')

    # iterate backwards over string
    (1..length).each do |index|
      # get char at index
      char = self[-index]

      # get numeric position in alpha
      position = ALPHA.index(char)

      # get the value of 26
      # to the power of the current index
      power = 26**(index - 1)

      # compensate for array being 0 indexed
      position += 1

      # add to result
      result += power * position
    end
    result
  end
end




if __FILE__ == $0
  p({
    1 => 1.to_s26,
    26 => 26.to_s26,
    27 => 27.to_s26
  })


  p({
    :original => 'foobar',
    :to_i26 => 'foobar'.to_i26,
    :to_s26 => 'foobar'.to_i26.to_s26
  })


  p({
    :original => 1234567890,
    :to_s26 => 1234567890.to_s26,
    :to_i26 => 1234567890.to_s26.to_i26
  })


  p({
    :original => 'abcdefghijklmnopqrstuvwxyz',
    :to_i26 => 'abcdefghijklmnopqrstuvwxyz'.to_i26,
    :to_s26 => 'abcdefghijklmnopqrstuvwxyz'.to_i26.to_s26
  })
end



