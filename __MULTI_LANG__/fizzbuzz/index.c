#include <stdio.h>

int main(const int argc, const char * argv[]) {

  char * str = "FizzBuzz";
  for (int i = 0; i < 101; i++) {
    int start = i % 3 == 0 ? 0 : 4;
    int end = i % 5 == 0 ? 8 : 4;
    if (end - start > 0 && i > 0) {
      printf("%.*s\n", end, str + start);
    } else {
      printf("%d\n", i);
    }
  }

  return 0;
}





