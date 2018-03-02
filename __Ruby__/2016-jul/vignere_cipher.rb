

def vignere_cipher(word, key)
  alpha = ('a'..'z').to_a
  chars = word.chars
  cipher = ''
  chars.each_with_index do |char, index|
    num = key[index % key.length]
    coded_index = alpha.index(char) + num
    coded_index -= alpha.length if coded_index > alpha.length
    cipher += alpha[coded_index]
  end
  cipher
end




if __FILE__ == $0
  key = [1, 2, 3]
  word = 'iloveruby'
  p vignere_cipher(word, key)
end



