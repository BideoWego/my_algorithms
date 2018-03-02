def drop_egg(egg, floor)
  if floor <= 50
    egg
  end
end


def make_an_omelette
  eggs = [1, 1]
  floor = 1
  while floor <= 100 && !eggs.empty?
    egg = eggs.pop
    egg = drop_egg(egg, floor)
    if egg
      eggs.push(egg)
    else
      return floor - 1
    end
    floor += 1
  end
  floor
end


if __FILE__ == $0
  puts make_an_omelette
end

