def rotate(str)
  char = str.chars.shift
  str = str[1..-1]
  str.chars.push(char).join
end


def is_rotation(a, b)
  original = a
  a = rotate(a)
  until original == a
    a = rotate(a)
    p [original, a, b]
    return true if b == a
  end
  false
end


if __FILE__ == $0
  p is_rotation('apple', 'leapp')
  p is_rotation('apple', 'foobar')
end

