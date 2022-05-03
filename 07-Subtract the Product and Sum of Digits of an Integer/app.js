var subtractProductAndSum = function (n) {
  let total = 0;
  let mult = 1;
  n.toString()
    .split("")
    .forEach((item) => {
      total += Number(item);
      mult = Number(item) * mult;
    });
  return mult - total;
};

subtractProductAndSum(234);
