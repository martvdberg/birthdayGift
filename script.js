const imgContainer = document.querySelector(".card__imgContainer")
// Make confettie blast
const kaboem = document.createElement("img");
kaboem.setAttribute("src", "./assets/gif/kaboem.gif");
kaboem.classList.add("confettie");
imgContainer.appendChild(kaboem);

console.log(document.querySelectorAll(".card__textContainer--1 .line"));
const tl = gsap.timeline({paused: true});
tl.add("start")
.from(".card__headingContainer--text", {opacity: 0, duration: 1.5, stagger: 0.3, scale: 0, ease: "bounce"},"start+0.3")
.to(".name", {opacity: 0, duration: 0.7}, ">+1.5")
.to(".age", {scale: 0.6, x:187, y:97, duration: 1},"<")
.add("block_1")
.to(".confettie", {opacity: 0, duration: 1})
.from(".card__textContainer--1 .line1", {opacity: 0, y: -40, duration: 0.7},"block_1")
.to(".card__textContainer--1 .line1", {opacity: 0, y: 40, duration: 0.7},">+1")
.from(".card__textContainer--1 .line2 .line__block", {opacity: 0, x: -40, duration: 1, stagger: 0.5})
.to(".card__textContainer--1 .line2 .line__block", {opacity: 0, x: -40, duration: 1, stagger: 0.5},">+1")
.from(".card__textContainer--1 .line3 .line__block", {opacity: 0, duration: 0.7, stagger: 0.2}, ">-0.5")
.to(".card__textContainer--1 .line3 .line__block", {opacity: 0, y: -50, duration: 0.7, stagger: 0.2}, ">1")
.add("block_2")
.from(".card__textContainer--2 .line1", {opacity: 0, y: 30, duration: 1, ease: "bounce"}, "block_2+1")
.from(".card__textContainer--2 .line2 .line__block", {opacity: 0, stagger: 0, duration: 1}, "<+1")
.to(".card__textContainer--2 .line1", {opacity: 0}, ">")
.add("block_3")
.from(".card__textContainer--3 .line1", {opacity: 0, scale:4, duration: 1, rotation: 360},"block_3-2")
.to(".card__textContainer--2 .line2 .line__block", {opacity: 0, stagger: 0, duration: 1}, ">+0.6")
.from(".card__textContainer--3 .line1", {opacity: 0},"<")
.from(".card__textContainer--3 .line2 .line__block", {opacity:0, scale:0.6, stagger: 0.2, duration: 0.6, ease: "bounce"}, ">-1")
.to(".card__textContainer--3 .line2 .line__block", {opacity:0, scale:0.6, stagger: 0.2, duration: 0.6, ease: "bounce"}, ">+1")
.from(".card__textContainer--4 .header", {opacity: 0, y: -30, duration: 1}, ">")
.from(".card__textContainer--4 .show", {opacity:0, y: 20, stagger: 0.3},"<+0.5")

window.addEventListener("load",()=>{
  
  tl.play()
})