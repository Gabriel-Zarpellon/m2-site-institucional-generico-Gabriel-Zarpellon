function handleModal() {
  let modalHeaderButton = document.querySelector("#header__join-class-button");
  let modalFaqButton = document.querySelector("#faq__join-class-button");
  let modal = document.querySelector("#modal");

  modalHeaderButton.addEventListener("click", function () {
    modal.showModal();
    closeModal();
  });

  modalFaqButton.addEventListener("click", function () {
    modal.showModal();
    closeModal();
  });
}

function closeModal() {
  let modalCloseButton = document.querySelector("#modal__close-button");
  let modal = document.querySelector("#modal");

  modalCloseButton.addEventListener("click", function () {
    modal.close();
  });
}

handleModal();
