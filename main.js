"use strict";
exports.__esModule = true;
var message = 'Welcome back';
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = 'Codevolution';
var isBeginner = true;
var total = 0;
var name = 'Vishwas';
var sentence = "My name is " + name + "\nI am a beginner in Typescript";
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['Chris', 22];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
var randomValue = 10;
randomValue = true;
randomValue = 'Vishwas';
var myVariable = 10;
var a;
a = 10;
a = true;
var b = 20;
// inferred type of number
var multiType;
multiType = 20;
multiType = true;
multiType = 'yo';
var add = function (num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
};
console.log(add(4));
function fullName(person) {
    if (person === void 0) { person = {
        firstName: 'oi',
        lastName: 'oi'
    }; }
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);
