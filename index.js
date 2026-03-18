const sliderEl = document.querySelector(".slider__input")
const imgEl = document.querySelector(".slider__image")
console.log(sliderEl, imgEl);

sliderEl.addEventListener("input", _.debounce((event)=>{
console.log(event.target.value);
imgEl.style.width = event.target.value+"px";

}, 100))