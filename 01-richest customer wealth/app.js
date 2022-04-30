var maximumWealth = function (accounts) {
  let biggestTotal = 0;
  for (let i = 0; i < accounts.length; i++) {
    let total = 0;
    for (j = 0; j < accounts[i].length; j++) {
      total += accounts[i][j];
      if (total > biggestTotal) {
        biggestTotal = total;
      }
    }
  }
  return biggestTotal;
};
maximumWealth([
  [1, 2, 3],
  [3, 2, 1],
]);
