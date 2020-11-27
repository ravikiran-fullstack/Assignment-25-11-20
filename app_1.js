let index1 = 0;
let index2 = 0;
let len = 8;
let hasUniqueDigits = true;
let randomNumberGenerated = 0;

function generateRandomNumber(){
  randomNumberGenerated = Math.ceil(Math.random() * 100000000);//81463795;
  randomNumberGenerated = ""+randomNumberGenerated;
  if(randomNumberGenerated.length !== 8){
    hasUniqueDigits = true;
    return generateRandomNumber();  
  }
  let result = checkHasUniqueDigits(0);
  hasUniqueDigits = true;
  if(!result){
    return generateRandomNumber();
  }
  document.getElementById('randomNumber').innerHTML = randomNumberGenerated;
  // console.log(randomNumberGenerated);
  event.preventDefault();
}

function checkHasUniqueDigits(_index1){
  index1 = _index1;
  if(_index1 === len){
    return true;
  }

  if(!hasUniqueDigits){
    return false;
  }
  isUniqueDigit(0);
  _index1++;
  return checkHasUniqueDigits(_index1);
}

function isUniqueDigit(_index2){
  if(_index2 === len){
    return true;
  }

  if(index1 !== _index2){
    if(randomNumberGenerated[index1] === randomNumberGenerated[_index2]){
      hasUniqueDigits = false;
      return false;
    }
  }

  _index2++;
  return isUniqueDigit(_index2);
}

