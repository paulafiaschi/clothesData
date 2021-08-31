const url = "http://kea-alt-del.dk/t7/api/products";

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
  console.log(product);
  const template = document.querySelector("#small-product").content;

  const copy = template.cloneNode(true);

  copy.querySelector("#brand").textContent = `${product.brandname}`;
  copy.querySelector("#category").textContent = `${product.articletype}`;
  // copy.querySelector("h3").textContent = product.productdisplayname;

  const parent = document.querySelector("main");

  parent.appendChild(copy);
}

/*
<article class="smallProduct">
<div class="productItem">
  <img src="img/1163.webp" alt="">
  <h2>Sahara Team India Fanwear Round Neck Jersey</h2>
  <p><span id="brand">Nike</span> --- <span id="category">T-shirt</span></p>
  <p id="priceList">DKK 199</p>
  <a href="productpage.html?id=1165"><button id="goProduct">See more</button></a>
</div>
</article>*/
