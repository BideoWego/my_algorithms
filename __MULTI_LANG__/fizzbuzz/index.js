// FizzBuzz in 1 line

//How it works:
//slice creates a sub string from FizzBuzz
//i % 3 && 4 returns 0 when i is divisible by 3
//and 4 when not
//i % 5 ? 4 : 8 returns 8 when i is divisible by 5
// and 4 when not
//if the sliced string is empty it is considered false
//thus i is output to the console
//the 4 in i % 3 && 4 ensures that when
//i is divisible by neither 3 or 5 that an empty string
//sliced at index 4 is returned, evaluating to false
//and outputting i
for (var i = 0; i++ < 100; console.log( 'FizzBuzz'.slice(i % 3 && 4, i % 5 ? 4 : 8 ) || i));






