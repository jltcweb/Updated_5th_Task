let openNav = () => {
    let openEl = document.getElementById("right-side");
    openEl.style.right = "0px";
}

let openRight = document.getElementById("open");
openRight.addEventListener("click", openNav);

let closeNav = () => {
    let openEl = document.getElementById("right-side");
    openEl.style.right = "-350px"; 
}

let closeRight = document.getElementById("close");
closeRight.addEventListener("click", closeNav);

let changeMode = () => {
    let changeBody = document.getElementById("body");
    changeBody.classList.toggle("change-body");
    let changeColor = document.getElementById("home-txt");
    changeColor.classList.toggle("change-text-color");
    let changeColor1 = document.getElementById("sub-footer-txt");
    changeColor1.classList.toggle("change-text-color");
}

let leftEl = document.getElementById("left-side");
leftEl.addEventListener("click", changeMode);