let value = document.getElementById('counterValue');
let decrementBtn = document.getElementById("decrease");
let incrementBtn = document.getElementById("increase")
let count = 0;

function onDecrement(){
     let textvalue = document.getElementById('counterValue').textContent;
     value.textContent = parseInt(textvalue) - 1
     if(value.textContent > 0){
        value.style.color = 'green'
     }
     else if(value.textContent < 0){
        value.style.color = 'red'
     }
     else{
        value.style.color = 'black'
     }

}
function onReset(){
    value.textContent = '0'
    value.style.color = 'black'
}
function onIncrement(){
    let textvalue = document.getElementById('counterValue').textContent;
     value.textContent = parseInt(textvalue) + 1
     if(value.textContent > 0){
        value.style.color = 'green'
     }
     else if(value.textContent < 0){
        value.style.color = 'red'
     }
     else{
        value.style.color = 'black'
     }
}

