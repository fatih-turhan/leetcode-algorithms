var countSmaller = function (nums) {
  let resultArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === nums.length - 1) {
      resultArr.push(0);
    }
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (j > i) {
        console.log(i, j);
        if (nums[i] > nums[j]) {
          count++;
        }
        if (j === nums.length - 1) {
          resultArr.push(count);
        }
      }
    }
  }
  console.log(resultArr);
  return resultArr;
};

// countSmaller([5, 2, 6, 1]);

countSmaller([-1, -1]);

// time exceeds error
