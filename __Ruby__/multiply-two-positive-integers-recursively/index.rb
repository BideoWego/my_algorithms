def mult(a, b)
  if b == 0
    0
  else
    a + mult(a, b - 1)
  end
end


if __FILE__ == $0
  p mult(1, 8)
  p mult(2, 8)
  p mult(3, 8)
  p mult(4, 8)
  p mult(5, 8)
  p mult(6, 8)
  p mult(7, 8)
  p mult(8, 8)
end

