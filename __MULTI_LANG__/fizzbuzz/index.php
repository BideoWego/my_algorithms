<?php

for ($i = 0; $i < 101; $i++) {
  $str = '';
  if ($i > 0) {
    $str = ($i % 3 === 0) ? 'Fizz' : $str;
    $str .= ($i % 5 === 0) ? 'Buzz' : $str;
  }
  $output = ($str === '') ? $i : $str;
  echo '' . $output;
  echo "\n";
}

