<?php
    session_start();
    $emailR = $_SESSION['emailRemetente'];

    if(isset($emailR) && !empty($emailR) && $_SESSION['falha']){
?>
<!DOCTYPE html>
<html lang="pt-PT">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Início - Bistec Portugal</title>
        <link rel="stylesheet" href="../assets/css/style.css">
        <link rel="stylesheet" href="../assets/css/styleMobile.css">
        <link rel="stylesheet" href="../assets/css/styleTablet.css">
        <link rel="stylesheet" href="../assets/css/styleTelaQuadrada.css">
        <link rel="stylesheet" href="../assets/css/styleTv.css">
        <link rel="stylesheet" href="../assets/css/styleEmail.css">
        <link rel="icon" href="assets/images/logo-bistec-favicon.png">
    </head>
    <body>
        <!-- cabeçalho -->

        <header class="header-bistec" id="#first_section">
            <a href="#first_section" class="logo-bistec">
                <img src="../assets/images/logo-bistec.png" alt="Logo - Bistec">
            </a>
            <ul class="normal-menu">
                <li>
                    <a href="../index.html" class=" normal" >HOME</a>
                </li>
                <!--Portifólio-->
                <li>
                    <a href="index.html" class="normal">PORTFÓLIO <ion-icon name="chevron-down-outline"></ion-icon></a>  
                    <ul class="normal-submenu">
                        <li><a href="automacao.html"><ion-icon name="at-sharp"></ion-icon> BISTEC AUTOMAÇÃO</a></li>
                        <li><a href="cloud.html"> <ion-icon name="cloud-done-sharp"></ion-icon> BISTEC CLOUD</a></li>
                        <li><a href="edu.html"> <ion-icon name="pencil-sharp"></ion-icon> BISTEC EDU</a></li>
                        <li><a href="gdpr.html"><ion-icon name="shield-checkmark-sharp"></ion-icon> BISTEC GDPR</a></li>
                        <li><a href="msp.html"> <ion-icon name="lock-closed"></ion-icon> BISTEC MSP</a></li>
                        <li><a href="outsourcing.html"> <ion-icon name="settings-sharp"></ion-icon> BISTEC OUTSOURCING</a></li>
                        <li><a href="renting.html"> <ion-icon name="reload-circle-sharp"></ion-icon> BISTEC RENTING</a></li>
                        <li><a href="soft.html"><ion-icon name="disc-sharp"></ion-icon> BISTEC SOFT</a></li>
                        <li><a href="wifi.html"> <ion-icon name="wifi-sharp"></ion-icon> BISTEC WIFI</a></li>
                    </ul> 
                </li>
                <li>
                    <a href="../contato.html" class="normal">CONTATO</a>
                </li>
                <li><!--Butão de Loja-->
                    <a href="#">
                        <div class="button" >
                            <span class="button_icon"><ion-icon name="cart-outline"></ion-icon></span>
                            <span class="button_text">LOJA</span>
                        </div>
                    </a>
                </li>
                <li><!--Botão Suporte-->
                    <a href="../suporte.html">
                        <div class="button_support">
                            <span class="button_icon support_icon"><ion-icon name="headset-outline"></ion-icon></span>
                            <span class="button_text">SUPORTE</span>
                        </div>
                    </a>
                </li>
            </ul>
            <ul class="menu-cell">
                <li>
                    <ion-icon name="menu-outline"></ion-icon>                  
                </li>
            </ul>
        </header>

        <!-- corpo -->
        <article id="first_section">
            <section class="email-enviado">
                <h1>Email Falhou</h1>
                <p>Pode ser que estejamos com algum problema...</p>
                <p>Mas tentamos enviar uma email para o endereço <b><?php echo $emailR?></b></p>
                <p>Se o e-email estiver correto, tente nos contatar de outras formas. Mais informações no rodapé da página</p>
            </section>
        </article>

        <!-- rodapé -->
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
                <a href="#" class="IconLocation"><ion-icon name="location" class="ionspecial"></ion-icon></a>
            </div>

            <div class="contacts">
                <div class="contact item1">
                    <a href="#contacts_section" id="contacts_section">
                        <img src="../assets/images/portugal.png" alt="Portugal País"> Bistec Portugal
                    </a>
                    <p><a href="tel:+351308807114">+351 308 807 114</a></p>
                </div>

                <div class="contact item2">
                    <a href="https://bistec.com.br">
                        <img src="../assets/images/brazil.png" alt="Brasil País"> Bistec Brasil 
                    </a>  
                    <p>
                        <a href="tel:+55(13)3235-7735">+55 (13) 3235-7735</a>  
                    </p>
                    <p>
                        <a href="tel:+55(13)3522-8184">+55 (13) 3522-8184</a>
                    </p>
                </div>

                <div class="contact item3">
                        <a href="https://api.whatsapp.com/send?phone=5513992101945" target="_blank"><img src="../assets/images/whatsapp.png" alt="Logo Whatsapp Business"> Whatsapp Business </a>
                    <p>
                        <a href="https://api.whatsapp.com/send?phone=5513992101945" target="_blank">+55 (13) 99210-1945</a>
                    </p>
                </div>
                <!--
                <div class="contact item4">
                    <p>
                        <img src="assets/images/clock.png" alt="Logo Horário"> Funcionamento 
                    </p> 
                    <p>Segunda à Sexta:</p> 
                    <p>Horário a ser definido</p>
                </div> 
                -->
            </div>
        </footer>
        <div class="footer-copyright">
            <p>©2022 Bistec · Consultoria de TI · Todos os direitos reservados.</p>
        </div>

        <script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" defer></script>
        <script src="../assets/js/main.js"></script>
        <script src="//code.jivosite.com/widget/3bZuUHkWaM" async></script>
    </body>
</html>
<?php
    // Manter comentado para testes de layout, tirar comentário em produção, para cancelar a sessão ao recarregar a página
        // session_destroy();
    }else{
        session_destroy();
        header('location: ../index.html');
    }
?>