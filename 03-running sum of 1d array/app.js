var runningSum = function (nums) {
  let newArr = [];
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    newArr.push(total);
  }
  return newArr;
};
runningSum([1, 2, 3, 4]);
