var products = [];
var url = "https://www.hulabeck.se/html/temp/products.json";
var productList = document.getElementById("productList");
var xhr = new XMLHttpRequest;

xhr.onreadystatechange = function() {
    if ((xhr.status == 200) && (xhr.readyState == 4)) {
        console.log(xhr.response);
        products = xhr.response.products;
        render();
    }
}

xhr.open("GET", url);
xhr.responseType = "json";
xhr.send();


function render() {

    products.forEach((product) => {
        let card = document.createElement("div");
        let image = "https://images.clasohlson.com/medias/sys_master/9584382181406.jpg";
        card.innerHTML = `
        <div class="card">
            <img src="${image}" alt="" style="width:100%">
            <h1>${product.name}</h1>
            <p class="price">${product.consumerPrice}</p>
            <p>${product.description}</p>
            <p><button>Add to Cart</button></p>
        </div>`;

        productList.appendChild(card);

    })


}