const imgContainer = document.querySelector(".card__imgContainer");
const kaboem = document.createElement("img");
kaboem.classList.add("confettie");
imgContainer.appendChild(kaboem);

document.querySelector(".playBtn").addEventListener("click", () => {
  kaboem.setAttribute("src", "./assets/gif/kaboem.gif");

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

    .to(".b7", { y: -500, duration: 4, ease: "linear" }, "<-4")
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

    // .to(".b1", { y: -500, duration: 4, ease: "linear" }, "<-4")
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
    .to(".b2", { y: -520, duration: 5, ease: "linear" }, "<-5")

    .add("block_2")
    .to(".b3", { y: -500, duration: 5, ease: "linear" }, "<-5")

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
    .to(".b4", { y: -500, duration: 5, ease: "linear" }, "<-5")
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
    .to(".b5", { y: -500, duration: 5, ease: "linear" }, "<-5")
    .from(
      ".card__textContainer--4 .header",
      { opacity: 0, y: -30, duration: 1 },
      ">"
    )
    .from(
      ".card__textContainer--4 .show",
      { opacity: 0, y: 20, stagger: 0.4 },
      "<+0.9"
    )

    .from(
      ".replayBtn",
      { opacity: 0, rotation: -360, duration: 0.8, scale: 0 },
      ">+1"
    )
    .to(".b6", { y: -500, duration: 4, ease: "linear" }, "<-5");
});

document.querySelector(".replayBtn").addEventListener("click", () => {
  console.log(imgContainer);
  const replayTl = gsap
    .timeline()
    .to(".card__startContainer", { opacity: 1 }, "startScreen")
    .set(".card__startContainer", { zIndex: 100 })
    .set(".card__headingContainer--text", { opacity: 1, scale: 1 })
    .set(".name", { opacity: 1 })
    .set(".age", { scale: 1, x: 0, y: 0 })
    .set(".confettie", { opacity: 1 })
    .set(".card__textContainer--1 .line1", { opacity: 1 })
    .set(".card__textContainer--1 .line2 .line__block", { opacity: 1, x: 0 })
    .set(".card__textContainer--1 .line3 .line__block", { opacity: 1, y: 0 })
    .set(".card__textContainer--2 .line1", { opacity: 1 })
    .set(".card__textContainer--2 .line2 .line__block", { opacity: 1 })
    .set(".card__textContainer--3 .line1", { opacity: 1 })
    .set(".card__textContainer--3 .line2 .line__block", {
      opacity: 1,
      scale: 1,
    })
    .set(".card__textContainer--4 .header", { opacity: 1, y: 0 })
    .set(".card__textContainer--4 .show", { opacity: 1, y: 0 })
    .set(".replayBtn", { opacity: 1 })
    .set(".b1", { y: 0 })
    .set(".b2", { y: 0 })
    .set(".b3", { y: 0 })
    .set(".b4", { y: 0 })
    .set(".b5", { y: 0 })
    .set(".b6", { y: 0 })
    .set(".b7", { y: 0 });

  kaboem.setAttribute("src", " ");
});
