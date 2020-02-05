console.log("Hello");

// *** ВОПРОС - 4 ***
// ___ ДЕЛЕГИРОВАНИЕ ___



// *** ВОПРОС - 4 ***
// __передача данных по занчению и по ссылке__

// var message = "Hello";
// var phrase = message;
// console.log("__message__=",message);
// console.log("__phrase___=",phrase);

// var message = "Good Bye";
// console.log("__message__=",message);
// console.log("__phrase___=",phrase);

// console.log("______________________");

// var user = {
//   name: "Вася"
// }
// var admin = user;

// console.log("user.name__=", user.name);
// console.log("admin.name__=", admin.name);

// user.name = "Петя";

// console.log("user.name__=", user.name);
// console.log("admin.name__=", admin.name);

// __ MakeWeb.me

// function foo(){
//   throw new  Error('Ooooopppp!!!');
// }

// function bar() {
//   foo();
// }

// function baz() {
//   bar();
// }

// baz();

// ___ из Дискорда___

// function User(login) {
//   this.login = login;
//   this.getName = () => this.login
// }

// const user2 = {
//   login: 'Arnold',
//   getName: () => this.login
// }
// console.log("__user2__", user2);


// __ПРИВЕДЕНИЕ ТИПОВ___Преобразование Типов___

// let a = 66;
// console.log(a);
// console.log("a = __TYPE OF_", typeof(a));

// b = String(a);
// console.log(b);
// console.log("__b =__TYPE OF_", typeof(b));

// c = Number(b);
// console.log(c);
// console.log("__c =__TYPE OF_", typeof(c));

// d = Boolean(c);
// console.log(d);
// console.log("__d =__TYPE OF_", typeof(d));



// 21 ____________
// Event Loop
// Call Stack ____
// var a = 12, b = 3;
// setTimeout(
//  function multiply(a, b) {
//  console.log("A * B = ", a * b);
//  return a * b;
//}
// , 4000);

// setTimeout(
//  function square(n) {
//  console.log("Multi___N_= ", multiply(n));
//  return multiply(n, n);
//1}
// , 5000);

// setTimeout(
//   function printSquare(n) {
//   var squared = square(n);
//   console.log("Square = ", squared);
// }
// , 6000);

// printSquare(4);


// +++ ДОПОЛНИТЕЛЬНО +++

// ES6 VARIABLES. Code Style

function ttt() {
  for (let i = 0; i < 4; i++) {
    setTimeout(() => console.log("i__=", i), 3000);
    setTimeout(function(){
      console.log("==== I ====", i);
    }, 2000)
  }
}
ttt();
