const string = "good";

function reverseString(str) {
  const strSplit = str.split("");
  const strReverse = strSplit.reverse();
  const strJoin = strReverse.join("");

  return strJoin;
}

function checkPalindrome(stringOne) {
  if (stringOne === reverseString(stringOne)) {
    return true;
  } else {
    return false;
  }
}
