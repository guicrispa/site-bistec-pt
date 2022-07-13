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
function openModal(idModal, idBtnClose){
    let modal = document.getElementById(idModal)
    modal.style.display = "block"
    setTimeout(() => {
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }, 10);
}