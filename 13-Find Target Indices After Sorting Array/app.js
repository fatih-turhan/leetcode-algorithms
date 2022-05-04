var targetIndices = function (nums, target) {
  nums.sort((a, b) => a - b);
  const arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      arr.push(i);
    }
  }
  return arr;
};

targetIndices([1, 2, 5, 2, 3], 2);
