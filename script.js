let result = document.getElementById("response");
result.addEventListener("click",function(){
result.innerText = "You have submitted thankq "
});

let a = 15;
a = 50; // only update no re-declare
console.log(a);

var b = 7;
var b =10; // update + re-declare
console.log(b);

const c = 9; // fixed 


function eat(){ // normal function
    console.log("i am eating"); 
}

eat();


let food = ()=>{ // arrow function
    return 
}

let add = (a,b)=>{
    return a+b;
}

console.log(add(10,10))