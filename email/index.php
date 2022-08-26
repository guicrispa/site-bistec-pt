<?php
    session_start();
    if(isset($_POST['enviarEmail']) && isset($_POST['emailRemetente']) && !empty($_POST['emailRemetente'])){
        $nomeRemetente= ucwords(strtolower($_POST['nomeRemetente']));
        $assuntoEmail=$_POST['assuntoEmail'];
        $emailRemetente=$_POST['emailRemetente'];
        $conteudoEmail=$_POST['conteudoEmail'];

        $emailDestinatario="contato@bistec.com.pt";
        $headersR="From: ".$emailRemetente;
        $headersD="From: ".$emailDestinatario;

        // Corpo do email enviado para a Bistec
        $txtDestinatario="Você recebeu um email de ".$nomeRemetente.
        ".\n\n".
        "Email do Remetende: ".$emailRemetente."\n\n".
        "Conteúdo:\n".$conteudoEmail;

        // Corpo do email enviado para o cliente
        $txtRemetente="Seu e-mail foi recebido com sucesso pela equipe da Bistec, Sr(a) ".$nomeRemetente.
        ".\n\n".
        "Obrigado pelo contato e, caso seja necessário, estaremos entrando em contato assim que possível pelo email: ".$emailRemetente."\n\n\n".
        "Segue o conteúdo que recebemos:\n\n".$conteudoEmail;

        $_SESSION['emailRemetente']=$emailRemetente;
        $_SESSION['nomeRemetente']=$nomeRemetente;

        // Valida envio dos emails
        if(mail($emailDestinatario, $assuntoEmail, $txtDestinatario, $headersR)
            && mail($emailRemetente, "Email entregue: ".$assuntoEmail, $txtRemetente, $headersD)
        ){
            $_SESSION['falha']=false;
            header('location: ./obrigado');
        }
        else{
            $_SESSION['falha']=true;
            header('location: ./falha');
        } 
    }else{
        session_destroy();
        header('location: ../contato');
    }