/* 
Завдання №1:

Написати функцію, яка приймає в якості аргумента висоту прямокутника і його ширину, 
повертає площу прямокутника.
*/

function square (width, height){
    return width*height;
}

let w = Number(prompt('type width'));
let h = Number(prompt('type height'));
let result = square(w,h);

console.log (result);

/* 
Завдання №2:

Написати функцію, яка приймає в якості аргумента діаметр кола і повертає довжину кола.

*/

function circumference (diameter){
    return diameter*pi;
}

let d = Number(prompt('type diameter'));
const pi = 3.14159;
let l = circumference(d);

console.log (l);


/* 
Завдання №3:

Написати функцію, яка приймає в якості аргумента висоту циліндра та діаметр основи і повертає об'єм циліндра.

*/

function volumeOfTheCylinder (cylinders_height, diameter ){
    return PI*(diameter/2)*(diameter/2)*cylinders_height;
}

const PI = 3.14159;
let D= Number(prompt('type diameter'));
let H = Number(prompt('type cylinders height'));
let V = volumeOfTheCylinder(D,H);

console.log (V);


/*
Завдання №4:

Написати функцію, яка приймає два числа (діапазон) і виводити на консоль всі числа з цього діапазону, які діляться на 5.
*/


let rangeFirstNumber = Number(prompt('type a first number of the range'));
let rangeLastNumber = Number(prompt('type a last number of the range'));


for (let Q=rangeFirstNumber; Q<=rangeLastNumber; Q++){
if (Q%5===0){
console.log (Q);
}
}
