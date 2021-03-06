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

  if (day > 9) {
    day = date.day.toString();
  } else {
    day = "0" + date.day;
  }

  if (month > 9) {
    month = month.toString();
  } else {
    month = "0" + month;
  }

  year = year.toString();

  date = {
    day: day,
    month: month,
    year: year,
  };

  return date;
}

function convertDateToAllFormats(date) {
  var dateString = convertDateToString(date);

  const ddmmyyyy = dateString.day + dateString.month + dateString.year;
  const mmddyyyy = dateString.month + dateString.day + dateString.year;
  const yyyymmdd = dateString.year + dateString.month + dateString.day;
  const ddmmyy = dateString.day + dateString.month + dateString.year.slice(-2);
  const mmddyy = dateString.month + dateString.day + dateString.year.slice(-2);
  const yymmdd = dateString.year.slice(-2) + dateString.month + dateString.day;

  const array = [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
  return array;
}

function checkPalindromeForAllDates(date) {
  var arrayOfAllFormats = convertDateToAllFormats(date);
  var flag = false;
  for (i = 0; i < arrayOfAllFormats.length; i++) {
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

  var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (month === 2) {
    if (isLeapYear(year)) {
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
  };
}

function nextPalindromeDate(date) {
  var counter = 0;
  var nextDate = getNextDate(date);

  while (1) {
    counter++;

    var isPalindrome = checkPalindromeForAllDates(nextDate);

    if (isPalindrome) {
      break;
    }
    nextDate = getNextDate(nextDate);
  }

  return [counter, nextDate];
}

const input = document.querySelector("#input-box");
const checkButton = document.querySelector("#check-button");
const output = document.querySelector("#output");

function clickHandler() {
  var birthdate = input.value;

  if (birthdate !== "") {
    var arrayOfDate = birthdate.split("-");

    const date = {
      day: Number(arrayOfDate[2]),
      month: Number(arrayOfDate[1]),
      year: Number(arrayOfDate[0]),
    };

    var palindrome = checkPalindromeForAllDates(date);

    if (palindrome) {
      output.innerText = "Wow your Birthday is a Palindrome????";
    } else {
      var [counter, nextDate] = nextPalindromeDate(date);
      output.innerText =
        "Opps ????, not a Palindrome! The next palindrome date is on " +
        nextDate.day +
        "-" +
        nextDate.month +
        "-" +
        nextDate.year +
        ",  and you missed it by " +
        counter +
        " days!";
    }
  } else {
    output.innerText = "Please enter a valid date";
  }
}

checkButton.addEventListener("click", clickHandler);
