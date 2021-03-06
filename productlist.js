const urlParams = new URLSearchParams(window.location.search);
const season = urlParams.get("season");
const url =
  "http://kea-alt-del.dk/t7/api/products?season=" + season + "&limit=12";

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  console.log(data);
  data.forEach(showProduct);
}

function showProduct(product) {
  const template = document.querySelector("#small-product").content;

  const copy = template.cloneNode(true);

  const discounted = product.price - (product.price * product.discount) / 100;

  copy
    .querySelector("a")
    .setAttribute("href", "productpage.html?id=" + product.id);

  document.querySelector("h1").textContent = product.season;
  copy.querySelector(".brand").textContent = product.brandname;
  copy.querySelector(".category").textContent = product.articletype;
  copy.querySelector(".priceList").textContent = product.price + " dkk";
  copy.querySelector(".discount").textContent = "-" + product.discount + "%";
  copy.querySelector(".onSale").textContent = discounted.toFixed(0) + " dkk";
  copy.querySelector("h2").textContent = product.productdisplayname;

  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  copy.querySelector("img").alt = product.productdisplayname;

  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  if (product.discount) {
    copy.querySelector(".onSale").classList.add("visible");
    copy.querySelector(".discount").classList.add("visible");
    copy.querySelector(".priceList").classList.add("invisible");
  }

  const parent = document.querySelector("main");

  parent.appendChild(copy);
}
