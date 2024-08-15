// Your code here
export function pointsForWord(word) {
  // let points = 0;
  // for (const char of word) {
  //   if (["a", "e", "i", "o", "u"].includes(char)) {
  //     points += 1;
  //   } else {
  //     points += 2;
  //   }
  // }
  //OR
  let points = 0;
  for (const char of word) {
    points += /[a, e, i, o, u]/i.test(char) ? 1 : 2;
  }
  console.log(points)
  return points;
}