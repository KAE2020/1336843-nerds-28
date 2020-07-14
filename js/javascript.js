var writeus = document.querySelector(".contacts-link");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");


writeus.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-content-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-content-show");
});
