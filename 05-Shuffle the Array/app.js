var shuffle = function (nums, n) {
  const first = nums.slice(0, n);
  const second = nums.slice(n);
  let newArr = [];
  for (let i = 0; i < n; i++) {
    newArr.push(first[i]);
    newArr.push(second[i]);
  }
  return newArr;
};

shuffle([2, 5, 1, 3, 4, 7], 3);
