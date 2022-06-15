let infoBtn = document.querySelectorAll("#information");
let adjBtn = document.querySelectorAll("#adjust");
let divInfo = document.querySelectorAll(".info");
let divAdj = document.querySelectorAll(".adjust");
let ChatIcon = document.querySelector("#Chat");

infoBtn[0].onclick =_=>{
    divInfo[0].classList.toggle("d-none");
    infoBtn[0].children[0].classList.toggle("Rotate");
    infoBtn[0].classList.toggle("changeMode");
}
adjBtn[0].onclick =_=>{
    divAdj[0].classList.toggle("d-none");
    adjBtn[0].classList.toggle("changeMode");
}


// let navH = nav.getBoundingClientRect().height;
window.onscroll = _=>{
    if (scrollY > 200) {
        ChatIcon.classList.remove("d-none")
    } else {
        ChatIcon.classList.add("d-none")

    }


}




// if (infoBtn[0].children[0].getAttribute("class").split(" ")[1] == "fa-angles-down") {
//     infoBtn[0].children[0].classList.toggle("fa-angles-down","fa-angles-up");
// }else{
//     infoBtn[0].children[0].getAttribute("class").split(" ")[1] === "fa-angles-down"
// }