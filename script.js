const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const captionText = document.getElementById("caption");
const closeModal = document.getElementById("close");

// Open modal when an image is clicked
document.querySelectorAll(".image-wrapper img").forEach((image) => {
  image.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImage.src = image.src;
    captionText.textContent = image.alt;
  });
});

// Close modal when the close button is clicked
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside the image
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
