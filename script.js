
let div = document.querySelector("div");
let p = document.querySelector("p");
let darkModeButton = document.querySelector("button");
let i = document.querySelector("i");

function Change(e){
    // console.dir(e)
    if(e.key!=" "){
            div.textContent = e.key
    p.textContent = `Key Press By User :  ${e.key}`;
    }else{
        div.textContent = "Space";
        p.textContent = "Key Press By User : Space";
    }


}
window.addEventListener("keydown",Change)

darkModeButton.addEventListener("click",()=>{
    document.body.classList.toggle("dark-mode")
    console.dir(darkModeButton);
    console.dir(i);
    if(i.getAttribute("class") == "fa-solid fa-moon"){
      i.setAttribute("class", "fa-solid fa-sun")
    }

    else if(i.getAttribute("class") == "fa-solid fa-sun") {
        i.setAttribute("class", "fa-solid fa-moon")
    }

    
})