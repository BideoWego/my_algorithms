def find_house(n)
  houses = Hash.new(0)
  1.upto(n / 10) do |elf|
    1.upto(n / 10) do |number|
      houses[number * elf] += elf * 10
    end
  end

  houses.find { |house_num, presents| presents >= n }.first
end


# num_presents = 1_000      # => house: 48
# num_presents = 10_000     # => house: 360
# num_presents = 100_000    # => house: 3120
# num_presents = 1_000_000  # => house: 27720
# num_presents = 10_000_000 # => house: 249480
# num_presents = 36_000_000 # => house: 831600

if __FILE__ == $0
  p find_house(1_000)
  p find_house(10_000)
  p find_house(100_000)
  p find_house(1_000_000)
  p find_house(10_000_000)
  p find_house(36_000_000)
end

