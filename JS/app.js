// // // let [num1, num2] = [1, 2];
// // // [num1, num2] = [11];
// // // [num1, num2] = [7, 9, 8];
// // // [, num1, , , , num2] = [4, 6, 7, 9, 15, -8, 20];
// // // let num3;
// // // [mum1, , , num2, , ...num3] = [1, 2, 3, 4, 5, 6, 7, 8]; //...operador de resto - sintaxis concreta y diferente del operador de propagación
// // // [num1,[num2,num3]]=[3, [2.5,9],6,7,8]
// // // //desectructurar array
// // // let num4
// // // [num1,[,num2],num3]=[3,[2.5,9],6,7,8]

// // // console.log(num1);
// // // console.log(num2);
// // // console.log(num3);
// // // console.log(num4);

// // // let [start,,,middle,...rest]="Hello";
// // // console.log(start); // H
// // // console.log(rest); // [ 'e', 'l', 'l', 'o' ]
// // // console.log(middle); // l

// // //desectucturar objetos
// // let hero = {
// //   character: "Dr Strange",
// //   name: "Benedict Cumberbatch",
// //   powers: {
// //     artifacts: ["Eye of Agamotto", "Book of Vishanti", "Orb of Agamotto"],
// //     skills: ["Judo", "Magically conjured weapons"],
// //   },
// // };
// // // let { name } = hero;
// // // let { powers: { artifacts,...otherPowers } } = hero;
// // // console.log(name);
// // // console.log(artifacts);
// // // console.log(otherPowers);
// // //desestructurar obteniendo el personaje,
// // // los poderes en dos variables independientes y el resto del objeto
// // let {
// //   character,
// //   powers: { artifacts, skills },
// //   ...rest
// // } = hero;
// // console.log(character);
// // console.log(artifacts);
// // console.log(skills);
// // console.log(rest);
// // let {powers: {skills:[Judo]}} = hero;
// // console.log(Judo); // Judo
// // // console.log(skills[0]); // Judo

// //Serializar JSON
// //loca Storage
// // let person = {
// //     id: 1,
// //     firstName: "John",
// //     lastName: "Connor",
// //     email: "john@google.com"}

// //     let jsonText =JSON.stringify(person);
// //     console.log(typeof jsonText); // {"id":1,"firstName":"John","lastName
// // let anotherPerson = JSON.parse(jsonText);
// // console.log(anotherPerson.lastName); // { id: 1, firstName: 'John',
// // // lastName: 'Connor', email: '
// // //
// // let userName = prompt("Enter your name:");
// // let phone = prompt("Enter your phone number:");
// // localStorage.name = userName;
// // localStorage.phone = phone;
// // console.log(localStorage.name); // John
// // console.log(localStorage.phone); // 1234567890
// // localStorage.clear(); // Clear all local storage

// // let data = {
// //   userName,
// //   phone,
// // };
// // localStorage.data = JSON.stringify(data);
// // console.log(JSON.parse(localStorage.data)); // {"userName":"John","phone":"1234567890"}
// let token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30";
// localStorage.setItem("token", token);
// localStorage.removeItem("token");
// console.log(localStorage.getItem("token")); // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30

// let date = new Date().toString();
// localStorage.date = date;
// console.log(new Date(Date.parse(localStorage.date))); // Mon Oct 23 2023 12:00:00 GMT+0200 (Central European Summer Time)

// //Session Storage
// date = new Date();
// let loginTime =
//   date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
// sessionStorage.setItem("logedAt", loginTime);
// console.log(sessionStorage.getItem("logedAt")); // 12:00:00
//aqui deberia salir el tiempo con todos los digitos y no solo uno

//JS asincrono
//Funciones callback (funciones de retorno - invocadas al finalizar una tarea)
// const sayHello = (username) => {
//   console.log("Hello " + username);
// };
// const getUSername = (callback) => {
//   let userName = prompt("Enter your name:");
//   callback(userName);
// };
// getUSername(sayHello); // Hello John

// let countDown = () => {
//   console.log("Are you ready?");
//   let start = 0;
//   let end = 0;
//   let count = 3;
//   for (let i = 5; i >= 0; i--, count++) {
//     //   for (let i = 5, count = 1; i >= 0; i--, count++) {
//     start = new Date().getTime();
//     console.log(start);
//     setTimeout(() => {
//       end = new Date().getTime();
//       console.log(i == 0 ? "Go!" : i);
//       console.log(count);
//       console.log(end - start, "ms");
//     }, count * 1000);
//   }
// };
// // countDown();
// // console.log("Steady");

