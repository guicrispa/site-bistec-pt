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
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

var modal_content = document.getElementsByClassName("modal-content")

btn.onclick = function() {
modal.style.display = "block";
}

modal.onclick = function() {
modal.style.display = "none";
}

modal_content.onclick = function() {
modal.style.display = "block";
}

span.onclick = function() {
modal.style.display = "none";
}

window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
}
}

function controlaDialog(idDialog){
    if(document.getElementById(idDialog).open){
        fechaDialog(idDialog)
    }else{
        abreDialog(idDialog)
    }       
}

function fechaDialog(){
    document.querySelectorAll('dialog').forEach(dia => dia.removeAttribute('open'))
    document.getElementsByTagName('html')[0].removeAttribute("onclick", "fechaDialog()")
}
function abreDialog(idDialog) {
    fechaDialog()
    document.getElementById(idDialog).setAttribute("open", "")
    setTimeout(() => {
        document.getElementsByTagName('html')[0].setAttribute("onclick", "fechaDialog()")
    }, "100")
}