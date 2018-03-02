










# Don't do this, no seriously, it is ridiculous

do_not_use_fonts_like_this! unless you_want_to_get_hired







def counting_game(players=10, count=100)
  person = 1
  direction = 1
  (1..count).each do |current_number|
    is_multiple_of_7 = current_number % 7 == 0
    is_multiple_of_11 = current_number % 11 == 0

    increment = is_multiple_of_11 ? 2 : 1
    direction = -direction if is_multiple_of_7

    if direction > 0
      person += increment
    else
      person -= increment
    end

    if person > players
      person -= players
    elsif person < 1
      person += players
    end
  end
  person
end


if __FILE__ == $0
  p counting_game(10, 6)
  p counting_game(10, 12)
end








