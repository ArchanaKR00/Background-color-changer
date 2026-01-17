/*let n=Math.random()
console.log(n)
*/
/*
let n=Math.random()
n=n*6
console.log(Math.round(n))
*/
/*
let n=Math.random()
n=n*6
console.log(Math.floor(n))
*/

/*
let n=Math.random()
n=n*6
console.log(Math.floor(n))
*/

/*
const btn = document.querySelector("#btn");
const div = document.querySelector("#name");

let arr = ["archana", "sreeram", "shon"];

let randomName = () => {
  let random = arr[Math.floor(Math.random() * arr.length)];
  div.innerHTML = random;
  console.log(random);
};

btn.addEventListener("click", randomName);
*/

/*
const btn = document.querySelector("#btn");
const div = document.querySelector("#name");

let randomName=()=>{
let arr = ["archana", "sreeram", "shon"];
for(i=1;i<2;i++){
    let random=arr[Math.floor(Math.random()*arr.length)];
    console.log(random)
}}
btn.addEventListener("click",randomName);
*/

/*
const btn = document.querySelector("#btn");
const div = document.querySelector("#name");

let value="0123456789ABCDEF"

let randomValue=()=>{
    for(i=1;i<4;i++){
    let random=value[Math.floor(Math.random()*value.length)];

    console.log(random)
}}
btn.addEventListener("click",randomValue);
*/


const btn = document.querySelector("#btn");
const heading = document.querySelector("#heading");



let randomColor=()=>{
    let value="0123456789ABCDEF"
let hash="#"        
    for(i=0;i<6;i++){
     hash=hash+value[Math.floor(Math.random()*value.length)];
  btn.innerHTML=hash
    
}return hash

}

btn.addEventListener("click",()=>{
    document.body.style.backgroundColor=randomColor()
    btn.style.backgroundColor = random;
  heading.style.color = random;
  colorText.innerText = random;
})


