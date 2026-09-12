let sideMinu = document.getElementById("sideMinu");
let openMinu = document.getElementById("openMinu");
let closeMinu = document.getElementById("closeMinu");

var tablinks = document.getElementsByClassName(" tab-links"); var
    tabcontents = document.getElementsByClassName("tab-contents"); function opentab(tabname) {
        for
            (tablink of tablinks) { tablink.classList.remove("active-link"); } for (tabcontent of
            tabcontents) { tabcontent.classList.remove("active-tab"); }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }



// openMinu.addEventListener('click', () => {
//     sideMinu.style.right = "130px";
// })


// closeMinu.addEventListener('click', () => {
//     sideMinu.style.right = "-300px";
// });


//     const menu = document.querySelector("nav ul");
//     const openBtn = document.querySelector(".fa-bars");
//     const closeBtn = document.querySelector(".fa-times");

//     openBtn.onclick = () => {
//         menu.classList.add("show");
//     }

//     closeBtn.onclick = () => {
//         menu.classList.remove("show");
//     }



const menu = document.getElementById("sideMinu");
const openBtn = document.getElementById("openMinu");
const closeBtn = document.getElementById("closeMinu");

// ساخت overlay
const overlay = document.createElement("div");
overlay.classList.add("overlay");
document.body.appendChild(overlay);

openBtn.addEventListener("click", () => {
    menu.classList.add("active");
    overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
    overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
    menu.classList.remove("active");
    overlay.classList.remove("active");
});