// setTimeout(() => {
//     let name = "Patricia";
//   console.log(`Hello ${name}`);
// }, 2000);

// let countDownHell = (count) => {
//   let start = 5;
//   setTimeout(() => {
//     console.log(start--);
//     setTimeout(() => {
//       console.log(start--);
//       setTimeout(() => {
//         console.log(start--);
//         setTimeout(() => {
//           console.log(start--);
//           setTimeout(() => {
//             console.log(start--);
//             setTimeout(() => {
//               console.log("Running!");
//             }, 1000);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// };
// countDownHell(); // 5 4 3 2 1 Running!

// let dointSomething = (done) => {
//     new Promise((resolve, reject) => {
//         if (done) {
//             resolve(console.log("success"))

//         } else {
//             reject(err.message)
//         }

// });
// };
// dointSomething(false)

// const onResolved = (id) => {
//   setTimeout(console.log, 0, id, "resolved");
// };
// const onRejected = (id) => {
//   setTimeout(console.log, 0, id, "rejected");
// };

// let promise = fetch("/API/movies");
// let promise2 = promise.then(onResolved);
// let promise3 = promise2.then(onResolved);

// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000);
// });
// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(reject, 2000);
// });
// promise1.then(
//   () => onResolved("promise1"),
//   () => onRejected("promise1")
// );
// promise2.then(
//   () => onResolved("promise2"),
//   () => onRejected("promise2")
// );

// let promise = new Promise((resolve, reject) => {
//   setTimeout(reject(new Error({message:"Something went wrong"})), 1000);
// })
// promise.then(() => {
//   alert("promise solved")
// }).catch((error) => console.log(error.message));

//Async/await

// async function getNumber(number){
//   console.log(number);

// }

// const getNumber = async function (number){
//   console.log(number);
// }
// const getNumber = async(number)=>{
//   console.log(number);
//   return 3;

// };
// getNumber(1).then(console.log);
// console.log(2);
// const count = async ()=> {
// console.log(2);
// await null;
// console.log(4);}
// console.log(1);
// count();
// console.log(3);

//Networking

window.addEventListener("load", () => {
  //obtener todos los post
  //Sitio web JSN Server
  //https://jsonplaceholder.typicode.com/
  //https://jsonplaceholder.typicode.com/posts
  let URL = "https://jsonplaceholder.typicode.com/posts";
  //   fetch(URL)
  //     .then((response) => response.json())
  //     .then((json) => console.log("trying GET:", json));
  //obtener unpost especifico
  //   fetch(URL + "/2")
  //     .then((response) => response.json())
  //     .then((json) => console.log("trying GET:", json));
  //   //insertar un nuevo post
  //   fetch(URL, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       title: "foo",
  //       body: "bar",
  //       userId: 1,
  //     }),
  //     headers: {
  //       "content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((json) => console.log("trying POST:", json));
  //     //actualizar un post
  //     fetch(URL + "/2", {
  //       method: "PUT",
  //       body: JSON.stringify({
  //         id: 2,
  //       title: "foo",
  //       body: "bar",
  //       userId: 1,
  //     }),
  //     headers: {
  //       "content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((json) => console.log("trying PUT:", json));
  //     //eliminar un post
  //     fetch(URL + "/2", {
  //       method: "DELETE",
  //     })
  //     .then((response) => response.json())
  //     .then((json) => console.log("trying DELETE:", json));

  //profundizando en el objeto respuesta
  //   fetch(URL + "/1").then((response) => {
  //     console.log(response);
  //     console.log(response.status);
  //     console.log(response.statusText);
  //     console.log(response.ok); // true si el status es 200-299
  //     //response.json())
  //     //Respuestas alternativas
  //     response.text().then((data) => {
  //       console.log(JSON.parse(data)); // devuelve el texto de la respuesta
  //     });
  //     //.then((json) => console.log("trying GET:", json));
  //   });
  fetch(URL + "/1")
    .then((response) => {
      if (
        response.ok &&
        response.headers.get("content-type") ===
          "application/json; charset=UTF-8"
      ) {
        return response.json();
      } else {
        console.log(response.headers.get("content-type"));
        throw new Error(`unexpected status ${response.status} content type`);
      }
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
});
