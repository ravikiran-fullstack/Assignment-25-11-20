
const container1 = createDomElement('div', 'container mt-5') //document.createElement('div');
const row1 = createDomElement('div', 'row') //document.createElement('div');
const row1Col1 = createDomElement('div', 'offset-md-3 col-md-6 col-12')//document.createElement('div');
const form1 = createDomElement('form') //document.createElement('form');
const p1 = createDomElement('p') //document.createElement('p');
const p1Text = document.createTextNode('8 digit random number with unique digits:');
const p1Strong = createDomElement('strong')//document.createElement('strong');
const p1Span = createDomElement('span'); //document.createElement('span');
p1Span.setAttribute('id','randomNumber');

p1Strong.append(p1Span);
p1.append(p1Text,p1Strong);

const button1 = createDomElement('button', 'btn btn-primary' )// document.createElement('button');
button1.setAttribute('onclick', 'generateRandomNumber()');
const button1Text = document.createTextNode('Generate Random Number');

button1.append(button1Text);
form1.append(p1, button1);
row1Col1.append(form1);
row1.append(row1Col1);
container1.append(row1);
document.body.append(container1);

function createDomElement(ele, eleClass='', eleId=''){
  const element = document.createElement(ele);
  element.setAttribute('class', eleClass);
  element.setAttribute('id', eleId); 
  return element;
}