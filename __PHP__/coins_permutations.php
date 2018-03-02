<?php

/*

Given a number of cents in USD as a positive integer, write a function `waysToCountChange()` that returns the number of possible ways to represent that change with the denominations: quarters, dimes, nickels and pennies.



 */


function ways_to_count_change($cents, $denominator=null) {
  if (!$denominator) {
    $denominator = 25;
  }

  $next_denominator = [
    25 => 10,
    10 => 5,
    5 => 1
  ][$denominator];

  if (!$next_denominator) {
    return 1;
  }

  $num_ways = 0;

  for ($i = 0; $i * $denominator <= $cents; $i++) {
    $next_cents = $cents - $i * $denominator;
    $num_ways += ways_to_count_change($next_cents, $next_denominator);
  }

  return $num_ways;
}



echo ways_to_count_change(4);
echo "\n";
//=> 1
// 4 pennies

echo ways_to_count_change(5);
echo "\n";
//=> 2
// 1 nickel or 5 pennies

echo ways_to_count_change(10);
echo "\n";
//=> 4
// 1 dime, 2 nickels, 1 nickel and 5 pennies,
// or 10 pennies

echo ways_to_count_change(100);
echo "\n";
//=> 242







