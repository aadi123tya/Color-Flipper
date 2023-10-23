const button = document.querySelector('button');
const input = document.querySelector('input')
const body = document.querySelector('body');
button.addEventListener('click',function(e){
    e.preventDefault();
    // console.log(input.value)
    body.style.backgroundColor=input.value;
},false)