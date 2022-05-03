var sumOfUnique = function (nums) {
  return nums
    .filter((item) => nums.indexOf(item) === nums.lastIndexOf(item))
    .reduce((tot, item) => {
      return tot + item;
    }, 0);
};
