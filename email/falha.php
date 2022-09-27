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
        <link rel="stylesheet" href="../assets/css/styleDark.css">
        <link rel="icon" href="../assets/images/logo-bistec-favicon.png">
    </head>
    <body>
        <!-- cabeçalho -->
        <span class="menu-principal"></span>

        <!-- corpo -->
        <article id="first_section">
            <section class="email-enviado">
                <h1>Email Falhou</h1>
                <p>Pode ser que estejamos com algum problema...</p>
                <p>Mas tentamos enviar uma email para o endereço <b><?php echo $emailR?></b></p>
                <p>Se o e-email estiver correto, tente nos contatar de outras formas. Mais informações no rodapé da página</p>
                <ion-icon name="thumbs-down" id="ionicEmailFalhou"></ion-icon>
            </section>
        </article>

        <span class="rodape"></span>

        <script src="../assets/js/componente_menu.js"></script>
        <script src="../assets/js/componente_rodape.js"></script>
        <script src="../assets/js/main.js" defer></script>
        <script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" defer></script>
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