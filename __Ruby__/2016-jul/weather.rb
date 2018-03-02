require 'httparty'

KEY = '1d99a8d4da2b439a899160455162007'

p HTTParty.get('http://api.apixu.com/v1/forecast.json?key=KEY_HERE&q=new york&days=7').body






