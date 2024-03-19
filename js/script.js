function apareceMenu () {
    const menuMobi = document.querySelector('.menu')
    if(menuMobi.classList.contains('open')){
        menuMobi.classList.remove('open');
    }else{
        menuMobi.classList.add('open')
    }
}



