let next = document.querySelector("#next");
let prev = document.querySelector("#prev");
let circles = document.querySelectorAll(".circle");
let progress = document.querySelector(".progress");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  update();
});
prev.addEventListener("click", () => {
  currentActive--;
  update();
});

function update() {
  // Clamp currentActive between 1 and circles.length
  if (currentActive > circles.length) currentActive = circles.length;
  if (currentActive < 1) currentActive = 1;

  circles.forEach((circle, indx) => {
    if (indx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

     // Disable/enable buttons
    prev.disabled = currentActive === 1;
    next.disabled = currentActive === circles.length;

}
