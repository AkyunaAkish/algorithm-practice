const nums = [1, 2, 3, 3, 3, 4, 5, 5, 6, 7, 7, 8, 9, 9];
const counts = new Map();
let highestCount = 0;
let highestCountNum = 0;

for (const num of nums) {
  if (counts.has(num)) {
    counts.set(num, counts.get(num) + 1);
  } else {
    counts.set(num, 1);
  }

  if (counts.get(num) > highestCount) {
    highestCount = counts.get(num);
    highestCountNum = num;
  }
}

console.log("counts", counts);
console.log("highestCountNum", highestCountNum);

// result
// counts Map(9) {
//    1 => 1,
//    2 => 1,
//    3 => 3,
//    4 => 1,
//    5 => 2,
//    6 => 1,
//    7 => 2,
//    8 => 1,
//    9 => 2
//  }
//  highestCountNum 3
