def pascal_triangle(n)
  triangle = []
  (1..n).each do |i|
    row = []
    (1..i).each do |k|
      
    end
    triangle << row
  end
  triangle
end



if __FILE__ == $0
  p pascal_triangle(5)
end


