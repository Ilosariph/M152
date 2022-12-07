var modal = document.getElementById("modal");
var backdrop = document.getElementById("backdrop");

var modalImg = document.getElementById("modal-img");

function showModal(src) {
    modal.classList.remove('hidden');
    backdrop.classList.remove('hidden');
    modalImg.src = src;
}

function closeModal() {
    modal.classList.add('hidden');
}
