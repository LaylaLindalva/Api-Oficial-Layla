const formulario = document.getElementById("formu");
const respostas = document.getElementById("span");
const regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

function mostraErro(index){
    span[index].style.display = 'block'
}

function validaNome (){
    const nome = document.getElementById("nome")
    if(nome.value.length < 3){
        return "Nome deve ter 3 caracter"
    }else{
        return "Nome válido"
    }
}