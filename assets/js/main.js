//Funções dos links das redes socias ------------------------------------------------
function link(site){
    window.open(`https://${site}`, "_blank"); 
}
function email(){
    window.open('mailto:bistec@bistec.com.br')
}

function teste(){
    console.log("oi");
}

function menuResponsive(){
    console.log('testando');
}

//Funções do Pop-up -----------------------------------------------------------------
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