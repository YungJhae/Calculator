var buttons = document.querySelectorAll("button");
var inputs = (document.getElementById("inputs")); 

calculate()

function calculate(){
    buttons.forEach(function(button){
        button.addEventListener("click", function(e){
           if(e.target.innerText == "C"){
                inputs.innerText = " ";
           }
           else if(e.target.innerText == "D"){
                inputs.innerText = inputs.innerText.slice(0, -1);
           }
           else if(e.target.innerText == "="){
                inputs.innerText = eval(inputs.innerText);
           }
           else{
               inputs.innerText += e.target.innerText;
           }
            
        })
    })
}
     