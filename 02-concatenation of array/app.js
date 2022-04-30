var getConcatenation = function (nums) {
  let list = [];
  for (let i = 0; i < nums.length; i++) {
    list.push(nums[i]);
  }
  for (let i = 0; i < nums.length; i++) {
    list.push(nums[i]);
  }
  return list;
};

getConcatenation([1, 2, 1]);
