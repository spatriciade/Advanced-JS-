// // let [num1, num2] = [1, 2];
// // [num1, num2] = [11];
// // [num1, num2] = [7, 9, 8];
// // [, num1, , , , num2] = [4, 6, 7, 9, 15, -8, 20];
// // let num3;
// // [mum1, , , num2, , ...num3] = [1, 2, 3, 4, 5, 6, 7, 8]; //...operador de resto - sintaxis concreta y diferente del operador de propagación
// // [num1,[num2,num3]]=[3, [2.5,9],6,7,8]
// // //desectructurar array
// // let num4
// // [num1,[,num2],num3]=[3,[2.5,9],6,7,8]

// // console.log(num1);
// // console.log(num2);
// // console.log(num3);
// // console.log(num4);

// // let [start,,,middle,...rest]="Hello";
// // console.log(start); // H
// // console.log(rest); // [ 'e', 'l', 'l', 'o' ]
// // console.log(middle); // l

// //desectucturar objetos
// let hero = {
//   character: "Dr Strange",
//   name: "Benedict Cumberbatch",
//   powers: {
//     artifacts: ["Eye of Agamotto", "Book of Vishanti", "Orb of Agamotto"],
//     skills: ["Judo", "Magically conjured weapons"],
//   },
// };
// // let { name } = hero;
// // let { powers: { artifacts,...otherPowers } } = hero;
// // console.log(name);
// // console.log(artifacts);
// // console.log(otherPowers);
// //desestructurar obteniendo el personaje,
// // los poderes en dos variables independientes y el resto del objeto
// let {
//   character,
//   powers: { artifacts, skills },
//   ...rest
// } = hero;
// console.log(character);
// console.log(artifacts);
// console.log(skills);
// console.log(rest);
// let {powers: {skills:[Judo]}} = hero;
// console.log(Judo); // Judo
// // console.log(skills[0]); // Judo

//Serializar JSON

// let person = {
//     id: 1,
//     firstName: "John",
//     lastName: "Connor",
//     email: "john@google.com"}

//     let jsonText =JSON.stringify(person);
//     console.log(typeof jsonText); // {"id":1,"firstName":"John","lastName
// let anotherPerson = JSON.parse(jsonText);
// console.log(anotherPerson.lastName); // { id: 1, firstName: 'John',
// // lastName: 'Connor', email: '
// //
let userName = prompt("Enter your name:");
let phone = prompt("Enter your phone number:");
localStorage.name = userName;
localStorage.phone = phone;
console.log(localStorage.name); // John
console.log(localStorage.phone); // 1234567890
localStorage.clear(); // Clear all local storage