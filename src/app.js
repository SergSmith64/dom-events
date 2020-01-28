console.log("Hello");

// *** ВОПРОС - 4 ***
// ___ ДЕЛЕГИРОВАНИЕ ___



// *** ВОПРОС - 4 ***
// __передача данных по занчению и по ссылке__

var message = "Hello";
var phrase = message;
console.log("__message__=",message);
console.log("__phrase___=",phrase);

var message = "Good Bye";
console.log("__message__=",message);
console.log("__phrase___=",phrase);

console.log("______________________");

var user = {
  name: "Вася"
}
var admin = user;

console.log("user.name__=", user.name);
console.log("admin.name__=", admin.name);

user.name = "Петя";

console.log("user.name__=", user.name);
console.log("admin.name__=", admin.name);

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