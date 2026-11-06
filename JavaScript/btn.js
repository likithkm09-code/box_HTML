let body = document.getElementById("body");
// let btn = document.getElementById("btn");
let circle = document.getElementById("circle");

btn.addEventListener('click', theme)

// function theme(){
//     if(btn.textContent=="liki"){
//         body.classList.add(dark)
//         btn.textContent='light'
//     }else{
//         body.classList.remove("liki")
//         btn.textContent="dark"
//     }
// }
let on = false;
function theme() {
    if (!on) {
        circle.style.left = '32px'
        on=true;
    }
    else {
        circle.style.left = '0px'
        on=false

    }
}





// let btnn = document.querySelector(".btnn");

// btnn.addEventListener("click", () => {
//     btnn.classList.toggle("active");
// });