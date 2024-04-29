// 22-misol
// let number = parseInt(prompt("Sonni kiriting: "));
// let isPrime = true;
// if (number === 1) {
//     console.log("tub son emas");
// }
// else if (number > 1) {
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(+number +"  bu son tub son");
//     } else {
//         console.log(+number+ "  bu son tub son emas");
//     }
// }
// else {
//     console.log("Bu son tub son emas");
// }
// 21-misol
// let n = prompt("Sonni kiriting: ") ;
// let toqRaqamMavjud = false;

// while (n > 0) {
//     let raqam = n % 10;
//     if (raqam % 2 !== 0) {
//         toqRaqamMavjud = true;
//         break;
//     }
//     n = Math.floor(n / 10);
// }

// if (toqRaqamMavjud) {
//     console.log("Sonning ichida toq raqam mavjud");
// } else {
//     console.log("Sonning ichida toq raqam yo'q");
// }
// 20-misol
// let n = prompt("Sonni kiriting: ") ;
// let ikkiRaqamMavjud = false;

// while (n > 0) {
//     let raqam = n % 10;
//     if (raqam ===2) {
//         ikkiRaqamMavjud = true;
//         break;
//     }
//     n = Math.floor(n / 10);
// }

// if (ikkiRaqamMavjud) {
//     console.log("Sonning ichida ikki raqam mavjud");
// }else{
//   console.log("Sonning ichida ikki raqam mavjud emas");
// }
// 19-misol
// let n = prompt("Sonni kiriting: ") ;
// let yigindi = 0;
// let count=0;

// while (n > 0) {
//     let raqam = n % 10;
//     yigindi += raqam;
//     n = Math.floor(n / 10);
//     count++;
// }
// console.log("Raqamlar soni :"+count);
// console.log("Yig'indi: "+ yigindi);
// 18-misol
// let n=prompt("sonni kiriting:" );
// let teskariSon ="";

// while (n > 0) {
//     let raqam = n % 10;
//     teskariSon += raqam;
//     n = Math.floor(n / 10);
// }

// console.log("Sonning raqamlari teskari tartibda: " + teskariSon);
// 17-misol
// let n=20;
// let m=3;
// let qoldiq=0;
// let count=0;
// while(n>=m){
// n=n-m;
// count++;
// }
// console.log("Butun:"+count);
// console.log("Qoldiq:"+ n);

// 5-misol
// let n=prompt("sonni kirit:")
// let k = 0;
// let temp = n;

// while (temp % 2 === 0) {
//     k++;
//     temp = temp / 2;
// }

// if (temp === 1) {
//     console.log(n+" soni 2 ning " + k +" chi  darajasi");
// } else {
//     console.log(n+" soni 2 ning" + k +" darajasi emas");
// }
// 4-misol
// let n=prompt("sonni kirit:")
// let k = 0;
// let temp = n;

// while (temp % 3 === 0) {
//     k++;
//     temp = temp / 3;
// }

// if (temp === 1) {
//     console.log(n+" soni 3 ning darajasi");
// } else {
//     console.log(n+" soni 3 ning darajasi emas");
// }

// 3-misol

// let n=16;
// let k=3;
// let qoldiq=0;
// let count=0;
// while(n>=k){
// n=n-k;
// count++;
// }
// console.log("Butun:"+count);
// console.log("Qoldiq:"+ k);
// 2-misol
// let A = parseInt(prompt("Sonni kiriting: ") );
// let B = parseInt(prompt("Sonni kiriting: ")) ;
// let count=0;
// while(A>=B){
// A=A-B;
// count++;
// }
// console.log("A kesmani B kesmada "+count+" marta joylashtirish mumkin");

// 1-misol
let A = parseInt(prompt("Sonni kiriting: ") );
let B = parseInt(prompt("Sonni kiriting: ")) ;
let count=0;
while(A>=B){
A=A-B;
count++;
}
console.log("A kesmaning bo'sh qismi "+A+" ga teng");