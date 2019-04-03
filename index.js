var products = [];
var url = "https://www.hulabeck.se/html/temp/products.json";
var productList = document.getElementById("productList");
var shoppingCartBtn = document.getElementById('shoppingCartBtn');
var modal = document.getElementById('cart');
var closer = document.getElementsByClassName("close")[0];
var cartContent = document.getElementById('cartContent');
var xhr = new XMLHttpRequest;
var cart = [];
var total = 0;

const images = [
    "https://media.rs-online.com/t_large/R506954-01.jpg",
    "https://cdn.pixabay.com/photo/2017/04/04/17/14/claw-hammer-2202195_960_720.jpg",
    "https://verktygsboden.se/20.0.0.2/23625/cache/23625_0419a740567fd629913612582fc59483.jpg",
    "https://www.tingstad.com/fixed/images/Main2x/1542021859/158980102.png",
    "https://shopcdn.textalk.se/shop/ws71/83471/art71/h9469/162929469-origpic-843617.jpg?max-width=1080&max-height=1080&quality=80",
    "https://mediacdn5.fristadskansas.com/Cache/101000/87f59bbffe4392de052c6e351f8add31.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fd/Handzaag.jpg",
    "https://media.rs-online.com/t_large/F6161454-01.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/e/ee/AEG_vacuum_cleaner.jpg",
    "https://shopcdn.textalk.se/shop/ws16/70416/art16/h5182/134635182-origpic-2b63ff.jpg?max-width=1080&max-height=1080&quality=80"
]

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

    products.forEach((product, index) => {
        let card = document.createElement("div");
        let image = images[index];
        card.innerHTML = `
        
            <img src="${image}" alt="${product.categories[0]}">
            <h1>${product.name}</h1>
            <p class="price">${product.consumerPrice}:-</p>
            <p class="description">${product.description}</p>
            <button id="${index}">Add to Cart</button>
        `;
        card.classList.add('card');

        productList.appendChild(card);

    })
}

productList.addEventListener('click', (e) => {
    if (e.target.nodeName == "BUTTON") {
        let productId = e.target.id;
        cart.push(products[productId]);
        total += products[productId].consumerPrice;
    }
})

shoppingCartBtn.addEventListener('click', () => {
    let cartStr = "";
    cart.forEach((product) => {
        cartStr += `${product.name}<span class="cartprice">${product.consumerPrice}</span><br 7>`
    })
    cartStr += `<p>Totalt: <span class="cartprice">${total}</span></p>`
    cartContent.innerHTML = cartStr;
    modal.style.display = "block";
})

// When the user clicks on <span> (x), close the modal
closer.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}