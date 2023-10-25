
const recommendationSection = document.getElementById("recommendation-section");
const modal = document.getElementById("customerInfoModal");
const closeBtn = document.querySelector(".close");

recommendationSection.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}
