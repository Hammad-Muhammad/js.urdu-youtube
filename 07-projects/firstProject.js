
const buttons = document.querySelectorAll('.bts');
const body = document.querySelector("body");
const text = document.querySelectorAll("#tts");

text.forEach(function (tts){
  console.log(tts)
  tts.addEventListener('click', function(tts){
    console.log(tts)
    console.log(e.target)
  })
})

buttons.forEach(function (button) {
  console.log(button)
  button.addEventListener('click', function (e) {  
    console.log(e)  
    console.log(e.target) 
   switch(e.target.id){
    case"grey":
    body.style.backgroundColor = e.target.id
    break;
   }
    switch(e.target.id){
      case"wheat":
      body.style.backgroundColor = e.target.id
      break;
    }
    switch(e.target.id){
      case"skyblue":
      body.style.backgroundColor = e.target.id;
      break;
    }
    switch (e.target.id){
      case"black":
      body.style.backgroundColor = e.target.id;
     break;
    }
   switch (e.target){
    case"yellowgreen":
    body.style.backgroundColor = e.target.id;
    break;
   }
  })
});