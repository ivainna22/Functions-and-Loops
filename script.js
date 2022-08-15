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

/*
Завдання №5:

Реалізовати гру FizzBuzz для 100 чисел.
https://ru.wikipedia.org/wiki/Fizz_buzz:
Гравець, що починає, вимовляє число "1", і кожен наступний гравець додає до попереднього значення одиницю. Коли число ділиться на 3 воно замінюється на fizz, якщо число ділиться на 5, то вимовляється buzz. Числа, що діляться 3 і 5 одночасно замінюються на fizz buzz. Гравець, що зробив помилку, виключається з гри.

Типова партія у fizz buzz виглядає так:

1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz , 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz, ...

*/


let N = 1;

for (let N = 1; N <= 100; N++) {
    if (N % 3 === 0 && N % 5 === 0) {
        console.log('FizzBuzz');
    } else if (N % 3 === 0) {
        console.log('Fizz');
    } else if (N % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(N);
    }
}