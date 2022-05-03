var busyStudent = function (startTime, endTime, queryTime) {
  let count = 0;
  for (let i = 0; i < startTime.length; i++) {
    if (endTime[i] - startTime[i] >= queryTime) {
      count++;
    }
  }
  return count;
};

busyStudent([1, 2, 3], [3, 2, 7], 4);
// kabul olmadı
