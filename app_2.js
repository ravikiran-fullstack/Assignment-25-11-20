
document.getElementById('getDob').addEventListener('click', (event) => {
  const dob = document.getElementById('dob').value;
  const dateOfBirth = new Date(dob);
  generateData(dateOfBirth);
  event.preventDefault();
})

function generateData(dateOfBirth){
  let currentDate = new Date();
  let milliSeconds = currentDate.getTime() - dateOfBirth.getTime();
  document.getElementById('milliSecondsElapsed').innerHTML = milliSeconds;

  let seconds = parseInt(milliSeconds / 1000);
  document.getElementById('secondsElapsed').innerHTML = seconds;
  let minutes = parseInt(seconds / 60);
  document.getElementById('minutesElapsed').innerHTML = minutes;
  let hours =parseInt( minutes / 60);
  document.getElementById('hoursElapsed').innerHTML = hours;
  let days = parseInt(hours / 24);
  document.getElementById('daysElapsed').innerHTML = days;
  let months = parseInt(days/30);
  document.getElementById('monthsElapsed').innerHTML = months;
  let years = parseInt(days/365);
  document.getElementById('yearsElapsed').innerHTML = years;
}
