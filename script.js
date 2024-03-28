const ham = document.querySelector("#ham");
const list = document.querySelector(".responsivelist");

ham.addEventListener("click", ()=>{
  if(list.style.display === "flex"){
    list.style.display = "none";
  }
  else{
    list.style.display = "flex";
  }
});

const tabs = document.querySelectorAll(".responsivelist li a");
for(let i=0; i<tabs.length; i++){
  tabs[i].addEventListener('click' , ()=> {
    list.style.display= "none";
  });
}

const homee = document.querySelector('.homee');
const aboutt = document.querySelector('.aboutt');
const servicess = document.querySelector('.servicess');
const portfolioo = document.querySelector('.portfolioo');
const contactt = document.querySelector('.contactt');

homee.addEventListener("click", () =>{
  homee.style.color = "#7fc8f8";
  aboutt.style.color = "white";
  servicess.style.color = "white";
  portfolioo.style.color = "white";
  contactt.style.color = "white";
});

aboutt.addEventListener("click", () =>{
  homee.style.color = "white";
  aboutt.style.color = "#7fc8f8";
  servicess.style.color = "white";
  portfolioo.style.color = "white";
  contactt.style.color = "white";
});

servicess.addEventListener("click", () =>{
  homee.style.color = "white";
  aboutt.style.color = "white";
  servicess.style.color = "#7fc8f8";
  portfolioo.style.color = "white";
  contactt.style.color = "white";
});

portfolioo.addEventListener("click", () =>{
  homee.style.color = "white";
  aboutt.style.color = "white";
  servicess.style.color = "white";
  portfolioo.style.color = "#7fc8f8";
  contactt.style.color = "white";
});

contactt.addEventListener("click", () =>{
  homee.style.color = "white";
  aboutt.style.color = "white";
  servicess.style.color = "white";
  portfolioo.style.color = "white";
  contactt.style.color = "#7fc8f8";
});





const nav = document.querySelector(".nav");

window.onscroll = () =>{
  if(window.scrollY > 750){
    nav.style.backgroundColor = "Black";
  }
  else{
    nav.style.backgroundColor = "transparent";
  }
}

const skills = document.querySelector(".skills");
const myskills = document.querySelector(".myskills");

const myeducation = document.querySelector(".myeducation");
const education = document.querySelector(".education");

skills.addEventListener("click", () => {
  myskills.style.display = "flex";
  myeducation.style.display = "none";
  skills.style.color = "#5aa9e6";
  education.style.color = "white";
  skills.style.textDecoration = "underline";
  education.style.textDecoration = "none";
});

education.addEventListener("click", () => {
  myskills.style.display = "none";
  myeducation.style.display = "flex";
  skills.style.color = "white";
  education.style.color = "#5aa9e6";
  skills.style.textDecoration = "none";
  education.style.textDecoration = "underline";
});

const portfolioProj = document.querySelector('.myportfolio');
const portfoliodata = document.querySelector('.portfoliodata')
const imgg = document.querySelector('.imgg');

portfolioProj.addEventListener('mouseover',() => {
  portfoliodata.style.top = "0";
  imgg.style.filter = "blur(5px) brightness(0.7)";
  imgg.style.transform  ="scale(1.1)";
});

portfolioProj.addEventListener('mouseleave',() => {
  portfoliodata.style.top = "100%";
  imgg.style.filter = "blur(0px)";
  imgg.style.transform  ="scale(1)";
});

const resturant = document.querySelector('.restaurant');
const restaurantdata = document.querySelector('.restaurantdata');
const restimg = document.querySelector('.restimg');

resturant.addEventListener('mouseover', () =>{
  restaurantdata.style.top = "0";
  restimg.style.filter = "blur(5px) brightness(0.7)";
  restimg.style.transform  ="scale(1.1)";
});

resturant.addEventListener('mouseleave', () => {
  restaurantdata.style.top = "100%";
  restimg.style.filter = "blur(0px)";
  restimg.style.transform  ="scale(1)";
});