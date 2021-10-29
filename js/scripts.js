$(document).ready(function(){
  
let form = $("formOne")
  
function roboArray(number) {
  let newList = "";

  if(noInputtedNum(number)) {
    return false;
  } else {
    const roboArray = number.toString();
  
    roboArray.forEach(function(number) {
      if(number[0] === 1 || number[0] === 2 || number[0] === 3) {
        let number = 1;
        let roboNum = number.toWords(1);

      }
    }
  }


}
  
  
  });



//form.submit(function(e) {
   // e.preventDefault();
    //numText = "";
    //let num = $("#number1").val();

    //let form = $("formOne");
  //let numText = "";
  //const array1 = [1,2,3,4,5];
//let roboArray = [];
//for (let i = 0; i <= 2; i +=1) {
  //roboArray.push(array1[i]);
  //roboArray.forEach(function(numbers) {
   // console.log(roboArray);
  //});
//roboArray;