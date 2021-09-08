const date = {
  day: 6,
  month: 2,
  year: 2020
}

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

function convertDateToString(date) {
 
var day = date.day;
var month = date.month;
var year = date.year;

if (day > 9 ) {
day = date.day.toString();
} else { 
day = "0" + date.day;
}

if ( month > 9) {
month = month.toString();
}  else {
  month = "0" + month;
}


year = year.toString();

date = {
  day: day,
  month: month,
  year: year,
}

return date;
}


var newdate = convertDateToString(date);


function convertDateToAllFormats(date) {
// DD-MM-YYYY
// MM-DD-YYYY
// YYYY-MM-DD
// DD-MM-YY
// MM-DD-YY
// YY-MM-DD
const ddmmyyyy = date.day + date.month + date.year;
const mmddyyyy = date.month + date.day + date.year;
const yyyymmdd = date.year + date.month + date.day;
const ddmmyy = date.day + date.month + date.year.slice(-2);
const mmddyy=  date.month + date.day + date.year.slice(-2);
const yymmdd = date.year.slice(-2) + date.month + date.day;

const array = [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
return array;
}

