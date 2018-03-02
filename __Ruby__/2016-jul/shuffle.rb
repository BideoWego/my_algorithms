class Array
  def my_shuffle
    shuffled = []
    indexes = (0..length).to_a
    length.times do
      index = rand(indexes.length - 1)
      index = indexes.slice!(index, 1)
      shuffled << self[index.first]
    end
    shuffled
  end
end


if __FILE__ == $0
  [
    (1..10).to_a,
    (1..100).to_a,
    (1..1000).to_a,
    (1..10000).to_a,
    (1..100000).to_a,
    (1..1000000).to_a
  ].each do |a|
    p a.my_shuffle
  end
end




