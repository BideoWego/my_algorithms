MAP = Hash.new({
  "a" => ".-",
  "b" => "-...",
  "c" => "-.-.",
  "d" => "-..",
  "e" => ".",
  "f" => "..-.",
  "g" => "--.",
  "h" => "....",
  "i" => "..",
  "j" => ".---",
  "k" => "-.-",
  "l" => ".-..",
  "m" => "--",
  "n" => "-.",
  "o" => "---",
  "p" => ".--.",
  "q" => "--.-",
  "r" => ".-.",
  "s" => "...",
  "t" => "-",
  "u" => "..-",
  "v" => "...-",
  "w" => ".--",
  "x" => "-..-",
  "y" => "-.--",
  "z" => "--..",
  " " => " ",
  "1" => ".----",
  "2" => "..---",
  "3" => "...--",
  "4" => "....-",
  "5" => ".....",
  "6" => "-....",
  "7" => "--...",
  "8" => "---..",
  "9" => "----.",
  "0" => "-----"
})


def encrypt(str)
  words = str.split(' ')
  words.map do |word|
    word.chars.map do |letter|
      MAP[letter]
    end.join
  end.join(' ')
end


def decrypt(str)
  words = str.split(' ')
  words.map do |word|
    word.chars.map do |letter|
      MAP.key(letter)
    end.join
  end.join(' ')
end


str = "the quick brown fox jumps over the lazy dog"

morse = encrypt(str)
str = decrypt(morse)

puts morse
puts str











