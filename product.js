const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://kea-alt-del.dk/t7/api/products/" + id;

// fetch data
fetch(url).then((res) => res.json().then((data) => showProduct(data)));
// populate the page

function showProduct(product) {
  console.log(product);

  const template = document.querySelector("#smallProductTemplate").content;
  const copy = template.cloneNode(true);

  copy.querySelector("a").setAttribute("href", "product.html?id=" + product.id);

  copy.querySelector(".brand").textContent = product.brandname;
  copy.querySelector(".productTitle").textContent = product.productdisplayname;
  copy.querySelector(
    ".product-image"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  copy.querySelector(".product-image").alt = product.productdisplayname;
}
