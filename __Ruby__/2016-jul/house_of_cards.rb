def house_of_cards(floors)
  ((1.5 * floors + 2) * (floors + 1)).to_i
end






if __FILE__ == $0
  p house_of_cards(0)
  p house_of_cards(1)
  p house_of_cards(2)
  p house_of_cards(3)
  p house_of_cards(4)
  p house_of_cards(5)
end

