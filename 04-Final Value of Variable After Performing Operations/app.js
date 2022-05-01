var finalValueAfterOperations = function (operations) {
  let number = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "X++" || operations[i] === "++X") {
      number++;
    }
    if (operations[i] === "X--" || operations[i] === "--X") {
      number--;
    }
  }
  return number;
};

finalValueAfterOperations(["--X", "X++", "X++"]);
