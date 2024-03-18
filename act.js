var button = document.createElement("button");
button.innerHTML = "Click me NOW!!"; 
button.id = "cool-button"; 
button.classList.add("btn", "btn-primary"); 

var clickCount = 0;
var name;

button.addEventListener("click", function() {
    clickCount++;

    if (clickCount === 1) {
        name = prompt("Enter your name please: ");
        if (name) {
            button.innerHTML = "please DON'T click me again " + name +"!!"; 
        }
        else{
            button.innerHTML = "please DON'T click me again!!"
        }
    } 
    
    else if (clickCount === 2) {
        if (name){
            alert("Congratulations " + name +", you killed the button.");
        }
        else{
            alert("Congratulations, you killed the button.");
            }
            button.disabled = true;
            button.innerHTML = "Dead";
        }
        
    }
);

document.body.appendChild(button);

