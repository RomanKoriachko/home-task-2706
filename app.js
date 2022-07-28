// add to cart

let productsCountEl = document.getElementById("products-count");
let addToCartBtns = document.querySelectorAll(".add-to-cart-btn");

addToCartBtns.forEach((item) =>
  item.addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  })
);

// chenge like state

// мое решение
// let likeBtns = document.querySelectorAll(".like");
// for (let i = 0; i < likeBtns.length; i++) {
//   likeBtns[i].addEventListener("click", function () {
//     likeBtns[i].classList.toggle("liked");
//   });
// }

// решение на уроке
let likeBtns = document.querySelectorAll(".like");

likeBtns.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("liked");
  });
});

// More deteils
let moreDeteilsBtn = document.querySelectorAll(".btn-more-deteils");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".btn-close");

moreDeteilsBtn.forEach((item) => item.addEventListener("click", openModal));

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
}
function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}

closeBtn.addEventListener("click", closeModal);

$(document).ready(function () {
  $(".slider").slick({
    dots: true,
  });
});
