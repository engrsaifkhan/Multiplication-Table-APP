function table(){
document.querySelector("#result").innerHTML= ``;
let  input=+document.querySelector("#Input").value;
document.querySelector(".userInput").innerHTML=`${input}`;
for (let i = 1; i <11; i++) {
  let mul=input*i;
  document.querySelector("#result").innerHTML +=`${input} &nbsp;&nbsp;   x  &nbsp;&nbsp;   `+i+`  &nbsp;&nbsp;   =  &nbsp;&nbsp;   ${mul}`+"<br/>";

}
}
