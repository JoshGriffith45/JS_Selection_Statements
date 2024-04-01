console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);
//exercise 1
let favNum = 24;
let guessedCorrectly = false;

while (guessedCorrectly != true) {

let userInput = window.prompt("What is your favorite number?");

if (userInput > favNum) {
  console.log("too high");
}
else if (userInput < favNum) {
  console.log("too low");
}
else {
  guessedCorrectly = true;
  console.log("YOU GOT IT!!!");
}

}

//exercise 2
let birthMonth = window.prompt("What is your birth month?")
const BMwin = "You were born in winter.";
const BMspr = "you were born in spring.";
const BMsum = "you were born in summer.";
const BMaut = "you were born in winter.";

switch (birthMonth) {
  case "january" :
    console.log(BMwin);
    break;
  case "february" :
    console.log(BMwin);
    break;
  case "march" :
    console.log(BMspr);
    break;
  case "april" :
    console.log(BMspr);
    break;
  case "may" :
    console.log(BMspr);
    break;
  case "june" :
    console.log(BMsum);
    break;
  case "july" :
    console.log(BMsum);
    break;
  case "august" :
    console.log(BMsum);
    break;
  case "september" :
    console.log(BMaut);
    break;
  case "october" :
    console.log(BMaut);
    break;
  case "november" :
    console.log(BMaut);
    break;
  case "december" :
    console.log(BMwin);
    break;
  default:
    console.log("What you entered is invalid.")
}

//exercise 3
let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01" :
    type = "Tank top";
    break;
  case "02" :
    type = "T-Shirt";
    break;
  case "03" :
    type = "Long Sleeve";
    break;
  case "04" :
    type == "Sweat Shirt";
    break;
  default:
    type = "Other";
}

switch (colorId) {
  case "BK" :
    color = "Black";
    break;
  case "BL" :
    color = "Blue";
    break;
  case "RD" :
    color = "Red";
    break;
  case "PU" :
    color = "Purple";
    break;
  default:
    color = "White";
}

switch (sizeId) {
  case "S" :
    size = "Small";
    break;
  case "M" :
    size = "Medium";
    break;
  case "L" :
    size = "Large";
    break;
  case "XL" :
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);