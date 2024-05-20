// alert("Yes it is linked");

let items = ["Bread", "Ali", "Zeeshan", "SLice", "Pizza"];

// Of Array Elements Return

// for (let i = 0; i < items.length; i++) {
//   console.log(items[i]);
// }

// for (let itemToBuy of items) {
//   console.log(itemToBuy);
// }

// In , Index of Array elements return
// for (let i in items) {
//   console.log(items[i]);
// }

let Marks = [800, 945, 858, 1071, 945];

// Marks.map(function traverse(mark) {
//   let result = mark + 1000;

//   if (result > 2000) {
//     alert("Your marks are greater than 2000 " + result);
//   }

//   return result;
// });

// let filteredMarks = Marks.filter(function higherMarks(mark) {
//   if (mark > 900) {
//     return mark;
//   }
// });

nameA = "Zeeshan ALi";
// console.log(nameA.includes("ALi"));
// console.log(nameA[5]);

let favouriteItems = items.find(function fav(item) {
  if (item[0] === "B") {
    return item;
  }
});
// console.log(favouriteItems);
// Traverse the elements of Marks through map function and each time
// Add 1000 to it and check if it is greater than 2000 then show alert

function takeListItems() {
  let listOfItems = prompt("Enter the number of items");
  listOfItems = Number(listOfItems);

  if (listOfItems <= 0) {
    alert("Invalid Choice ");
    return [];
  }
  let items = [];
  for (let i = 0; i < listOfItems; i++) {
    let userItem = prompt("Enter Item No: " + i);
    items.push(userItem);
  }

  return items;
}

function findItem(items, elementToFind) {
  for (let i = 0; i < items.length; i++) {
    if (items[i] === elementToFind) {
      return i;
    }
  }
  return -1;
}

// let userItems = takeListItems();
// console.log(userItems);
// if (findItem(userItems, "Bread") >= 0) {
//   alert("Yes, we founded bread");
// } else {
//   alert("No, we not founded bread");
// }

// Double  Less Strict Checker
console.log(5 == "5");
// Tripple Strickly Check
console.log(5 === "5");

// Objects
let user = {
  name: "Ali",
  age: 25,
  0: 25,
};

user["name"] = "Zeesahn ";
console.log(user["name"]);
// DOM

// let element = document.getElementsByClassName("main_div");
let element = document.getElementsByTagName("div");
// element.innerHTML="Hello , Zeeshan ALi , I am from jjj"
element[0].innerHTML = "<div class='ss'>Hello</div";
element[1].innerHTML = "Second";
element[2].innerHTML = "THird";
element[3].innerHTML = "Foursh";

element[0].innerText = "Hllo";
console.log(element);
