var numIdenticalPairs = function (nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i < j) {
        if (nums[i] === nums[j]) {
          total++;
        }
      }
    }
  }
  return total;
};

numIdenticalPairs([1, 2, 3, 1, 1, 3]);
