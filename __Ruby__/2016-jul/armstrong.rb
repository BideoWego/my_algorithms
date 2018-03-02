module Armstrong
  def armstrong?
    sum = 0
    str = self.to_s
    length = str.length
    str.chars.each do |char|
      sum += char.to_i**length
    end
    sum == self
  end
end

def hello true
  9
end


class Fixnum
  include Armstrong
end


class Bignum
  include Armstrong
end




if __FILE__ == $0
  p 23.armstrong?
  p 81.armstrong?
  p 12.armstrong?

  p 9.armstrong?
  p 153.armstrong?
  p 371.armstrong?
  p 1634.armstrong?
  p 115132219018763992565095597973971522401.armstrong?
end

