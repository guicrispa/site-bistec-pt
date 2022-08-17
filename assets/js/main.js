//Funções do Pop-up -----------------------------------------------------------------
var btSaibaMais = document.getElementsByClassName('bt-dialog')
//configura a função controlModal nos elementos com classes bt-dialog
for (let i = 0; i < btSaibaMais.length; i++) {
    btSaibaMais[i].addEventListener('click', ()=>{controlaModal(i)})
}

function controlaModal(numModal){
    let modal = document.getElementsByClassName('modal')[numModal]
    let btnCloseModal = document.getElementsByClassName('close')

    //troca a propriedade display, fazendo a modal aparecer
    modal.style.display = "block"
    //fecha a modal ao clicar no "x"
    btnCloseModal[numModal].onclick = () => {
        modal.style.display = "none"        
    }
    //fecha a modal ao clicar fora
    window.onclick = (event) => {
        if (event.target == modal) {
            document.getElementsByClassName('modal').forEach(
                fechaModais => fechaModais.style.display = "none"
            )
        }
    }   
}

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
        portifolio.setAttribute('href')
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
var localizacao = document.getElementsByName('location')[0]
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