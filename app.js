let firstName = "Jan";
firstName = "Piotrek";
firstName = "Ania";
let number = 30;
let text = "nauka";
let logic = true;
let empty = null;
let args = ["Kinga", "Asia", "Ola", 2, 6, 9];
console.log(firstName);
let firstNameGroup = "Piotrek, Jola, Kasia, Tomek, Maja, Kuba";
console.log(firstNameGroup);
let firstNameGroupArr = firstNameGroup.split;

let client = {
  firstName: "Adam",
  lastName: "Kowalski",
  age: 30,
  city: "Warszawa",
};

console.log(client);
console.log(client.firstName);

let namme;
let name = "Łukasz";
let surname = null;

console.log(namme);
console.log(surname);

let age;

// array - tablica
let listShop = ["mleko", "ananas", "sol"];
listShop[2] = "jajko";
console.log(listShop);
console.log(listShop[1]);

let numlist = [1, 6, 9, 7, 3, 1, 8];

// object,
let objListShop = {
  rolls: 3,
  butter: 1,
  ham: "10 slices",
};

console.log(objListShop);
console.log(objListShop.ham);

// działania arytmetyczne

let firstNumber = 2;
let secondNumber = 5;

let oddNumber = 13;

let result = firstNumber + secondNumber;

console.log("dodawanie:" + result);
result = firstNumber * secondNumber;
console.log("mnożenie:" + result);

console.log("dzielenie modulo:" + (oddNumber % 2));
// inkrementacja - zwiększenie wartości o 1:
firstNumber++;
result = firstNumber * secondNumber;
console.log("po inkrementacji:" + result);

// dekrementacja - zmniejszenie wartości o 1:
firstNumber++;
result = firstNumber * secondNumber;
console.log("po dekrementacji:" + result);

if (firstNumber < secondNumber) {
  console.log("prawda");
}

if (firstNumber < secondNumber) {
  console.log("zgadza się");
} else if ((secondNumber = 5)) {
  console.log("tak");
}

userAge = 25;
if (userAge >= 18) {
  console.log("Zapraszamy do klubu");
}

haveIdCard = false;

if (userAge >= 18 && haveIdCard == true) {
  console.log("Zapraszamy po promocje");
} else {
  console.log("Musisz być pełnoletni");
}

if (userAge >= 18 || haveIdCard == true) {
  console.log("Zapraszamy po promocje");
} else {
  console.log("Musisz być pełnoletni");
}

let userPik = [(userPikName = "Ada"), (agePik = 5)];
if (agePik >= 21 && agePik <= 25) {
  console.log("Zapraszamy do klubu:" + userPikName);
} else if (agePik <= 20 && agePik >= 10) {
  console.log("jesteś w kategorii 10-20" + userPikName);
} else {
  console.log("starszy lub młodszy");
}

// switch
let day = "wtorek";

switch (day) {
  case "Poniedziałek":
    console.log("Dzisiaj jest" + day);
    break;
  case "Wtorek":
    console.log(`Dzisiaj jest  ${day}`);
    break;
  case "Środa":
    console.log(`Dzisiaj jest + ${day}`);
  default:
    console.log("incorrect");
}

// to samo co w switch za pomocą if

if (day === "Poniedziałek") {
  console.log("Dzisiaj jest" + day);
} else if (day === "wtorek") {
  console.log("Dzisiaj jest" + day);
} else if (day === "środa") {
  console.log("Dzisiaj jest" + day);
} else {
  console.log("incorrect");
}

// functions

function AddTwoNumbers(firstNum, secondNum) {
  return firstNum + secondNum;
}

AddTwoNumbers(3, 6);
console.log(AddTwoNumbers(3, 6));

let a = 7;
let b = 5;

console.log(AddTwoNumbers(a, b));

const AddTwoNumber = (firstNum, secondNum) => {
  return firstNum + secondNum;
};
AddTwoNumbers(9, 7);
console.log(AddTwoNumbers(9, 7));
