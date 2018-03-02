
# https://gist.github.com/loganhasson/8937903

def sieve_primes(n)
  # Set up an array with all the numbers from 0 to the max
  primes = (0..n).to_a

  # Set both the first and second positions (i.e., 0 and 1) to nil, as they
  # aren't prime.
  primes[0] = primes[1] = nil
  counter = 0

  # Iterate through primes array
  primes.each do |i|

    # Skip if nil
    next unless i

    # Break if we are past the square root of the max value
    squared = i ** 2
    break if squared > n

    # Start at the square of the current number, and step through.
    # Go up to the max value, by multiples of the current number, and replace
    # that value with nil in the primes array
    counter += 1
    squared.step(n, i) { |j| primes[j] = nil }
  end

  # Remove nil values
  primes.compact
end


p sieve_primes(1000)






