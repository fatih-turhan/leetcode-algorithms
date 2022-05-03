var findDifference = function (nums1, nums2) {
  function check(nums1, nums2) {
    let list = [];
    for (let i = 0; i < nums1.length; i++) {
      if (!nums2.includes(nums1[i])) {
        if (!list.includes(nums1[i])) {
          list.push(nums1[i]);
        }
      }
    }
    return list;
  }
  return [check(nums1, nums2), check(nums2, nums1)];
};

findDifference([1, 2, 3], [2, 4, 6]);

findDifference([1, 2, 3, 3], [1, 1, 2, 2]);
