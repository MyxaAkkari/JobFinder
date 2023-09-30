const popupButton = document.getElementById("popupButton");
const popupDialog = document.getElementById("popupDialog");
const closeButton = document.getElementById("closeButton");

popupButton.addEventListener("click", () => {
    popupDialog.style.display = "block";
});

closeButton.addEventListener("click", () => {
    popupDialog.style.display = "none";
});