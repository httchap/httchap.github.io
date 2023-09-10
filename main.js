// open and close menu
let openMenuBtn = document.querySelector(".menu--svg")
let menu = document.querySelector(".menu--nav")
openMenuBtn.addEventListener("click",()=>{
    menu.classList.toggle("menu")
    if(menu.classList.contains("menu")){
        openMenuBtn.innerHTML = `<svg width="40" height="40" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M3 8V6h18v2H3Zm0 5h18v-2H3v2Zm0 5h18v-2H3v2Z" clip-rule="evenodd"></path>
      </svg>`
    }else{
        openMenuBtn.innerHTML = 

      `<svg width="40" height="40" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"></path>
      </svg>`
    }
})

// FORM VALIDATION
let formBtn = document.querySelector(".submit")
formBtn.addEventListener("click",(e)=>{
  e.preventDefault()
  let name = document.querySelector(".name")
  if(name.value === ""){
    name.placeholder = "Enter name"
  }

})

let number = document.querySelectorAll(".num")
let interval = 5000
number.forEach((value) => {
  let startValue = 0
  let endValue = parseInt(value.getAttribute("data-value"))
  let duration = Math.floor(interval / endValue)
  let counter = setInterval(()=>{
    startValue += 1
    value.textContent = `+${startValue}`;
    if(startValue == endValue){
      clearInterval(counter)
    }
  },duration)
})

// SLIDER
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// FAQ SECTION
const faqs = document.querySelectorAll(".faq--question")
faqs.forEach(faq => {
  faq.addEventListener("click",()=>{
    faq.classList.toggle("active")
  })
})

// UPPER
let upBtn = document.querySelector(".upper")
window.addEventListener("scroll",()=>{
  let distance = window.scrollY;
  if(distance > 500){
    upBtn.classList.remove("hidden")
  }else{
    upBtn.classList.add("hidden")
  }
})
upBtn.addEventListener("click",()=>{
  window.scrollTo({
    behavior:"smooth",
    top:0
  })
})
// SCROLL REVEAL
window.sr = ScrollReveal()
sr.reveal("#about",{
    delay:375,
    duration:1000,
    reset:true
})
sr.reveal("#services",{
  delay:375,
  duration:1000,
  reset:true
})
sr.reveal("#partner",{
  delay:375,
  duration:1000,
  reset:true
})
sr.reveal("#testimonials",{
  delay:375,
  duration:1000,
  reset:true
})
sr.reveal("#faq",{
  delay:375,
  duration:1000,
  reset:true
})
sr.reveal("#team",{
  delay:375,
  duration:1000,
  reset:true
})
sr.reveal("#contact",{
  delay:375,
  duration:1000,
  reset:true
})
sr.reveal("#footer",{
  delay:375,
  duration:1000,
  reset:true
})