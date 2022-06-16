// Add confettie blast
const kaboem = document.createElement("img");
kaboem.setAttribute("src", "./assets/gif/kaboem.gif");
kaboem.classList.add("confettie");

// When everything is loaded add kaboem to the page and start the animation timeline
window.addEventListener("load", () => {
  document.querySelector(".card__imgContainer").appendChild(kaboem);
  const tl = gsap.timeline();
  tl.from(
    "#mainHeading",
    {
      opacity: 0,
      duration: 1.2,
    },
    "+2"
  )
    .to(".confettie", { opacity: 0, duration: 0.7 }, ">-0.5")
    .add("textblock1")
    .to(
      ".card__headingContainer",
      { x: -203, y: -106, scale: 0.6 },
      "textBlock1"
    )
    .from(
      ".card__textContainer--1 .line1",
      { opacity: 0, x: -20 },
      "textBlock1+2"
    )
    .to(".card__textContainer--1 .line1", { opacity: 0, x: 20 }, ">1.5")
    .from(".card__textContainer--1 .line2", { opacity: 0, x: -20 }, ">+.5")
    .to(".card__textContainer--1 .line2", { opacity: 0, x: 20 }, ">1.5")
    .from(".card__textContainer--1 .line3", { opacity: 0, x: -20 }, ">+.5")
    .to(".card__textContainer--1 .line3", { opacity: 0, x: 20 }, ">1.5")

    .add("textBlock2")
    .from(
      ".card__textContainer--2 .line1",
      { opacity: 0, x: -20 },
      "textBlock2"
    )
    .to(".card__textContainer--2 .line1", { opacity: 0, x: 20 }, ">1.5")
    .from(".card__textContainer--2 .line2", { opacity: 0, x: -20 }, ">+.5")
    .from(".card__textContainer--3 .line1", { opacity: 0 }, "<.5")

    .to(".card__textContainer--2 .line2", { opacity: 0, x: 20 }, ">1.5")
    .to(".card__textContainer--3 .line1", { opacity: 0 }, "<.6")
    .from(".card__textContainer--3 .line2", { opacity: 0 }, "<.5")
    .to(
      ".card__textContainer--3 .line2",
      { rotate: -17, transformOrigin: "right right" },
      "<-.7"
    )
    .from(".card__textContainer--4", { opacity: 0, x: -200 })
    .from("li", { opacity: 0, y: 20, stagger: 0.2 })
    .to(".hl", { opacity: 1 });
});
