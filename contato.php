<?php
    if(isset($_POST['enviarEmail'])){
        $nomeRemetente=$_POST['nomeRemetente'];
        $assuntoEmail=$_POST['assuntoEmail'];
        $emailRemetente=$_POST['emailRemetente'];
        $conteudoEmail=$_POST['conteudoEmail'];

        $emailDestinatario="mateusbistec@gmail.com";
        $headersR="From: ".$emailRemetente;
        $headersD="From: ".$emailDestinatario;

        $txtDestinatario="Você recebeu um email de ".$nomeRemetente.
        ".\n\n".
        "Email do Remetende: ".$emailRemetente."\n".
        "Assunto:\n".$conteudoEmail;

        $txtRemetente="Seu e-mail foi recebido com sucesso, Sr(a) ".$nomeRemetente.
        ".\n\n".
        "Obrigado pelo contato e, caso seja necessário, estaremos entrando em contato assim que possível por este email: ".$emailRemetente."\n".
        "Segue o conteúdo que recebemos:\n".$conteudoEmail;

        mail($emailDestinatario, $assuntoEmail, $txtDestinatario, $headersR);
        mail($emailRemetente, $assuntoEmail, $txtRemetente, $headersD);
        // if(mail($emailDestinatario, $assuntoEmail, $txtDestinatario, $headersR)){
        //     echo 'enviado1\n ';
        // }else{
        //     echo 'falha1\n ';
        // }
        // if(mail($emailRemetente, $assuntoEmail, $txtRemetente, $headersD)){
        //     echo 'enviado';
        // }else{
        //     echo 'falha';
        // }
    }
    header('location: contato.html');