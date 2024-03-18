async function loadAll(){
    const urlParams = new URLSearchParams(window.location.search)
    const idParam = urlParams.get('id');     
    
    if(!idParam){
    console.log('ID não encontrado na URL')
    }

    const variavel = 'lipstick'
    const urlBase = `http://makeup-api.herokuapp.com/api/v1/products?product_type=lipstick`
    const url = `${urlBase}/${idParam}`

    fetch(url)
    .then((response) => {
        if(!response.ok){
            throw new Error('Erro ao receber dados')
        }
         
        console.log(response) 
    })
    .then((data) => {
       console.log(data)
    })
    .catch((erro) => console.log(erro))
}

loadAll()

const carregaBatomNovo = (batom) => {
    const containerInfo = document.querySelector(".container-info")
    const divBatom = document.createElement('div')
    divBatom.innerHTML = `
    <div class="batom-container">
    <div class="container">
    <img class="img-batons" src="${batom.api_featured_image}" alt="maquiagens">
    <h1 class="marca-batom">${batom.brand}</h1>
    <h3 class="categoria-batom">Categoria: ${batom.category}</h3>
    <h3>${batom.description}</h3>
    <div class="preco">
    <h4>${batom.price_sign}</h4>
    <h4 class="preco-batom">${batom.price}</h4>
    // <a href="../batomnovo.html?id=${batom.id}">Click Aqui</a>
    </div>
    </div>
    </div>
    `
    containerInfo.appendChild(divBatom)

}

    