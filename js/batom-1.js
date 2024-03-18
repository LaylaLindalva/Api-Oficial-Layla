const variavel = 'lipstick'

const url = `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${variavel}`


const careBatom = document.getElementById("carrega-batom")

//Get all batom
const getAllBatom = async () => {
    const res = await fetch(url);
    console.log(res);

    const batons = await res.json();
    console.log(batons);

    batons.map((batom) => {

        const div = document.createElement("div")
        div.innerHTML = `
        <div class="batom-container">
        <div class="container">
        <img class="img-batons" src="${batom.api_featured_image}" alt="maquiagens">
        <h1 class="marca-batom">${batom.brand}</h1>
        <h3 class="categoria-batom">Categoria: ${batom.category}</h3>
        <div class="preco">
        <h4>${batom.price_sign}</h4>
        <h4 class="preco-batom">${batom.price}</h4>
        </div>
        </div>
        </div>
        `;
        
        careBatom.appendChild(div)
    });
}

getAllBatom()


// //Get all sombra

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
        <div>
        <img src="${sombra.api_featured_image}" alt="">
        <h1>${sombra.brand}</h1>
        <h3>Categoria: ${sombra.category}</h3>
        <h4>${sombra.price}</h4>
        </div>
        `;
        
        careSombra.appendChild(divSombra)
    });
}

