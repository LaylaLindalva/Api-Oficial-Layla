function apareceMenu () {
    const menuMobi = document.querySelector('.menu')
    if(menuMobi.classList.contains('open')){
        menuMobi.classList.remove('open');
    }else{
        menuMobi.classList.add('open')
    }
}









// const variavel = 'lipstick'

// const url = `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${variavel}`

// const loadInfo = document.querySelector("#loading")
// const batomContainer = document.querySelector("#batom-container")

// const getBatomImg = async ids => {
//     const img = ids.map(id => `/image_link/${id}.png`);
//     return await img
//     console.log(img)
// }

// getBatomImg()

// //Get all batom
// const getAllBatom = async () => {
//     const res = await fetch(url);
//     console.log(res);

//     const batons = await res.json();
//     console.log(batons);

//     loadInfo.classList.add("hide")

//     batons.map((batom) => {
//         const div = document.createElement("div")
//         const img = document.createElement("div")
//         const marca = document.createElement("h1")
//         const category = document.createElement("h3")
//         const prices = document.createElement("h4")
//         const link = document.createElement("a")

//         img.innerHTML = `<img src="${batom.api_featured_image}" alt="">`       
//         marca.innerText = batom.brand;
//         category.innerText = `Categoria: ${batom.category}`;
//         prices.innerText = batom.price
//         link.setAttribute("href", `/index.html?id=${batom.id}`)
        
//         div.appendChild(img)
//         div.appendChild(marca)
//         div.appendChild(category)
//         div.appendChild(prices)
//         div.appendChild(link)

//         batomContainer.appendChild(div)
//         console.log(img)
//     });
// }

// getAllBatom()
