//Adiciona a tag spam do menu em uma variável
let rodape=document.getElementsByClassName('rodape')[0]
// a variável Caminho está declarada no script menu

//insere conteudo html depois da tag spam de referência
rodape.insertAdjacentHTML('afterend',/*html*/`
    <footer>
    <div class="redes-sociais">
        <a href="mailto:bistec@bistec.com.br" title="Bistec E-mail" target="_blank"><ion-icon name="mail" class="ionspecial"></ion-icon></a>
        <a href="https://facebook.com/bistecweb" title="Bistec Facebook" target="_blank"><ion-icon name="logo-facebook"></ion-icon></a>
        <a href="https://instagram.com/bistecweb" title="Bistec Instagram" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a>
        <a href="https://youtube.com/bistecweb" title="Bistec Youtube" target="_blank"><ion-icon name="logo-youtube"></ion-icon></a>
        <a href="https://www.twitter.com/bistecweb" title="Bistec Twitter" target="_blank"><ion-icon name="logo-twitter"></ion-icon></a>
        <a href="https://www.flickr.com/bistec" title="Bistec Flickr" target="_blank"><ion-icon name="logo-flickr"></ion-icon></a>
        <a href="https://soundcloud.com/bistecweb" title="Bistec Soundcloud" target="_blank"><ion-icon name="logo-soundcloud"></ion-icon></a>
        <a href="https://linkedin.com/company/bistec" title="Bistec Linkedin" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a>
        <a href="https://www.google.com/maps/place/BISTEC+PT+-+Servi%C3%A7os+de+tecnologia+para+todas+as+empresas/@40.6404794,-8.6534868,17z/data=!3m1!4b1!4m5!3m4!1s0xd2399dba4bcb0ad:0x74340dfb6ecc8e8d!8m2!3d40.6404794!4d-8.6534868?hl=pt" title="Bistec Linkedin" target="_blank"><ion-icon name="location" class="ionspecial"></ion-icon></a>
    </div>

    <div class="contacts">
        <div class="contact item1">
            <a href="#first_section" title="Bistec Portugal">
                <img src="https://ik.imagekit.io/bistecbr/portugal.png" alt="Portugal País"  width="20" height="20"> Bistec Portugal
            </a>
            <p><a href="tel:+351308807114">+351 308 807 114</a></p>
        </div>

        <div class="contact item2">
            <a href="https://bistec.com.br" title="Site - Bistec Brasil">
                <img src="https://ik.imagekit.io/bistecbr/brazil.png" alt="Brasil País" width="20" height="20"> Bistec Brasil 
            </a>  
            <p>
                <a href="tel:+55(13)3235-7735">+55 (13) 3235-7735</a>  
            </p>
            <p>
                <a href="tel:+55(13)3522-8184">+55 (13) 3522-8184</a>
            </p>                    
        </div>

        <div class="contact item3">
            <a href="https://api.whatsapp.com/send?phone=5513992101945" target="_blank" title="Whatsapp da Bistec">
            <img src="https://ik.imagekit.io/bistecbr/whatsapp.png" alt="Logo Whatsapp Business" width="20" height="20"> Whatsapp Business</a>
            <p>
                <a href="https://api.whatsapp.com/send?phone=5513992101945" target="_blank">+55 (13) 99210-1945</a>
            </p>
        </div> 
        <!--
        <div class="contact item4">
            <p>
                <img src="https://ik.imagekit.io/bistecbr/clock.png" alt="Logo Horário"> Funcionamento 
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