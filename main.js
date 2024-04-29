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
// let raqamlar = '';

// while (n > 0) {
//     let raqam = n % 10;
//     yigindi += raqam;
//     // raqamlar = raqam + (raqamlar !== '' ? ', ' : '') + raqamlar;
//     n = Math.floor(n / 10);
// }

// console.log("Raqamlar:", raqamlar);
// console.log("Yig'indi:", yigindi);

if (A > B) {
  for (let i = 0; i < A - B; i++) {
      kesma += '-';
  }
  kesma += 'B';
}
