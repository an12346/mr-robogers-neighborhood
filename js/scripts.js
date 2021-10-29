//$(document).ready(function(){
  //let roboArray = []

//})

//const array1 = [1,2,3,4,5];
//let roboArray = [];
//for (let i = 0; i <= 2; i +=1) {
  //roboArray.push(array1[i]);
//}
//roboArray;


$(document).ready(function(){
  let arrayG = []

  function populateList(inArray){
    let counter = 1;
    inArray.forEach(function(element) {
      $("#listItem"+counter).text(element);
      counter ++;
    });
  }

$("#formOne").submit(function(event) {
  event.preventDefault();
  arrayG[0] = $("#number1").val();
  arrayG[1] = $("#number2").val();
  arrayG[2] = $("#number3").val();
  arrayG[3] = $("#number4").val();
  arrayG[4] = $("#number5").val();

  arrayG.sort();
  let counter = 0;

  arrayG.forEach(function(element) {
    arrayG[counter] = element.toUpperCase();
    arrayG[counter] = arrayG[counter].toUpperCase();
    counter ++;
  });




$(document).ready(function(){
  let roboArray = [];
  let input = document.getElementById("#number");

  
  
  let arrayG = []

  function populateList(inArray){
    let counter = 1;
    inArray.forEach(function(element) {
      $("#number"+counter).text(element);
      counter ++;
    });

  }

