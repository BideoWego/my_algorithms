def rotate(array)

  item = array.shift
  array << item
  array
end


def possible_pairs(array)
  pairs = []
  array.each do |item|
    duplicate = array.dup
    duplicate = rotate(duplicate)
    pairs << duplicate
    array = duplicate
    p pairs
  end
  pairs
end



if __FILE__ == $0
  # p possible_pairs(['Kit', 'Bongo'])
  # p possible_pairs(['Kit', 'Bongo', 'Flim-flam', 'George'])
  p possible_pairs(['Kit', 'Bongo', 'Flim-flam', 'George', 'Kyle', 'Mark'])
  # p rotate([1,2,3,4])
end



