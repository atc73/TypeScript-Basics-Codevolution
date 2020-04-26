export {};
let message = 'Welcome back';
console.log(message);

let x = 10;
const y = 20;

let sum;
const title = 'Codevolution';

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Vishwas';
let sentence: string = `My name is ${name}
I am a beginner in Typescript`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let person1: [string, number] = ['Chris', 22];

enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = 'Vishwas';

let myVariable: unknown = 10;

let a;
a = 10;
a = true;

let b = 20;
// inferred type of number

let multiType: number | boolean | string;
multiType = 20;
multiType = true;
multiType = 'yo';

const add = (num1: number, num2: number = 10): number => num1 + num2;

console.log(add(4));

interface Person {
  firstName: string;
  lastName: string;
}

function fullName(
  person: Person = {
    firstName: 'oi',
    lastName: 'oi',
  }
) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
  firstName: 'Bruce',
  lastName: 'Wayne',
};

fullName(p);
