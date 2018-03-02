101.times do |i|
  first = i % 3 == 0 ? 0 : 4
  last = i % 5 == 0 ? 8 : 4
  if i > 0 && last - first > 0
    puts 'FizzBuzz'[first, last]
  else
    puts i
  end
end








