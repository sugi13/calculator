let field = document.getElementById("number-field");
let numbers = document.querySelectorAll(".btn");
let Equal = document.querySelector(".btn-equal");
let ClearBtn = document.querySelector(".btn-clear");

numbers.forEach(function(btn){
    btn.addEventListener("click", function(e){
        let Val = e.target.dataset.val;
        field.value += Val;
    })
})

Equal.addEventListener("click", function(e){
    if(field.value === ""){
    }
    else{
        let res = eval(field.value);
        field.value = res;
    }
})

ClearBtn.addEventListener("click", function(e){
    field.value = "";
})


