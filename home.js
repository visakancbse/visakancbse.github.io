const events = [
  
];
function openNavBar() {
    document.getElementById('navbar').className="navopen"
}
function closeNavBar() {
    document.getElementById('navbar').className="navbox"
}
var current=1;
function slideImage() {
    let arr=document.querySelectorAll('.image-slider')
    arr.forEach((a,i)=>{
        if(i===current){
            a.classList.remove("hide")
        }
        else{
            a.classList.add("hide")

        }
    })
    if(current===3){
        current=0;
    }
    else{
        current++;
    }
}
let interval = setInterval(slideImage, 5000);
