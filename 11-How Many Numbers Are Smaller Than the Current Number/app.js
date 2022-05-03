var smallerNumbersThanCurrent = function (nums) {
  let resultArr = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        count++;
      }
      if (j === nums.length - 1) {
        resultArr.push(count);
      }
    }
  }
  return resultArr;
};

smallerNumbersThanCurrent([8, 1, 2, 2, 3]);
