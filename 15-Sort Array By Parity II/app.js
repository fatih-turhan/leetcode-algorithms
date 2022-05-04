var sortArrayByParityII = function (nums) {
  const odd = [];
  const even = [];
  nums.forEach((item) => {
    if (item % 2) {
      even.push(item);
    } else {
      odd.push(item);
    }
  });
  let list = [];
  for (let i = 0; i < odd.length; i++) {
    list.push(odd[i]);
    list.push(even[i]);
  }
  return list;
};

sortArrayByParityII([4, 2, 5, 7]);
