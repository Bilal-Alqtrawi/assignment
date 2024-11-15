// Task - 4
// Interface with two Properties
interface Product {
    name: string; // Product name 
    price: number; // Price of product
}

// Function To calculate Total Price (Array Of Product Objects)
function calcTotalPrice(products: Product[]): number {
    return products.reduce((total, product) => total + product.price, 0);
}
// Examples
const products: Product[] = [
    { name: "Laptop", price: 1500 },
    { name: "Mouse", price: 20 },
    { name: "Keyboard", price: 50 },
];

const totalPrice = calcTotalPrice(products); // assign return value from function to variable
console.log(`Total Price: $${totalPrice}`);

// Task-5
function isValidEmail(email: string): boolean {
    const emailRegExr = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ig; // regular Expression For Email

    return emailRegExr.test(email); // return  true or false from Test is Valid email or not based on regExp 
}

// Examples   
const email1 = "test@example.com";
const email2 = "invalid-email";
const email3 = "username@domain.com";

console.log(`${email1} is valid?: ${isValidEmail(email1)}`);
console.log(`${email2} is valid?: ${isValidEmail(email2)}`);
console.log(`${email3} is valid?: ${isValidEmail(email3)}`);

/* 
  To Run This Code here
  1- First you should Install TypeScript:
   - write this command in cmd or Powershell : 
    --- npm install -g typescript 
  then
  2- go to this folder and also in Powershell or cmd write as:
  - From Compile TypeScript file to JavaScript:
   --- tsc product.ts
 3- write : node product.js
*/