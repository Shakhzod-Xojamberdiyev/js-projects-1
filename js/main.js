
var elForm = document.querySelector(".fizz-form")
var elInput = document.querySelector(".fizz-input")
var elAnswer = document.querySelector(".fizz-answer")

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    
    var elInputValue = Number(elInput.value);
    
    if(elInputValue % 5 == 0  && elInputValue % 3 == 0 ){
        elAnswer.textContent = "FizzBuzz"
    }
    else if(elInputValue % 5 == 0){
        elAnswer.textContent = "Fizz"
    }
    else if(elInputValue % 3 == 0){
        elAnswer.textContent = "Buzz"
    }
    else{
        elAnswer.textContent =  `${elInputValue} is not divisible by 5 or 3 !`
    };
    
    elInput.value = ""
})



// var elHowmuch = Number(prompt("Pulingizni kiriting !"));
// var airPlane = 500 * 10900;
// var dollar = 250 * 10900;
// var euro = 250 * 12272.64;
// var all = airPlane + dollar + euro;

// if (all <= elHowmuch){
//     console.log("Oq yo'l !");
// }else{
//     console.log("Ogina sabr qiling !");
// }





var userForm = document.querySelector(".user-form");
var userMoney = document.querySelector(".user-money");
var userSelect = document.querySelector(".user-select");
var userAnswer = document.querySelector(".user-answer");

userForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    
    userAnswer.textContent = userMoney.value * userSelect.value
    
}) ;






var X = Math.floor(Math.random() * (100 - 1 + 1) + 1);
var randomForm = document.querySelector(".random-form");
var randomInput = document.querySelector(".random-input");
var randomDelete = document.querySelector(".random-delete");
var randomAlert = document.querySelector(".random-alert");
var randomBtn = document.querySelector(".random-btn");

var rDelete = 6;
randomDelete.textContent = rDelete;

randomForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    
    var randomInputValue = Number(randomInput.value);

    if(rDelete > 1){
        
        if (randomInputValue == X){
            randomAlert.textContent = "Congratulations you found the number !"
        }
        else if (randomInputValue <= X){
            randomAlert.textContent = `${randomInputValue} is a smaller number than X !`
        }
        else if (randomInputValue >= X){
            randomAlert.textContent = `${randomInputValue} is a bigger number than X !`
        }
        
    }
    
    else {
        randomBtn.setAttribute("disabled", "disabled")
        randomAlert.textContent = "Game Over !"
    }
    
    rDelete = rDelete - 1
    randomDelete.textContent = rDelete;
    elInput.value = ""
    
})

