Specs

Describe: roboArray[]
Test: "It should return an array with a 1 if the number 1 is inputted."
Code: 
const array1 = [1];
let roboArray = [];

Array.forEach(function(element) {
 roboArray.push(element); 
});

Expected output: [1]


Describe:
Test: "It should return an array with only 1 and 2, if those numbers are inputted"
Code: 
const array1 = [1,2,3,4,5];
let roboArray = [];
for (let i = 0; i <= 1; +=1) {
  roboArray.push(array1[i]);
}
roboArray;

Expected output: [1,2]

Describe:
Test: "It should return an array with only 1, 2, and 3 if those numbers are inputted"
Code:
const array1 = [1,2,3,4,5];
let roboArray = [];
for (let i = 0; i <= 2; +=1) {
  roboArray.push(array1[i]);
}
roboArray;
Expected Ouput: [1,2,3];

Describe:
Test: "It should return 1 as the word "Beep" and 2, and 3 if those numbers are inputted"
Code:
const array1 = [1,2,3,4,5];
let roboArray = [];
for (let i = 0; i <= 2; +=1) {
  roboArray.push(array1[i]);

}
roboArray;
Expected Ouput: ["Beep", 2, 3];

