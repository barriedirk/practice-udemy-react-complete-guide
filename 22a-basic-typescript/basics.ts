// primitives

let age: number; // not Number Object

// age = '12'; // error
age = 12;

let userName: string;

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

// let hobbies: null;
// hobbies = 12; // error

// More complex types

let hobbies: string[];
// hobbies = ['Sport', 'Cooking', 12]; //  error

hobbies = ["Sport", "Cooking"];

// type aliases
type Person = {
    name: string;
    age: number;
};

// let person; // by default :any
let person: {
    name: string;
    age: number;
};

person = {
    name: "Max",
    age: 32,
};

let personA: Person;

personA = {
    name: "Max",
    age: 32,
};
// person = { isEmployee: true }; // error

let people: {
    name: string;
    age: number;
}[];

let peopleA: Person[];

// type inference

let courseA = "React - The complete Guide"; // inference as string
// courseA = 12341 // error

// union type

let course: string | number = "React - The complete Guide";
course = 12341;

// Functions & types

// function sumNumbers(a: number, b: number): number {
function sumNumbers(a: number, b: number) {
    return a + b;
}

// function print(value: any): void {
function print(value: any) {
    console.log(value);
}

// Generics

// function insertAtBeginning(array: any[], value: any): any[] {
function insertAtBeginning(array: any[], value: any) {
    const newArray = [value, ...array];

    return newArray;
}

const demoArray = [1, 2, 3]; // number[]

const updatedArray = insertAtBeginning(demoArray, -1); // any[];

// because the array is any[], typescript didn't warn us about the following issue,
// ( internally is an array of numbers and at runtime will throw an error)
updatedArray[0].split("");



function insertAtBeginningGeneric<T>(array: T[], value: T) {
    const newArray = [value, ...array];

    return newArray;
}

const otherDemoArray = [1, 2, 3]; // number[]

const otherUpdatedArray = insertAtBeginningGeneric<number>(otherDemoArray, -1); // number[];
const otherUpdatedArrayString = insertAtBeginningGeneric<string>(['a', 'b', 'c'], 'd'); // string[]

otherUpdatedArray[0].split(""); // typescript error

otherUpdatedArrayString[0].split(""); // typescript no error
