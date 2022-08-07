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

// show modal after 50% scrolling

// мой вариант
// window.onscroll = function () {
//   if (window.scrollY >= document.body.scrollHeight / 2) {
//     modal.classList.add("show");
//   }
// };

// вариант на уроке
function showModalByScroll() {
  if (window.pageYOffset > document.body.scrollHeight / 2) {
    openModal();
    window.removeEventListener("scroll", showModalByScroll);
  }
}

window.addEventListener("scroll", showModalByScroll);

// setTimeout(() => openModal(), 5000);

// close modal

modal.addEventListener("click", function (e) {
  // console.log(e.target);
  if (e.target === modal) {
    closeModal();
  }
});

// AOS
// AOS.init();

// increment and decrement btns

// for 1 element
// let incrementBtn = document.querySelector(".increment-btn");
// let decrementBtn = document.querySelector(".decrement-btn");
// let quantity = document.querySelector(".quantity-content");

// incrementBtn.addEventListener("click", function () {
//   quantity.value = +quantity.value + 1;
// });
// decrementBtn.addEventListener("click", function () {
//   quantity.value = +quantity.value - 1;
// });

// for all elements

let decrementBtns = document.querySelectorAll(".decrement-btn");
let incrementBtn = document.querySelectorAll(".increment-btn");
let quantityInput = document.querySelectorAll(".product-quantity input");

function Counter(incBtn, decBtn, inpValue, minCount = 1, maxCount = 5) {
  this.domRefs = {
    incBtn,
    decBtn,
    inpValue,
  };
  this.toggleButtonState = function () {
    let count = this.domRefs.inpValue.value;
    this.domRefs.decBtn.disabled = count <= minCount;
    this.domRefs.incBtn.disabled = count >= maxCount;
  };
  this.toggleButtonState();

  this.increment = function () {
    this.domRefs.inpValue.value = +this.domRefs.inpValue.value + 1;
    this.toggleButtonState();
  };
  this.decrement = function () {
    this.domRefs.inpValue.value = +this.domRefs.inpValue.value - 1;
    this.toggleButtonState();
  };

  this.domRefs.incBtn.addEventListener("click", this.increment.bind(this));
  this.domRefs.decBtn.addEventListener("click", this.decrement.bind(this));
}

for (i = 0; i <= quantityInput.length; i++) {
  new Counter(incrementBtn[i], decrementBtns[i], quantityInput[i]);
}

// let counter1 = new Counter(incrementBtn[0], decrementBtns[0], quantityInput[0]);
// console.log(counter1);
