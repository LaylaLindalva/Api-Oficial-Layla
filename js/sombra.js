const variavelSombra = 'eyeshadow'

const urlSombra = `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${variavelSombra}`

const careSombra = document.getElementById("carrega-sombra")


const getAllSombra = async () => {
    const res = await fetch(urlSombra);
    console.log(res);

    const sombras = await res.json();
    console.log(sombras);

    sombras.map((sombra) => {
        const divSombra = document.createElement("div")
        divSombra.innerHTML = `
        <div class="sombra-container">
        <div class="container">
        <img class="img-sombras" src="${sombra.api_featured_image}" alt="sombras">
        <h1 class="marca-sombra">${sombra.brand}</h1>
        <h3 class="categoria-sombra">Categoria: ${sombra.category}</h3>
        <div class="preco">
        <h4>${sombra.price_sign}</h4>
        <h4 class="preco-sombra">${sombra.price}</h4>
        </div>
        </div>
        </div>
        `;
        
        careSombra.appendChild(divSombra)
    });
}

getAllSombra()