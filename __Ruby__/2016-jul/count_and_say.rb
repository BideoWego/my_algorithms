

def count_and_say(n)
  counts = []
  chars = n.to_s.chars
  last_char = nil
  chars.each do |char|
    if last_char != char
      counts << []
    end
    counts.last << char
    last_char = char
  end
  counts.map { |count| "#{count.length}#{count.first}" }.join
end




if __FILE__ == $0
  n = 1
  20.times do
    n = count_and_say(n)
    p n
  end
end



