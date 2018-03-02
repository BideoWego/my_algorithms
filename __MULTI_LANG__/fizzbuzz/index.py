if __name__ == "__main__":
  for i in range(0, 101):
    str = ''
    if i > 0:
      if i % 3 == 0: str = 'Fizz'
      if i % 5 == 0: str += 'Buzz'
    output = i if str == '' else str
    print(output)

