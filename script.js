let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let card4 = document.getElementById("card4");

let click = false;
let click2 = false;
let click3 = false;
let click4 = false;

card1.addEventListener("click", () => {
  if (click === false) {
    gsap.to("#card1", {
      height: "auto",
      duration: 1,
      ease: "expo",
    });
    gsap.to(".move1", {
      y: -50,
      duration: 1,
      ease: "elastic",
    });
    click = true;
  } else if (click === true) {
    gsap.to("#card1", {
      height: "15vh",
      duration: 1,
      ease: "expo",
    });
    gsap.to(".move1", {
      y: 0,
      duration: 1,
      ease: "elastic",
    });
    click = false;
  }
});

card2.addEventListener("click", () => {
  if (click2 === false) {
    gsap.to("#card2", {
      height: "auto",
      duration: 1,
      ease: "expo",
    });
    gsap.to(".move2", {
      y: -50,
      duration: 1,
      ease: "elastic",
    });
    click2 = true;
  } else if (click2 === true) {
    gsap.to("#card2", {
      height: "15vh",
      duration: 1,
      ease: "expo",
    });
    gsap.to(".move2", {
      y: 0,
      duration: 1,
      ease: "elastic",
    });
    click2 = false;
  }
});

card3.addEventListener("click", () => {
  if (click3 === false) {
    gsap.to("#card3", {
      height: "auto",
      duration: 1,
      ease: "expo",
    });
    gsap.to(".move3", {
      y: -50,
      duration: 1,
      ease: "elastic",
    });
    click3 = true;
  } else if (click3 === true) {
    gsap.to("#card3", {
      height: "15vh",
      duration: 1,
      ease: "expo",
    });
    gsap.to(".move3", {
      y: 0,
      duration: 1,
      ease: "elastic",
    });
    click3 = false;
  }
});

card4.addEventListener("click", () => {
  if (click4 === false) {
    gsap.to("#card4", {
      height: "auto",
      duration: 1,
      ease: "expo",
    });
    gsap.to(".move4", {
      y: -50,
      duration: 1,
      ease: "elastic",
    });
    click4 = true;
  } else if (click4 === true) {
    gsap.to("#card4", {
      height: "15vh",
      duration: 1,
      ease: "expo",
    });
    gsap.to(".move4", {
      y: 0,
      duration: 1,
      ease: "elastic",
    });
    click4 = false;
  }
});
