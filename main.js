// *********************************__1__************************************
// const mission1 = document.getElementById("mission1");

// function printMaxAndMin() {
//     let userNumber = Number(prompt("enter number"));
//     let numbersArray = [];
//     numbersArray.push(userNumber);
//     console.log(numbersArray);

//     while (userNumber != 0) {
//         userNumber = Number(prompt("enter number"));
//         numbersArray.push(userNumber);
//         console.log(numbersArray);
//     }
//     if (userNumber == 0) {
//         console.log(`max number is: ${Math.max(...numbersArray)}`);
//         console.log(`min number is: ${Math.min(...numbersArray)}`);
//         mission1.innerHTML = `max number is: ${Math.max(...numbersArray)} min number is: ${Math.min(...numbersArray)}`
//     }
// }
// printMaxAndMin();
// *********************************__1__************************************

// *********************************__2__************************************
// function getEvenNumbers() {
//     let numbersArray = [];
//     let evenNumbersArray = [];
//     for (let i = 0; i < 10; i++) {
//         let userNumber = Number(prompt("enter a number"));
//         numbersArray.push(userNumber)
//         if (userNumber % 2 == 0) evenNumbersArray.push(userNumber);
//     }
//     console.log(numbersArray);
//     return evenNumbersArray;
// }
// console.log(getEvenNumbers());
// *********************************__2__************************************

// *********************************__3__************************************
// function isNumberInArray(userNumber) {
//     let bigArray = [];
//     for (let i = 0; i < 100; i++) {
//         let randomNum = Math.floor(Math.random() * 100);
//         bigArray.push(randomNum);
//     }
//     console.log(bigArray);

// bigArray.indexOf(userNumber) != -1 ? console.log("well done") : console.log("not here");
// }
// isNumberInArray(Number(prompt("enter a number")));
// *********************************__3__************************************

// *********************************__4__************************************
// function isNameAorZ(userName) {
//         switch (userName[0]) {
//             case "a":
//                 console.log("nice");
//                 break;
//             case "z":
//                 console.log("good");
//                 break;
//             default:
//                 console.log("not here");
//                 break
//         }
// }
// isNameAorZ("azzaaz")
// *********************************__4__************************************

// *********************************__5__************************************
// function fizzBuzz() {
//     for (let i = 1; i <= 100; i++) {
//         if(i%3 == 0){
//             console.log(i + " fizz");
//             console.log(i + " fizzBuzz");
//         }
//         if(i%5 == 0){
//             console.log(i + " buzz");
//             console.log(i + " fizzBuzz");
//         }
//     }
// }
// fizzBuzz();
// *********************************__5__************************************

// *********************************__6__************************************
// function lotto() {
//     let numArray = [];
//     let randomNumbersArray = [];

//     while (numArray.length < 10) {
//         let numberFromUser = Number(prompt("enter a number"));
//         if (numberFromUser < 100 && numberFromUser > 0 && numArray.indexOf(numberFromUser) == -1) numArray.push(numberFromUser);
//     }
//     console.log(numArray);

//     while (randomNumbersArray.length < 50) {
//         let randomNumber = Math.floor(Math.random() * 100);
//         if (randomNumbersArray.indexOf(randomNumber) == -1) randomNumbersArray.push(randomNumber);
//     }
//     console.log(randomNumbersArray);

//     for (let i = 0; i < randomNumbersArray.length; i++) {
//         for (let j = 0; j < numArray.length; j++) {
//             if(numArray[j] == randomNumbersArray[i]){
//                 console.log(`${numArray[j]} and ${randomNumbersArray[i]} are the same`);
//             }
//         }
//     }
// }
// lotto();
// *********************************__6__************************************



// *********************************__JS-מתקדם__************************************
// *********************************__1__************************************
// class Building {
//     height;
//     width;
//     floors;
//     apartments;
//     constructor(height, width, floors, apartments) {
//         this.height = height;
//         this.width = width;
//         this.floors = floors;
//         this.apartments = apartments;
//     };
// };

// const Building1 = new Building(25, 50, 3, 36);
// const Building2 = new Building(45, 25, 16, 16);
// const Building3 = new Building(30, 15, 5, 24);
// const Building4 = new Building(90, 65, 8, 12);

// function printBuilding(obj) {
//     for (let key in obj) {
//         console.log(`${key}: ${obj[key]}`);
//     }
// }
// printBuilding(Building1)
// *********************************__1__************************************

// *********************************__2__************************************
// const BuildingsArray = [Building1, Building2, Building3, Building4]

// function printAllBuildings(objArray) {
//     objArray.forEach((obj) => {
//         for (let key in obj) {
//             console.log(`${key}: ${obj[key]}`);
//         }
//     });
// }
// printAllBuildings(BuildingsArray);
// *********************************__2__************************************

// *********************************__3__************************************
// function get3OrMoreFloorsOnly(objArray) {
//     let newArray = [];
//     objArray.forEach((obj) => {
//         if (obj.floors > 5) newArray.push(obj);
//     })
//     return newArray;
// };

// get3OrMoreFloorsOnly(BuildingsArray);
// *********************************__3__************************************
// *********************************__JS-מתקדם__************************************



// *********************************__JS-מחלקות__************************************
// *********************************__1__************************************
// class Professor {
//     firstName;
//     lastName;
//     payForHour;
//     hoursForWeek;
//     phone;
// *********************************__1__************************************

// *********************************__2__************************************
//     constructor(firstName, lastName, payForHour, hoursForWeek, phone) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.payForHour = payForHour;
//         this.hoursForWeek = hoursForWeek;
//         this.phone = phone;
//     };
//     printObj = function() {
//         for(let key in this){
//             console.log(`${key}: ${this[key]}`);
//         }
//     }
// };
// *********************************__2__************************************

// *********************************__3__************************************
// const Professor1 = new Professor("lior", "yosef", 500, 56, "052-1234567");
// const Professor2 = new Professor("marcos", "bazbih", 650, 24, "054-5648732");
// const Professor3 = new Professor("haim", "ayenow", 450, 75, "050-4591223");
// *********************************__3__************************************


// *********************************__7-8__************************************
// const form = document.getElementById("form");
// const inputFName = document.getElementById("inputFName");
// const inputLName = document.getElementById("inputLName");
// const inputPayForHour = document.getElementById("inputPayForHour");
// const inputHoursForWeek = document.getElementById("inputHoursForWeek");
// const inputPhone = document.getElementById("inputPhone");

// const TableBody = document.getElementById("TableBody");

// const PROFESSORS = [];

// form.onsubmit = (event) => {
//     event.preventDefault();
//     let newProfessor = new Professor(inputFName.value, inputLName.value, inputPayForHour.value, inputHoursForWeek.value, inputPhone.value);
//     console.log(newProfessor);
//     TableBody.innerHTML += `<tr><td>${newProfessor.firstName}</td> <td>${newProfessor.lastName}</td> <td>${newProfessor.payForHour}</td> <td>${newProfessor.hoursForWeek}</td> <td>${newProfessor.phone}</td></tr>`
// }
// *********************************__7-8__************************************
// *********************************__JS-מחלקות__************************************