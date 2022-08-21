const calculateBtn = document.getElementById("calculate-btn");
const calculateTotalBtn = document.getElementById("calculate-total-btn");
const addExpenses = document.getElementById("add-expenses");
const addTotal = document.getElementById("add-total");
const btnJustin = document.getElementById("btn-justin");
const btnEdSheeran = document.getElementById("btn-edsheeran");
const btnShawn = document.getElementById("btn-shawn");
const btnDrake = document.getElementById("btn-drake");
const btnAriana = document.getElementById("btn-ariana");
const btnChirlie = document.getElementById("btn-chirlie");
const selectedList = document.getElementById("selected-list");

function getValueFromInput(id){
  const inputElement = document.getElementById(id);
  const inputValueString = inputElement.value;
  const inputValue = parseFloat(inputValueString);
  return inputValue;
}
function getTextById(id){
  const name = document.getElementById(id);
  return name
}
function setBtnDisable(btn){
  btn.setAttribute("disabled", true);
  btn.style.backgroundColor = "gray";
}
function addSelectedList(id){
  const element = document.createElement("li");
  element.innerText = getTextById(id).textContent;
  selectedList.appendChild(element);
}
btnJustin.addEventListener("click",function(){
  addSelectedList("name-justin");
  setBtnDisable(btnJustin);
})
btnChirlie.addEventListener("click",function(){
  addSelectedList("name-chirlie");
  setBtnDisable(btnChirlie);
})
btnAriana.addEventListener("click",function(){
  addSelectedList("name-ariana");
  setBtnDisable(btnChirlie);
})
btnDrake.addEventListener("click",function(){
  addSelectedList("name-drake");
  btnJustin.setAttribute("disabled", true);
  btnJustin.style.backgroundColor = "gray";
})
btnEdSheeran.addEventListener("click",function(){
  addSelectedList("name-edsheeran");
  btnJustin.setAttribute("disabled", true);
  btnJustin.style.backgroundColor = "gray";
})
btnShawn.addEventListener("click",function(){
  addSelectedList("name-shawn");
})

calculateBtn.addEventListener("click",function(){
  const perSingerValue = getValueFromInput("per-singer-value");
  const totalExpenses = perSingerValue * selectedList.childElementCount;
  addExpenses.textContent = "$" + totalExpenses;
})

calculateTotalBtn.addEventListener("click",function(){
  const perSingerValue = getValueFromInput("per-singer-value");
  const managerValue = getValueFromInput("manager-value");
  const hostValue = getValueFromInput("host-value");
  const totalExpenses = perSingerValue * 5;
  const totalCost = totalExpenses + managerValue + hostValue;
  addTotal.textContent = "$" + totalCost;
})

