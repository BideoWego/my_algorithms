

def ways_to_count_change(cents, denominator=nil)
  denominator = 25 unless denominator

  next_denominator = {
    25 => 10,
    10 => 5,
    5 => 1
  }[denominator]

  return 1 unless next_denominator

  num_ways = 0
  i = 0
  while i * denominator <= cents
    next_cents = cents - i * denominator
    num_ways += ways_to_count_change(next_cents, next_denominator)
    i += 1
  end

  num_ways
end



if __FILE__ == $0
  p ways_to_count_change(4)
  #=> 1
  # 4 pennies

  p ways_to_count_change(5)
  #=> 2
  # 1 nickel or 5 pennies

  p ways_to_count_change(10)
  #=> 4
  # 1 dime, 2 nickels, 1 nickel and 5 pennies,
  # or 10 pennies

  p ways_to_count_change(100)
  #=> 242
end



