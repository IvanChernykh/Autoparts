"use strict";

let quickRequestModal = document.querySelector(".quick_request_modal");
let quickRequestButton = document.querySelector(".quick_request_button");
let closeBtn = document.querySelectorAll(".close_btn");
let modalButton = document.querySelectorAll(".modal_button");
let thanksModal = document.querySelector(".thanks_modal");
let callBackBtn = document.querySelectorAll(".callback_btn");
let callbackModal = document.querySelector(".callback_modal");

for (let btn of closeBtn) {
  btn.addEventListener("click", closeModal);
}
for (let btn of callBackBtn) {
  btn.addEventListener("click", openCallbackModal);
}
for (let button of modalButton) {
  button.addEventListener("click", openThanksModal);
}
quickRequestButton.addEventListener("click", openModal);

function openModal() {
  quickRequestModal.classList.add("modal_showed");
}
function openCallbackModal() {
  callbackModal.classList.add("modal_showed");
}
function closeModal() {
  quickRequestModal.classList.remove("modal_showed");
  thanksModal.classList.remove("modal_showed");
  callbackModal.classList.remove("modal_showed");
}
function openThanksModal() {
  thanksModal.classList.add("modal_showed");
  callbackModal.classList.remove("modal_showed");
  quickRequestModal.classList.remove("modal_showed");
}
