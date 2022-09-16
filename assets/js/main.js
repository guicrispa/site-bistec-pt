//Menu mobile ---------------------------------------------------------------------------
const verificaTela = () => {
    //ajusta para o menu se adequar conforme a mudança da tela
    let w = window, e = document.documentElement, g = document.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight; 
    //IMAGENS
    document.getElementById('img-banner').removeAttribute('src')
    document.getElementById('img-banner').setAttribute('src',`https://ik.imagekit.io/bistecpt/imagens/banner-moliceiro_lQJqvFZuv.png?tr=w-${(x-20)*2},h-${y*2}`)

    let menu = document.getElementsByClassName('normal-menu')[0]
    let portifolio = document.getElementsByClassName('normal')[2]
  
    if(!window.matchMedia("(min-width: 951px)").matches){
        menu.style.display = 'none'
    }else{
        menu.style.display = 'inherit'
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

// Botão Loja
let loja = document.getElementsByClassName('button')[0].parentElement
loja.addEventListener('click', ()=>{
    alert("Loja em construção...");
})