const products = document.querySelector(".products-row");
products.addEventListener("click", function (e) {
  const imgSrc = e.target.closest(".card").querySelector(".card-img-top").src;
  window.location.href = `../singleProduct.html?imgSrc=${encodeURIComponent(
    imgSrc
  )}`;
});
