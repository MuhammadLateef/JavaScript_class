// let btn = document.getElementById('btnId');


// btn.addEventListener('click',alertMessage);

// function alertMessage() {
//     alert("Hello World")
// }

// -------------------- remove event listner 

let btn2 = document.getElementById("btn2Id");
btn2.addEventListener("click", alertMessage);

function alertMessage() {
  alert("add event listner");
}

function removeEvent() {
  btn2.removeEventListener("click", alertMessage);
}