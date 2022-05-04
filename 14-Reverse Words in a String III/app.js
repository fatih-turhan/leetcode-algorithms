var reverseWords = function (s) {
  s = s.split(" ");
  let newList = [];
  for (let i = 0; i < s.length; i++) {
    newList.push(s[i].split("").reverse().join(""));
  }
  return newList.join(" ");
};

reverseWords("Let's take LeetCode contest");
