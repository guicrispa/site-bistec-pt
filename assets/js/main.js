//Funções do Pop-up -----------------------------------------------------------------
document.getElementsByClassName('bt-dialog')[0].addEventListener('click', ()=>{controlaModal('modal-automacao', 0)})
document.getElementsByClassName('bt-dialog')[1].addEventListener('click', ()=>{controlaModal('modal-cloud', 1)})
document.getElementsByClassName('bt-dialog')[2].addEventListener('click', ()=>{controlaModal('modal-edu', 2)})
document.getElementsByClassName('bt-dialog')[3].addEventListener('click', ()=>{controlaModal('modal-gpdr', 3)})
document.getElementsByClassName('bt-dialog')[4].addEventListener('click', ()=>{controlaModal('modal-outsourcing', 4)})
document.getElementsByClassName('bt-dialog')[5].addEventListener('click', ()=>{controlaModal('modal-renting', 5)})
document.getElementsByClassName('bt-dialog')[6].addEventListener('click', ()=>{controlaModal('modal-soft', 6)})
document.getElementsByClassName('bt-dialog')[7].addEventListener('click', ()=>{controlaModal('modal-msp', 7)})
document.getElementsByClassName('bt-dialog')[8].addEventListener('click', ()=>{controlaModal('modal-wifi', 8)})

function controlaModal(idModal, numModal){
    let modal = document.getElementById(idModal)
    let modalEspecifica = document.getElementsByClassName('modal')[numModal]
    let btnCloseModal = document.getElementsByClassName('close')
    //troca a propriedade display, fazendo a modal aparecer
    modal.style.display = "block"
    //fecha a modal ao clicar no "x"
    btnCloseModal[numModal].onclick = () => {
        modalEspecifica.style.display = "none"        
    }
    //fecha a modal ao clicar fora
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }   
}
function fechaModal(modalEspecifica) {
}

// function controlaModal(idModal){
//     let modal = document.getElementById(idModal)
//     let btnCloseModal = document.getElementsByClassName('close')
//     //troca a propriedade display, fazendo a modal aparecer
//     modal.style.display = "block"
//     //fecha a modal ao clicar no "x"
//     btnCloseModal.forEach(btnClose => btnClose.onclick = () => {
//         modal.style.display = "none"
//     })
//     //fecha a modal ao clicar fora
//     window.onclick = (event) => {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//     }   
// }

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