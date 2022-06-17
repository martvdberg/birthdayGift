const imgContainer = document.querySelector(".card__imgContainer");
// Make confettie blast
const kaboem = document.createElement("img");
kaboem.setAttribute("src", "./assets/gif/kaboem.gif");
kaboem.classList.add("confettie");

document.querySelector(".playBtn").addEventListener("click", () => {
  imgContainer.appendChild(kaboem);
  const cardTl = gsap.timeline();
  cardTl
    .add("startScreen")
    .to(".card__startContainer", { opacity: 0 }, "startScreen")
    .set(".card__startContainer", { zIndex: -10 })
    .add("start")
    .from(
      ".card__headingContainer--text",
      { opacity: 0, duration: 1.5, stagger: 0.3, scale: 0, ease: "bounce" },
      "start+0.3"
    )
    .to(".name", { opacity: 0, duration: 0.7 }, ">+1.5")
    .to(".age", { scale: 0.4, x: 187, y: 97, duration: 1 }, "<")

    .add("block_1")
    .to(".confettie", { opacity: 0, duration: 1 })
    .from(
      ".card__textContainer--1 .line1",
      { opacity: 0, y: -40, duration: 0.7 },
      "block_1+0.5"
    )
    .to(
      ".card__textContainer--1 .line1",
      { opacity: 0, y: 40, duration: 0.7 },
      ">+1.5"
    )

    .from(
      ".card__textContainer--1 .line2 .line__block",
      {
        opacity: 0,
        x: -40,
        duration: 1,
        stagger: 0.8,
      },
      ">+0.5"
    )
    .add("startDove")
    .from(".magicHatContainer", { opacity: 0 }, "startDove")
    .to(".dove", { x: 400, y: -200, duration: 3, ease: "linear" }, ">.6")
    .to(".dove", { opacity: 0, duration: 0.2 }, ">")
    .to(".magicHat", { opacity: 0 }, "<")

    .to(
      ".card__textContainer--1 .line2 .line__block",
      { opacity: 0, x: -40, duration: 1, stagger: 0.5 },
      "<"
    )
    .from(
      ".card__textContainer--1 .line3 .line__block",
      { opacity: 0, duration: 0.7, stagger: 0.7 },
      ">-0.5"
    )

    .to(
      ".card__textContainer--1 .line3 .line__block",
      { opacity: 0, y: -50, duration: 0.7, stagger: 0.2 },
      ">1.5"
    )

    .add("block_2")
    .from(
      ".card__textContainer--2 .line1",
      { opacity: 0, y: 30, duration: 1, ease: "bounce" },
      "block_2+1"
    )
    .from(
      ".card__textContainer--2 .line2 .line__block",
      { opacity: 0, stagger: 0, duration: 1 },
      "<+1.5"
    )
    .to(".card__textContainer--2 .line1", { opacity: 0 }, ">")

    .add("block_3")
    .from(
      ".card__textContainer--3 .line1",
      { opacity: 0, scale: 4, duration: 1, rotation: 360 },
      "block_3-2"
    )
    .to(
      ".card__textContainer--2 .line2 .line__block",
      { opacity: 0, stagger: 0, duration: 1 },
      ">+.5"
    )
    .from(".card__textContainer--3 .line1", { opacity: 0 }, ">+1")
    .from(
      ".card__textContainer--3 .line2 .line__block",
      { opacity: 0, scale: 0.6, stagger: 0.2, duration: 0.6, ease: "bounce" },
      ">"
    )
    .to(
      ".card__textContainer--3 .line2 .line__block",
      { opacity: 0, scale: 0.6, stagger: 0.2, duration: 0.6, ease: "bounce" },
      ">+2"
    )
    .from(
      ".card__textContainer--4 .header",
      { opacity: 0, y: -30, duration: 1 },
      ">"
    )
    .from(
      ".card__textContainer--4 .show",
      { opacity: 0, y: 20, stagger: 0.4 },
      "<+0.9"
    );
  // cardTl.play();
});
