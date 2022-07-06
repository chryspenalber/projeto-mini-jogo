const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");
const clouds = document.querySelector(".cloud-game");
const firstGrass = document.querySelector(".static-ground");

const jump = () => {
  mario.classList.add("jump-mario");

  setTimeout(() => {
    mario.classList.remove("jump-mario");
  }, 500);
};

const loopGame = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const cloudsPosition = clouds.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

    

  if (pipePosition <= 80 && pipePosition > 0 && marioPosition < 200) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./Images/mario-game-over.webp";
    mario.style.width = "120px";
    mario.style.marginLeft = "0px";
    mario.style.bottom = "99px";    

    firstGrass.style.animation = "none";

    clouds.style.animation = "none";
        clouds.style.left = `${cloudsPosition}px`;

    clearInterval(loopGame);
  }
}, 10);

document.addEventListener("keydown", jump);

