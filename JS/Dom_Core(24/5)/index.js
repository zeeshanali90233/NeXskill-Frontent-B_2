function turnOnDarkTheme() {
  document.body.style.color = "white";
  document.body.style.backgroundColor = "black";
  console.log("Dark");
}
function turnOnLightTheme() {
  document.body.style.color = "black";
  document.body.style.backgroundColor = "white";
  console.log("Light");
}

function addItemsList() {
  let items = ["Bread", "Hello"];
  parentDiv = document.querySelector("#items");
  for (let groceryItem of items) {
    let itemH1Tag = document.createElement("p");
    itemH1Tag.innerText = groceryItem;
    parentDiv.appendChild(itemH1Tag);
  }
}

const addBtn = document.querySelector(".addBtn");
// Event Listener
addBtn.addEventListener("click", function callBack() {
  const firstInput = document.querySelector("#firstNumber");
  const firstValue = Number(firstInput.value);
  const secondInput = document.querySelector("#secondNumber");
  const secondValue = Number(secondInput.value);

  const result = firstValue + secondValue;
  const parentResult = document.querySelector(".result");
  parentResult.innerHTML = result;
});

const divideBtn = document.querySelector(".divBtn");
// Event Listener
divideBtn.addEventListener("click", function callBack() {
  const firstInput = document.querySelector("#firstNumber");
  const firstValue = Number(firstInput.value);
  const secondInput = document.querySelector("#secondNumber");
  const secondValue = Number(secondInput.value);

  const result = firstValue / secondValue;
  const parentResult = document.querySelector(".result");
  parentResult.innerHTML = result;
});

const toggleThemeDiv = document.querySelector("#toggleTheme");
toggleThemeDiv.addEventListener("mouseout", () => {
  if (document.body.style.color === "white") {
    turnOnLightTheme();
  } else {
    turnOnDarkTheme();
  }

  const ankleTag = document.createElement("a");
  ankleTag.href =
    "https://docs.google.com/spreadsheets/d/10NQsTLvyFOwW4bwWRRrmhwE9MTykx4X49TsHQsSAdvM/edit#gid=0";

  ankleTag.target = "_blank";
  ankleTag.click();
});

console.log(document.body.childNodes[5]);
