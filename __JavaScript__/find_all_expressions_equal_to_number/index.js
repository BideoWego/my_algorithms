// The first 12 digits of pi are 314159265358.
// We can make these digits into an expression
// evaluating to 27182 (first 5 digits of e) as follows:
//
// 3141 * 5 / 9 * 26 / 5 * 3 - 5 * 8 = 27182
// or
// 3 + 1 - 415 * 92 + 65358 = 27182
//
// Notice that the order of the input digits is not changed.
// Operators (+,-,/, and *) are simply inserted to create the expression.
//
// Write a function to take a string of numbers and a target number,
// and return all the ways that those numbers can be formed
// into expressions evaluating to the target.
//
// For example:
// f("314159265358", 27182) should print:
// 3 * 1 + 4 * 159 + 26535 + 8 = 27182
// 3 / 1 + 4 * 159 + 26535 + 8 = 27182
// 3 + 1 * 4 * 159 + 26535 + 8 = 27182
// 3 + 1 - 415 * 92 + 65358 = 27182
// 3 * 14 * 15 + 9 + 26535 + 8 = 27182
// 3141 * 5 / 9 * 26 / 5 * 3 - 5 * 8 = 27182
// 3141 / 5 / 9 * 26 * 5 * 3 - 5 * 8 = 27182






// Create a tree that is the "starter"
// Next branch points to the permutations of the num string where first entry is first digit of string
// ex) "123"
//   (1) (12) (123)

// Then next branch points to an operator
// ex) "123"
//      (1)         (12)           (123)
// (+)(-)(*)(/)  (+)(-)(*)(/)    (none left)

// Then next barnch points to the permutations of the nums that are left
// ex) "123"
//      (1)         (12)           (123)
// (+)(-)(*)(/)  (+)(-)(*)(/)    (none left)
//   /     \         |
// (2)    (23)      (3)

// Then repeat the steps above until you run out of chars to work with
// ex) "123"
//                (1)         (12)           (123)
//           (+)(-)(*)(/)  (+)(-)(*)(/)    (none left)
//             /     \               \
//           (2)    (23)             (3)
//   (+)(-)(*)(/)   (+)(-)(*)(/)    (+)(-)(*)(/)
//       |
//      (3)




function f(n) {
  // create a tree with a root of first digit
  // find all paths
  // each node's children are held in an object
  // keys are the operators
  // values are the numbers to be passed between those operators
}




if (require.main === module) {
  
}




