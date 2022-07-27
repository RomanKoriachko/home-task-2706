let productsCountEl = document.getElementById("products-count");
// console.log(productsCountEl);
// console.log(productsCountEl.textContent);
let addToCartBtns = document.querySelectorAll(".add-to-cart-btn");
// console.log(addToCartBtns);

// addToCartBtns.onclick = function () {
//   alert("Hello world");
// };

// addToCartBtns.addEventListener("click", function () {
//   alert("hello world");
// });

// for (let i = 0; i < addToCartBtns.length; i++) {
//   addToCartBtns[i].addEventListener("click", function () {
//     console.log("clicked");
//   });
// }

addToCartBtns.forEach((item) =>
  item.addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
    // console.log(productsCountEl.textContent);
    return productsCountEl.textContent;
  })
);

let likeBtns = document.querySelectorAll(".like");
for (let i = 0; i < likeBtns.length; i++) {
  likeBtns[i].addEventListener("click", function () {
    likeBtns[i].classList.toggle("like-active");
  });
}
