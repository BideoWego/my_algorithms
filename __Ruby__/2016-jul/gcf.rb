def gpf(n)
  factors = []
  d = 2
  while n > 1
    while n % d == 0
      n /= d
    end
    d += 1
    if d*d > n
      factors << n if n > 1
      break
    end
  end
  factors
end


if __FILE__ == $0
  [
    600_851_475_143,
    14,
    21,
    28,
    32,
    51,
    113
  ].each do |n|
    puts "#{n}: #{gpf(n)}"
  end
end
