// Challenge 1
// 1. Modify the function is Windy and return true if the speed is greater than 5 and false if not
// 2. Call the function and alert ‘It is windy’ if it is windy, Else, alert ‘It is not windy’

function isWindy(speed, unit) {
  if (speed > 5 && unit === "metric") {
    return true;
  } else {
    return false;
  }
}

// Challenge 2
// 1. Add unit parameter to isWindy
// 2. if greater than 5 and unit is metric, return true, else return false
// 3. Test both scenarios
// isWindy(2, 'imperial') should return false
// isWindy(20, 'metric') should return true

let speed = prompt("What is the windspeed?");
let unit = prompt("In what unit?");

if (isWindy(speed, unit)) {
  alert("It is windy today");
} else {
  alert("It is not windy today");
}
