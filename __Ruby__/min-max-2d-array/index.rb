def min_max_2d_of(array)
  min_x = min_y = Float::INFINITY
  max_x = max_y = -Float::INFINITY
  array.each do |item|
    min_x = item[0] < min_x ? item[0] : min_x
    min_y = item[1] < min_y ? item[1] : min_y
    max_x = item[0] > max_x ? item[0] : max_x
    max_y = item[1] > max_y ? item[1] : max_y
  end
  [[min_x, min_y], [max_x, max_y]]
end


if __FILE__ == $0
  p min_max_2d_of([[0, 1],[1, 2],[2, 3]])
  p min_max_2d_of([[-100, 1],[1, 2],[2, -100]])
end





