let drop=document.getElementById("drop");
let catagor=document.querySelector(".ca");
drop.style.display="none";
catagor.addEventListener("mouseover",function()
{
    drop.style.display="inline";
    drop.style.transition="5s";
})
let com=document.getElementById("computer");
let second=document.getElementById("second");
com.addEventListener("mouseover",function()
{
second.style.display="inline";
})
second.addEventListener("mouseleave",function()
{
    drop.style.display="none";
    second.style.display="none";
})









let closebtn=document.getElementById("cross");
let menue=document.querySelector(".menu");
let open_menu=document.getElementById("menu-icon");
closebtn.addEventListener("click",function()
{
    menue.style.display="none";
})
open_menu.addEventListener("click",function()
{
    menue.style.display="block";
})


let contactus=document.getElementById("contact");
let con=document.getElementById("cont");
let about=document.getElementById("infosection");
let a=document.getElementById("abu");
let body=document.querySelector(".all");
about.style.display="none";
a.addEventListener("click",function()
{
    about.style.display="block";
    body.style.display="none";
    contactus.style.display="none";
})
let home=document.getElementById("home");
home.addEventListener("click",function()
{
    about.style.display="none";
    contactus.style.display="none";
    body.style.display="block";

})
con.addEventListener("click",function()
{
    contactus.style.display="block";
    about.style.display="none";
    body.style.display="none";

})























