const button = document.querySelector('button');

// Function that adds 'clicked' class to the element
function clicked (e) {
  this.classList.add('clicked');
}

// Adds click function as a callback to the event listener
button.addEventListener('click', clicked);






// const numbers = [25, 22, 12, 56, 8, 18, 34];
// let smallerThan20 = [];

// for (let num of numbers) {
//   if (num < 20) {
//     smallerThan20.push(num);   
//     console.log(num);
//   }
// }


// const fruitBasket = ['banana', 'pear', 'guava'];

// // fruitBasket.length is 3
// // for (let i = 0; i < fruitBasket.length; i++) {
// //   console.log("There's a " + fruitBasket[i] + " in the basket")
// // }


// // How about THIS? A 'for ... of' loop (ES6)

// for (let fruit of fruitBasket) {
//   console.log("There's a " + fruit + " in the basket")
// }




// function bounceBall() {
//   // console.log('Ball bounced!');
// }


// for (let i = 0; i < 2; i++) {
//   bounceBall()
//   const timesBounced = i + 1;
//   console.log('The ball has bounced ' + timesBounced + ' times')
// }

// console.log('next line of code');

// function sayName (firstName, lastName) {
//   console.log('firstName is  ' + firstName);
//   console.log('lastName is  ' + lastName);
// }

// sayName('Bob', 'Bobinson');




// function add2 (num) {
//   return num + 2;
// }


// const number = add2(8);
// console.log(number);

// const sayHello = function() {

// }

// sayHello ();


// const sayHello2 = () => {

// }

// sayHello2 ();
