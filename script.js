let nav = document.querySelector("#navbar");
let btn = document.querySelector(".btn");

const toggle = ()=>{
    btn.textContent = btn.textContent == "Menu" ? "X" : "Menu";
    nav.className = nav.className === "navbarMobile" ? "navbarPc" : "navbarMobile"
}
