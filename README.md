# Mr. Roboger's Neighborhood

#### By: Anna Pittman

#### A website that returns a user's number in ascending order, while changing specific numbers into words.

## Technolgies Used

* _HTML_
* _CSS_
* _JavaScript_

## Description 

A website that has the user enter a number, returns every number before the inputted number in ascending order from zero. Also, specific numbers are changed to words. For example, a number with the first digit of "1" is changed to "Beep", a number with a first digit of "2" is changed to "Boop", and a number with the first digit containing a "3" is changed to "Won't you be my neighbor?"

## Setup/Installation Requirements

* Clone this repository to your desktop
* Navigate to the top level of the directory: mr-robogers-neighborhood
* Open index.html

## Known Bugs

* Does not display the array made from the inputted numbers
* Does not change inputted numbers into the correct words

## License

[GitHub Repository](https://github.com/an12346/mr-robogers-neighborhood.git)

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2021 Anna Pittman

## Specs

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
for (let i = 0; i <= 1; i +=1) {
  roboArray.push(array1[i]);
}
Expected output: [1,2]

Describe:"It should return an array with only 1, 2, and 3 if those numbers are inputted"
Test: roboArray [];
Code:
const array1 = [1,2,3,4,5];
let roboArray = [];
for (let i = 0; i <= 2; i +=1) {
  roboArray.push(array1[i]);
}
Expected Ouput: [1,2,3];

Describe: "It will return an array of numbers from zero, to the inputted number."
Test: roboArray [];
Code:
let input =[5];
let roboArray = [];
for (let i = 0; i <= input; i += 1){
  roboArray.push(i);
}
Exprected output: [0,1,2,3,4,5]





