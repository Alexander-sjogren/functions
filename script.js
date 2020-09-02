const btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    console.log("test");
});

const text = document.getElementById("input");

text.addEventListener("input", function(){
    console.log("skriver");
});

function getInputValue(){
    let inputVal = document.getElementById("input").value;
    let upperCase = inputVal.toUpperCase();
    console.log(upperCase);
    // Raden under kämpade jag med länge!
    document.getElementById("input").value = upperCase;
    
    
    


}