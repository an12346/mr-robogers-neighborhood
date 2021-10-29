$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();

    let roboArray = [];
    let result;


    function populateList(inArray){
    let counter = 1;
    inArray.forEach(function(element) {
      $("#number1" - counter).text(element)
      counter --;
    });

    roboArray.sort();
    let counter = 0;

    arrayG.forEach(function(element) {
      if (roboArray[i] == 1) {
        result = "Beep";
      } 
      else if (roboArray[i] == 2) {
        result = "Boop";
      } 
      else if (roboArray[i] == 3) {
        result = "Won't you be my neighbor?"; 
      }
      else {
        result = "Input a number"
        }

        populateList(roboArray);
        
      $("#result").removeClass("hidden");
        
      });
  }

});
  

      
      
  
   

      
   


