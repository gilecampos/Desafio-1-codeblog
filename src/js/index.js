const openModalCreatorBtn = document.querySelector(
  "[data-open-modal='open-modal-creator']"
);
const closeModalCreatorBtn = document.querySelector(
  "[data-close-modal='close-modal-creator']"
);
const modalCreator = document.querySelector(
  "[data-modal-creator='modal-creator']"
);
const fade = document.querySelector(".fade");

const toggleModal = () => {
  modalCreator.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[openModalCreatorBtn, closeModalCreatorBtn, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});
