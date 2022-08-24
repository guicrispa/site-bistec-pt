//Adiciona a tag spam do menu em uma variável
let rodape=document.getElementsByClassName('rodape')[0]
// a variável Caminho está declarada no script menu

//insere conteudo html depois da tag spam de referência
rodape.insertAdjacentHTML('afterend',/*html*/`
    <footer>
    <div class="redes-sociais">
        <a href="mailto:bistec@bistec.com.br" target="_blank"><ion-icon name="mail" class="ionspecial"></ion-icon></a>
        <a href="https://facebook.com/bistecweb" target="_blank"><ion-icon name="logo-facebook"></ion-icon></a>
        <a href="https://instagram.com/bistecweb" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a>
        <a href="https://youtube.com/bistecweb" target="_blank"><ion-icon name="logo-youtube"></ion-icon></a>
        <a href="https://www.twitter.com/bistecweb" target="_blank"><ion-icon name="logo-twitter"></ion-icon></a>
        <a href="https://www.flickr.com/bistec" target="_blank"><ion-icon name="logo-flickr"></ion-icon></a>
        <a href="https://soundcloud.com/bistecweb" target="_blank"><ion-icon name="logo-soundcloud"></ion-icon></a>
        <a href="https://linkedin.com/company/bistec" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a>
        <button id="location_button" target="_self"><ion-icon name="location" class="ionspecial"></ion-icon></button>
        <!-- <a href="#" target="_self"><ion-icon name="location" class="ionspecial"></ion-icon></a>-->
    </div>

    <div class="contacts">
        <div class="contact item1">
            <a href="#first_section">
                <img src="${Caminho}assets/images/portugal.png" alt="Portugal País"> Bistec Portugal
            </a>
            <p><a href="tel:+351308807114">+351 308 807 114</a></p>
        </div>

        <div class="contact item2">
            <a href="https://bistec.com.br">
                <img src="${Caminho}assets/images/brazil.png" alt="Brasil País"> Bistec Brasil 
            </a>  
            <p>
                <a href="tel:+55(13)3235-7735">+55 (13) 3235-7735</a>  
            </p>
            <p>
                <a href="tel:+55(13)3522-8184">+55 (13) 3522-8184</a>
            </p>                    
        </div>

        <div class="contact item3">
            <a href="https://api.whatsapp.com/send?phone=5513992101945" target="_blank"><img src="${Caminho}assets/images/whatsapp.png" alt="Logo Whatsapp Business"> Whatsapp Business </a>
            <p>
                <a href="https://api.whatsapp.com/send?phone=5513992101945" target="_blank">+55 (13) 99210-1945</a>
            </p>
        </div> 
        <!--
        <div class="contact item4">
            <p>
                <img src="${Caminho}assets/images/clock.png" alt="Logo Horário"> Funcionamento 
            </p> 
            <p>Segunda à Sexta:</p> 
            <p>Horário a ser definido</p>
        </div> 
        -->
    </div>
    </footer>
    <div class="footer-copyright">
    <p>©2022 Bistec · Consultoria de T I · Todos os direitos reservados.</p>
    </div>
`)
//remove a tag spam de referencia
rodape.remove()