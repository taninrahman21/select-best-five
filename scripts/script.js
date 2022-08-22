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
  return name;
}
function addSelectedList(id,btn){
  const element = document.createElement("li");
  element.innerText = getTextById(id).textContent;
  selectedList.appendChild(element);
  btn.setAttribute("disabled", true);
  btn.style.backgroundColor = "gray";
}
 
function setSelectedListWithLimitation(id,btn){
  if(selectedList.childElementCount < 5){
    addSelectedList(id,btn);
  } else {
    alert("Oooops! You can't select more!");
  }
}

// Singer's Button listener 
btnJustin.addEventListener("click",function(){
setSelectedListWithLimitation("name-justin",btnJustin);
})
btnChirlie.addEventListener("click",function(){
  setSelectedListWithLimitation("name-chirlie",btnChirlie);
})
btnAriana.addEventListener("click",function(){
  setSelectedListWithLimitation("name-ariana",btnAriana);
})
btnDrake.addEventListener("click",function(){
  setSelectedListWithLimitation("name-drake",btnDrake);
})
btnEdSheeran.addEventListener("click",function(){
  setSelectedListWithLimitation("name-edsheeran",btnEdSheeran);
})
btnShawn.addEventListener("click",function(){
  setSelectedListWithLimitation("name-shawn",btnShawn);
})
// End Singer's Button listener 


// Calculate Button
calculateBtn.addEventListener("click",function(){
  const perSingerValue = getValueFromInput("per-singer-value");
  if(isNaN(perSingerValue)){
    return alert("Provide a Number, Please!")
  }
  const totalExpenses = perSingerValue * selectedList.childElementCount;
  addExpenses.textContent = "$" + totalExpenses;
})

// Calculate Total Button
calculateTotalBtn.addEventListener("click",function(){
  const perSingerValue = getValueFromInput("per-singer-value");
  const managerValue = getValueFromInput("manager-value");
  const hostValue = getValueFromInput("host-value");
  if(isNaN(perSingerValue) || isNaN(managerValue) || isNaN(hostValue)){
    return alert("Provide a Number, Please!")
  }
  const totalExpenses = perSingerValue * 5;
  const totalCost = totalExpenses + managerValue + hostValue;
  addTotal.textContent = "$" + totalCost;
})

