
const shuffle = array => {
  for (let i = array.length - 1; i >= 0; i--) {
    const diff = array.length - i;
    const unshuffled = array.length - diff;
    const rand = Math.random();
    const randIndex = Math.floor(rand * unshuffled);
    [
      array[i],
      array[randIndex]
    ] = [
      array[randIndex],
      array[i]
    ]
  }

  return array;
}

console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8 , 9, 10]));
