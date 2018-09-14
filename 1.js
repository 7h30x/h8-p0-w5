/* 
Logic Challenge: Deep Sum

Level kedalaman array akan di-asumsikan selalu 3, [ [ [ ] ] ], jika yang diberikan adalah array kosong maka kembalikan nilai 'No number'
input: nested array
output: sum of all values in input array
logic: create new single dimension array with all the values; use .reduce to sum values to return one total 
*/

function deepSum (arr) {
    if (!arr.length) {
      return "No number"
    }
    var resultArr= arr.reduce( (accumulator, innerArray) => accumulator.concat(innerArray), []).reduce((accumulator, innerArray) => accumulator.concat(innerArray), [])
    var result=0;
    for (num of resultArr) {
      result+=num
    }
    return result;
}



//TEST CASE
console.log(deepSum([
  [
    [4, 5, 6],
    [9, 1, 2, 10],
    [9, 4, 3]
  ],
  [
    [4, 14, 31],
    [9, 10, 18, 12, 20],
    [1, 4, 90]
  ],
  [
    [2, 5, 10],
    [3, 4, 5],
    [2, 4, 5, 10]
  ]
])); // 316

console.log(deepSum([
  [
    [20, 10],
    [15],
    [1, 1]
  ],
  [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [2],
    [9, 11]
  ],
  [
    [3, 5, 1],
    [1, 5, 3],
    [1]
  ],
  [
    [2]
  ]
])); // 156

console.log(deepSum([])); // No number