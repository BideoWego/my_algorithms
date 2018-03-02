class MorseCode
  CHAR_BREAK = ' '
  WORD_BREAK = '  '

  ENCRYPTION_MAP = {
    'a' => '.-',
    'b' => '-...',
    'c' => '-.-.',
    'd' => '-..',
    'e' => '.',
    'f' => '..-.',
    'g' => '--.',
    'h' => '....',
    'i' => '..',
    'j' => '.---',
    'k' => '-.-',
    'l' => '.-..',
    'm' => '--',
    'n' => '-.',
    'o' => '---',
    'p' => '.--.',
    'q' => '--.-',
    'r' => '.-.',
    's' => '...',
    't' => '-',
    'u' => '..-',
    'v' => '...-',
    'w' => '.--',
    'x' => '-..-',
    'y' => '-.--',
    'z' => '--..',
    '0' => '-----',
    '1' => '.----',
    '2' => '..---',
    '3' => '...--',
    '4' => '....-',
    '5' => '.....',
    '6' => '-....',
    '7' => '--...',
    '8' => '---..',
    '9' => '----.',
    CHAR_BREAK => WORD_BREAK
  }

  DECRYPTION_MAP = {
    '.-'       => 'a',
    '-...'     => 'b',
    '-.-.'     => 'c',
    '-..'      => 'd',
    '.'        => 'e',
    '..-.'     => 'f',
    '--.'      => 'g',
    '....'     => 'h',
    '..'       => 'i',
    '.---'     => 'j',
    '-.-'      => 'k',
    '.-..'     => 'l',
    '--'       => 'm',
    '-.'       => 'n',
    '---'      => 'o',
    '.--.'     => 'p',
    '--.-'     => 'q',
    '.-.'      => 'r',
    '...'      => 's',
    '-'        => 't',
    '..-'      => 'u',
    '...-'     => 'v',
    '.--'      => 'w',
    '-..-'     => 'x',
    '-.--'     => 'y',
    '--..'     => 'z',
    '-----'    => '0',
    '.----'    => '1',
    '..---'    => '2',
    '...--'    => '3',
    '....-'    => '4',
    '.....'    => '5',
    '-....'    => '6',
    '--...'    => '7',
    '---..'    => '8',
    '----.'    => '9',
    WORD_BREAK => CHAR_BREAK
  }

  def self.encrypt(str)
    morse_code = ''
    str.downcase.chars.each do |key|
      if ENCRYPTION_MAP[key]
        morse_code += ENCRYPTION_MAP[key]
        morse_code += CHAR_BREAK unless key == CHAR_BREAK
      end
    end
    morse_code.strip
  end

  def self.decrypt(str)
    plain_text = []
    str.split(WORD_BREAK).each do |word|
      word.split(CHAR_BREAK).each do |key|
        plain_text << DECRYPTION_MAP[key] if DECRYPTION_MAP[key]
      end
      plain_text << CHAR_BREAK
    end
    decrypted = plain_text.join
    decrypted.strip
  end
end



