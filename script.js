let string="";
let memory=0;
let buttons=document.querySelectorAll(".btn");
let input=document.querySelector(".input");

for(let button of buttons){
    button.addEventListener("click",(evt)=>{
        if(evt.target.innerHTML=="="){
            string=eval(string);
            input.value=string;
        }
        else if(evt.target.innerHTML=="C"){
            string="";
            input.value=string;
        }
        else{
           string=string+evt.target.innerHTML;
           input.value=string;
        }
    })
}