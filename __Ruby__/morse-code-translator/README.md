# Morse Code Translator

A simple class that encrypts and decrypts
strings of morse code according to the international
standard [here](https://en.wikipedia.org/wiki/Morse_code).

Uses 1 space between chars in the encrypted code
Uses 2 extra spaces between words in encrypted code

## How to use
### Works with letters (case insensitive and decryption value is always lower case)

```ruby
require 'morse_code.rb'

str = 'the quick brown fox jumped over the lazy dog'
# => "the quick brown fox jumped over the lazy dog"

encrypted = MorseCode.encrypt(str)
# => "- .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. . -..   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --."

decrypted = MorseCode.decrypt(encrypted)
# => "the quick brown fox jumped over the lazy dog"

```

### Works with numbers

```ruby
encrypted = MorseCode.encrypt('0123456789 9876543210')
# => "----- .---- ..--- ...-- ....- ..... -.... --... ---.. ----.   ----. ---.. --... -.... ..... ....- ...-- ..--- .---- -----"

decrypted = MorseCode.decrypt(encrypted)
# => "0123456789 9876543210"
```

by [Bideo Wego](https://github.com) as a Kata from [CodeWars](http://www.codewars.com/)



