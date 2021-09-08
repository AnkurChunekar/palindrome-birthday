const date = {
  day: 1,
  month: 5,
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
const ddmmyyyy = date.day + date.month + date.year;
const mmddyyyy = date.month + date.day + date.year;
const yyyymmdd = date.year + date.month + date.day;
const ddmmyy = date.day + date.month + date.year.slice(-2);
const mmddyy=  date.month + date.day + date.year.slice(-2);
const yymmdd = date.year.slice(-2) + date.month + date.day;

const array = [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
return array;
}

function checkPalindromeForAllDates(date) {
var arrayOfAllFormats = convertDateToAllFormats(date);
var flag = false; 
  for (i=0; i < arrayOfAllFormats.length; i++) {
   if (checkPalindrome(arrayOfAllFormats[i])) {
     flag = true;
     break;
   }
}
return flag;
}


function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  if (year % 4 === 0) {
    return true;
  }
  return false;
}

function getNextDate(date) {
  var day = date.day + 1;
  var month = date.month;
  var year = date.year;

var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

if (month === 2){
  if (isLeapYear(year)){
    if (day > 29) {
      day = 1;
      month++;
    }
  } else {
    if (day > 28) {
      day = 1;
      month++;
    }
  }
} else {
  if (day > daysInMonth[month - 1]) {
    day = 1;
    month++;
  }
}

if (month > 12) {
  month = 1;
  year++;
} 

return {
  day: day,
  month: month,
  year: year,
}
}

function nextPalindromeDate(date) {
  var counter = 0;
  var nextDate = getNextDate(date);

while(1) {
counter++;
var dateString = convertDateToString(nextDate);
  var isPalindrome = checkPalindromeForAllDates(dateString);

if(isPalindrome) {
  break;
}
nextDate = getNextDate(nextDate);
}

return [counter, nextDate];
}


console.log(nextPalindromeDate(date));
