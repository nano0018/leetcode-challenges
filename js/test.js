function repeatStringNumTimes(str, num) {
  let newString = "";
  if (num < 1) {
    return ""
  }
  for(let i = 0; i < (num); i++) {
    newString += str;
  }
  return newString;
}

console.log(repeatStringNumTimes("abc", 3));