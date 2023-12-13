const modalImg = document.querySelector(`#modal-img`);

document.addEventListener(`DOMContentLoaded`, startApp);

function startApp() {
  events();
}

function events() {
  if (modalImg) {
    modalImg.addEventListener(`show.bs.modal`, showModal);
    modalImg.addEventListener(`hidden.bs.modal`, hiddenModal);
  }
}

function showModal(e) {
  const link = e.relatedTarget;
  const rutaImg = link.getAttribute(`data-bs-img`);

  const img = document.createElement(`IMG`);
  img.src = `assets/img/${rutaImg}.jpg`;
  img.classList.add(`img-fluid`);
  img.alt = `imagen-galeria`;

  const modalContent = document.querySelector(`.modal-body`);
  modalContent.appendChild(img);

  // console.log(img);
}

function hiddenModal() {
  // console.log(`Ocultar modal`);

  const modalContent = document.querySelector(`.modal-body`);
  modalContent.textContent = ``;
}
