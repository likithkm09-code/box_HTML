let btn = document.getElementById("btn");
let name = document.getElementById("name");
let neon1 = document.getElementById("neon1");
let neon2 = document.getElementById("neon2");
let neon3 = document.getElementById("neon3");
let neon4 = document.getElementById("neon4");

btn.addEventListener('click', () => {
    if (btn.textContent == "On") {
        name.classList.add("text-glow");
        neon1.classList.add("red-neon");
        neon2.classList.add("red-neon");
        neon3.classList.add("blue-neon");
        neon4.classList.add("blue-neon");
        btn.textContent = "Off";
    }
    else {
        name.classList.remove("text-glow");
        neon1.classList.remove("red-neon");
        neon2.classList.remove("red-neon");
        neon3.classList.remove("blue-neon");
        neon4.classList.remove("blue-neon");
        btn.textContent = "On";
    }

})