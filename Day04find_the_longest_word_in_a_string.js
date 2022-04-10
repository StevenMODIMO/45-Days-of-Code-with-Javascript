/**
 * Return the length of the longest word in the provided sentence.

Your response should be a number.
 */

function findLongestWordLength(str) {
  let newStr = str.split(" ");
  let len = 0;
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i].length > len) {
      len = newStr[i].length;
    }
  }
  return len;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
