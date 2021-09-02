const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://kea-alt-del.dk/t7/api/products/" + id;

// fetch data
fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));
// populate the page

function showProduct(product) {
  console.log(product);
  const discounted = product.price - (product.price * product.discount) / 100;

  document.querySelector(".productDisplay .brand").textContent =
    product.brandname;
  document.querySelector(".productTitle").textContent =
    product.productdisplayname;
  document.querySelector(
    ".productDisplay img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector("img").alt = product.productdisplayname;
  document.querySelector(".priceList").textContent = product.price + " dkk";
  document.querySelector(".discount").textContent =
    "-" + product.discount + "%";
  document.querySelector(".onSale").textContent =
    discounted.toFixed(0) + " dkk";
  document.querySelector(".brandCrust").textContent =
    "  >  " + product.brandname;
  document.querySelector(".seasonCrust").textContent =
    "   >  " + product.season;

  if (product.soldout) {
    document.querySelector("article").classList.add("soldOut");
  }
  if (product.discount) {
    document.querySelector(".onSale").classList.add("visible");
    document.querySelector(".discount").classList.add("visible");
    document.querySelector(".priceList").classList.add("invisible");
  }
}
