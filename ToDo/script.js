const input=document.querySelector("input");
const main=document.querySelector("main");
const ele=document.createElement("ul");
const  sec=document.createElement("section");

main.appendChild(sec);
let btn;
 function add() {
    const div=document.createElement("div")
    const li=document.createElement("li");
    const span=document.createElement("span");
    span.innerText=input.value;
    btn=document.createElement("button");
    const check=document.createElement("input");
    check.setAttribute("type","checkbox");
    btn.innerText="❌"

    btn.addEventListener("click",()=>{
        li.remove();
    })
    div.append(span,check,btn);
    li.appendChild(div)
    input.value=""
    ele.appendChild(li);
    sec.appendChild(ele);
}


