//Menu mobile ---------------------------------------------------------------------------

//ajusta para o menu se adequar conforme a mudança da tela
const verificaTela = () => {
    let menu = document.getElementsByClassName('normal-menu')[0]
    let portifolio = document.getElementsByClassName('normal')[2]
    if(!window.matchMedia("(min-width: 951px)").matches){
        menu.style.display = 'none'
        portifolio.removeAttribute('href') //tira direcionamento no mobile
    }else{
        menu.style.display = 'inherit'
        portifolio.setAttribute('href', '#bistec-automacao')
    }
}
window.onresize = verificaTela
window.onload = verificaTela

//abre e fecha menu mobile
document.getElementsByName('menu-outline')[0].addEventListener('click', menuResponsive)
function menuResponsive(){
    let menu = document.getElementsByClassName('normal-menu')[0]
    if(menu.style.display == 'inherit'){
        menu.style.display = 'none'
    }else{
        menu.style.display = 'inherit'
    }
}

//PROVISÓRIO  ---------------------------------------------------------------------------------
// localização
var localizacao = document.getElementById('location_button')
localizacao.addEventListener('click', ()=>{
    alert("Localização será definida em breve");
})
let tagA = localizacao.parentElement
tagA.removeAttribute('href')
tagA.removeAttribute('onclick')

// Botão Loja
let loja = document.getElementsByClassName('button')[0].parentElement
loja.addEventListener('click', ()=>{
    alert("Loja em construção...");
})
loja.removeAttribute('href')
loja.removeAttribute('onclick')