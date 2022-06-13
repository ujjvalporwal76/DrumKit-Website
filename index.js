// Detecting Mouse Press on Button
var numberOfDrumButtons = document.querySelectorAll(".Drum").length;

for(var i=0; i<numberOfDrumButtons; i++){
  document.querySelectorAll(".Drum")[i].addEventListener("click", mousePress);
}

 function mousePress(){
    var char = this.innerHTML;
    playSound(char);
    buttonAnimation(char);
  }

//Detecting Key Press on Keyboard.

document.addEventListener("keypress", function(event){
  playSound(event.key);
  buttonAnimation(event.key);
});


//Function Which will be call to play sound
function playSound(key){
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
  }
}

//Function to create Animation to Drum button

function buttonAnimation(currentkey){
  var activeButton = document.querySelector("."+currentkey);

  activeButton.classList.add("pressed");

  setTimeout(function(){activeButton.classList.remove("pressed");}, 150);
}



  // if(char==="w"){
  //   var audio = new Audio("sounds/tom-1.mp3");
  //   audio.play();
  // }
  // if(char==="a"){
  //   var audio = new Audio("sounds/tom-2.mp3");
  //   audio.play();
  // }
  // if(char==="s"){
  //   var audio = new Audio("sounds/tom-3.mp3");
  //   audio.play();
  // }
  // if(char==="d"){
  //   var audio = new Audio("sounds/tom-4.mp3");
  //   audio.play();
  // }
  // if(char==="j"){
  //   var audio = new Audio("sounds/snare.mp3");
  //   audio.play();
  // }
  // if(char==="k"){
  //   var audio = new Audio("sounds/crash.mp3");
  //   audio.play();
  // }
  // if(char==="l"){
  //   var audio = new Audio("sounds/kick-bass.mp3");
  //   audio.play();
  // }
// var audio = new Audio("sounds/tom-1.mp3"); //using this line of code we are creating a new HTMLAudioElement.
// audio.play();

// for(var i=0; i<numberOfDrumButtons; i++){
//   document.querySelectorAll(".Drum")[i].addEventListener("click", handleclick);
// }
//
//   function handleclick(){
//     alert("I got clicked");
//   }
