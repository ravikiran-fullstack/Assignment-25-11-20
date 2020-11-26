
let pattern = /^[0-9]{2}[\/\-][0-9]{2}[\/][0-9]{4}$/g;

document.getElementById('getDob').addEventListener('click', (event) => {
  const dob = document.getElementById('dob')
  console.log('dob',dob, dob.value)
  test = pattern.test(dob.value);
  if(test){
    generateData(dob.value);
  } 
  event.preventDefault();
})

function generateData(data){
  let date = data.split('/');
  // console.log(date);
  let day = date[0];
  let month = date[1];
  let year = date[2];
  // console.log(day, month, year);

  let dateOfBirth = new Date(+year, +month, +day);
  let currentDate = new Date();

  // Elapsed time in milliseconds
  let milliSeconds = currentDate.getTime() - dateOfBirth.getTime();
  // console.log(currentDate.getTime(), dateOfBirth.getTime(), milliSeconds);
  document.getElementById('milliSecondsElapsed').innerHTML = milliSeconds;

  let seconds = parseInt(milliSeconds / 1000);
  document.getElementById('secondsElapsed').innerHTML = seconds;
  let minutes = parseInt(seconds / 60);
  document.getElementById('minutesElapsed').innerHTML = minutes;
  let hours =parseInt( minutes / 60);
  document.getElementById('hoursElapsed').innerHTML = hours;
  let days = parseInt(hours / 60);
  document.getElementById('daysElapsed').innerHTML = days;
  let months = parseInt(days/12);
  document.getElementById('monthsElapsed').innerHTML = months;
  let years = parseInt(days/365);
  document.getElementById('yearsElapsed').innerHTML = years;


}
