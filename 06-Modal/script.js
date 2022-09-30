"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

for (let btn of btnOpenModal) {
  console.log(btn);
  btn.addEventListener("click", function () {
    console.log(`Clicked ${btn}`);
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  console.log(e.key.toLowerCase());
  if (e.key.toLowerCase() === "escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
