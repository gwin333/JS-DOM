// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"

// var divs = document.getElementsByClassName("box");
// console.log(divs);
// console.log(divs[0]);


// divs[0].style.backgroundColor="blue";
// divs.style.backgroundColor="blue"; GIVES ERROR 

// var button = document.getElementById("myButton");

// button.addEventListener('click', function() {
//   document.getElementById('box').style.backgroundColor = 'blue'
// })

var button = document.getElementById("myButton");

console.log(divs);
var divs = document.querySelectorAll('.box'); 

button.addEventListener('click',function(){

for(var i = 0; i < divs.length, i++){
    divs[i].style.backgroundColor = 'blue'
}
)}