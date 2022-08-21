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
 
// function limitationAlert(){
//   if(selectedList.childElementCount === 0){
//     alert("Oooops! You can't select more!");
//   } 
//   console.log(selectedList.childElementCount)
// }

// Singer's Button listener 
btnJustin.addEventListener("click",function(){
  if(selectedList.childElementCount < 5){
    addSelectedList("name-justin");
    setBtnDisable(btnJustin);
  } else {
    alert("Oooops! You can't select more!");
  }
  // limitationAlert();
    // addSelectedList("name-justin");
    // setBtnDisable(btnJustin);
})
btnChirlie.addEventListener("click",function(){
  if(selectedList.childElementCount < 5){
    addSelectedList("name-chirlie");
    setBtnDisable(btnChirlie);
  } else {
    alert("Oooops! You can't select more!");
  }
})
btnAriana.addEventListener("click",function(){
  if(selectedList.childElementCount < 5){
    addSelectedList("name-ariana");
    setBtnDisable(btnAriana);
  } else {
    alert("Oooops! You can't select more!");
  }
})
btnDrake.addEventListener("click",function(){
  if(selectedList.childElementCount < 5){
    addSelectedList("name-drake");
    setBtnDisable(btnDrake);
  } else {
    alert("Oooops! You can't select more!");
  }
})
btnEdSheeran.addEventListener("click",function(){
  if(selectedList.childElementCount < 5){
    addSelectedList("name-edsheeran");
    setBtnDisable(btnEdSheeran);
  } else {
    alert("Oooops! You can't select more!");
  }
})
btnShawn.addEventListener("click",function(){
  if(selectedList.childElementCount < 5){
    addSelectedList("name-shawn");
    setBtnDisable(btnShawn);
  } else {
    alert("Oooops! You can't select more!");
  }
})
// End Singer's Button listener 


// Calculate Button
calculateBtn.addEventListener("click",function(){
  const perSingerValue = getValueFromInput("per-singer-value");
  const totalExpenses = perSingerValue * selectedList.childElementCount;
  addExpenses.textContent = "$" + totalExpenses;
})

// Calculate Total Button
calculateTotalBtn.addEventListener("click",function(){
  const perSingerValue = getValueFromInput("per-singer-value");
  const managerValue = getValueFromInput("manager-value");
  const hostValue = getValueFromInput("host-value");
  const totalExpenses = perSingerValue * 5;
  const totalCost = totalExpenses + managerValue + hostValue;
  addTotal.textContent = "$" + totalCost;
})

