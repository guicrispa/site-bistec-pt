//Menu mobile ---------------------------------------------------------------------------
const verificaTela = () => {
    //ajusta para o menu se adequar conforme a mudança da tela
    let w = window, e = document.documentElement, g = document.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight; 
    //IMAGENS
    document.getElementById('img-banner').removeAttribute('src')
    document.getElementById('img-banner').setAttribute('src',`https://ik.imagekit.io/bistecpt/imagens/banner-moliceiro_lQJqvFZuv.png?tr=w-${(x-20)*2},h-${y*2}`)

    //RECOMPOE MENU AO ELTERAR TAMANHO DA TELA ENTRE MOBILE E OUTRO
    let menu = document.getElementsByClassName('normal-menu')[0]
    if(!window.matchMedia("(min-width: 951px)").matches)
        menu.style.display = 'none'
    else
        menu.style.display = 'inherit'
}
window.onresize = verificaTela
window.onload = verificaTela
