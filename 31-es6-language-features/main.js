// spread operator
let nums = [1, 2, 3];
let moreNums = [...nums, 4, 5];

// rest operator

function multiply(...numsArray) {
  return numsArray.reduce((previous, current) => previous * current);
};

multiply(1, 3, 5, 6);
