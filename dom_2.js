const container2 = createDomElement('div', 'container mt-5');
const row2 = createDomElement('div', 'row') //document.createElement('div');
const row2Col1 = createDomElement('div', 'offset-md-3 col-md-6 col-12')//document.createElement('div');
const form2 = createDomElement('form') //document.createElement('form');

const div = createDomElement('div', 'form-group');
const label = document.createElement('label');
label.for = 'dob';
const labelText = document.createTextNode('Date of Birth');
label.append(labelText);

const input2 = createDomElement('input', '', 'dob');
input2.type = 'date';

const button2 = createDomElement('button', 'btn btn-primary', 'getDob');
const button2Text = document.createTextNode('Get Data');
button2.append(button2Text);

div.append(label, input2);
form2.append(div, button2);



const table2 = createDomElement('table', 'mt-5');

const tr1 = createDomElement('tr');
const tr1td1 = createDomElement('td');
const tr1td1Text = document.createTextNode('Days');
tr1td1.append(tr1td1Text);
const tr1td2 = createDomElement('td');
tr1td2.id="daysElapsed";
tr1.append(tr1td1, tr1td2);


const tr2 = createDomElement('tr');
const tr2td1 = createDomElement('td');
const tr2td1Text = document.createTextNode('Years');
tr2td1.append(tr2td1Text);
const tr2td2 = createDomElement('td');
tr2td2.id="yearsElapsed";
tr2.append(tr2td1, tr2td2);


const tr3 = createDomElement('tr');
const tr3td1 = createDomElement('td');
const tr3td1Text = document.createTextNode('Months');
tr3td1.append(tr3td1Text);
const tr3td2 = createDomElement('td');
tr3td2.id="monthsElapsed";
tr3.append(tr3td1, tr3td2);

const tr4 = createDomElement('tr');
const tr4td1 = createDomElement('td');
const tr4td1Text = document.createTextNode('Hours');
tr4td1.append(tr4td1Text);
const tr4td2 = createDomElement('td');
tr4td2.id="hoursElapsed";
tr4.append(tr4td1, tr4td2);

const tr5 = createDomElement('tr');
const tr5td1 = createDomElement('td');
const tr5td1Text = document.createTextNode('Minutes');
tr5td1.append(tr5td1Text);
const tr5td2 = createDomElement('td');
tr5td2.id="minutesElapsed";
tr5.append(tr5td1, tr5td2);

const tr6 = createDomElement('tr');
const tr6td1 = createDomElement('td');
const tr6td1Text = document.createTextNode('Seconds');
tr6td1.append(tr6td1Text);
const tr6td2 = createDomElement('td');
tr6td2.id="secondsElapsed";
tr6.append(tr6td1, tr6td2);

const tr7 = createDomElement('tr');
const tr7td1 = createDomElement('td');
const tr7td1Text = document.createTextNode('MilliSeconds');
tr7td1.append(tr7td1Text);
const tr7td2 = createDomElement('td');
tr7td2.id="milliSecondsElapsed";
tr7.append(tr7td1, tr7td2);


table2.append(tr1);
table2.append(tr2);
table2.append(tr3);
table2.append(tr4);
table2.append(tr5);
table2.append(tr6);
table2.append(tr7);


row2Col1.append(form2);
row2Col1.append(table2);
row2.append(row2Col1);
container2.append(row2);
document.body.append(container2);







function createDomElement(ele, eleClass='', eleId=''){
  const element = document.createElement(ele);
  element.setAttribute('class', eleClass);
  element.setAttribute('id', eleId); 
  return element;
}