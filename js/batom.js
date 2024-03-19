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
        // <a href="./batomnovo.html/${batom.id}">Click Aqui</a>
        </div>
        </div>
        </div>
        `;
        
        careBatom.appendChild(div)
    });
}

getAllBatom()



const variavelMarca = 'maybelline'
const urlMarca = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${variavelMarca}`

const carregaMarca = async () => {
    const response = await fetch(urlMarca)
    console.log(response)

    const marcas = await response.json()
    console.log(marcas)
}