//Funções do Pop-up -----------------------------------------------------------------
document.getElementsByClassName('bt-dialog')[0].addEventListener('click', ()=>{openModal('modal-automacao')})
document.getElementsByClassName('bt-dialog')[1].addEventListener('click', ()=>{openModal('modal-cloud')})
document.getElementsByClassName('bt-dialog')[2].addEventListener('click', ()=>{openModal('modal-edu')})
document.getElementsByClassName('bt-dialog')[3].addEventListener('click', ()=>{openModal('modal-gpdr')})
document.getElementsByClassName('bt-dialog')[4].addEventListener('click', ()=>{openModal('modal-outsourcing')})
document.getElementsByClassName('bt-dialog')[5].addEventListener('click', ()=>{openModal('modal-renting')})
document.getElementsByClassName('bt-dialog')[6].addEventListener('click', ()=>{openModal('modal-soft')})
document.getElementsByClassName('bt-dialog')[7].addEventListener('click', ()=>{openModal('modal-msp')})
document.getElementsByClassName('bt-dialog')[8].addEventListener('click', ()=>{openModal('modal-wifi')})

function openModal(idModal){
    let modal = document.getElementById(idModal)
    let btnCloseModal = document.getElementsByClassName('close')
    //troca a propriedade display, fazendo a modal aparecer
    modal.style.display = "block"
    //fecha a modal ao clicar no "x"
    btnCloseModal.forEach(btnClose => btnClose.onclick = () => {
        modal.style.display = "none"
    })
    //fecha a modal ao clicar fora
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }   
}

//Menu mobile

//ajusta para o menu se adequar conforme a mudança da tela
const verificaTela = () => {
    let menu = document.getElementsByClassName('normal-menu')[0]
    let portifolio = document.getElementsByClassName('normal')[1]
    if(!window.matchMedia("(min-width: 951px)").matches){
        menu.style.display = 'none'
        portifolio.removeAttribute('href') //tira direcionamento no mobile
    }else{
        menu.style.display = 'inherit'
        portifolio.setAttribute('href', '#bistec-automaçao')
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