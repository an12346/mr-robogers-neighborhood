$(document).ready(function() {
  let input = document.getElementById("#input-one");
  let subButton = document.querySelector(".sub-button");
  let resultNum = document.querySelector(".result-numbers");

  subButton.addEventListener("click", createNum);

  let roboArray = [];
  let result;

  function createNum (event) {
    event.preventDefault();

  let numArray = Array.from(String(input), Number);

  for (let i = 0; i <= numArray; i += 1) {
      roboArray.push(i);
  };

  roboArray.forEach(function(element)) {
    if (roboArray[i] == 1) {
      roboArray[i] = "Beep";
    } else if (roboArray[i] == 2) {
      roboArray[i] = "Boop";
    } else if (roboArray[i] == 3) {
      roboArray[i] = "Won't you be my neighbor?"
    } else {
      return roboArray;
    }
      $("#result-number").text(result);
      $("#result-numbers").show();
      
    };
  }

});


      
      
  
   

      
   


