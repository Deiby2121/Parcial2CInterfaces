const btnAbrirModal = document.querySelector("#btnAbrirModal");
const btnCerrarModal = document.querySelector("#btnCerrarModal");
const modal = document.querySelector("#modal");

btnAbrirModal.addEventListener("click", () => {
  modal.style.display = 'block';
});

btnCerrarModal.addEventListener("click", () => {
  modal.style.display = 'none';
});
