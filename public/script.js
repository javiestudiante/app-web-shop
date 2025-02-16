document.addEventListener("DOMContentLoaded", async() => {
    const productsContainer = document.getElementById("products");

    try{
        const res = await fetch("http://localhost:5500/api/products");
        const products = await res.json();

        products.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}" width="150">
                <h3>${product.name}</h3>
                <p>${product.price}€</p>
                <button>Añadir al carrito</button>
                `;
                productsContainer.appendChild(productDiv);
        });
    }catch(error){
        console.error("Error cargando los productos", error);
    }
})