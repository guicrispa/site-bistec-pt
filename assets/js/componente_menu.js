var menu=document.getElementsByClassName('menu-principal')[0]

menu.insertAdjacentHTML('afterend',/*html*/`
    <header class="header-bistec" id="#first_section">
        <a href="#first_section" class="logo-bistec">
            <img src="assets/images/logo-bistec.png" alt="Logo - Bistec">
        </a>
        <ul class="normal-menu">
            <li>
                <a href="index.html" class="normal" >HOME</a>
            </li>
            <li>
                <a href="#bistec-automaçao" class="normal">PORTFÓLIO <ion-icon name="chevron-down-outline"></ion-icon></a>
                <ul class="normal-submenu">
                    <li><a href="produtos/automacao.html"><ion-icon name="at-sharp"></ion-icon> BISTEC AUTOMAÇÃO</a></li>
                    <li><a href="produtos/cloud.html"> <ion-icon name="cloud-done-sharp"></ion-icon> BISTEC CLOUD</a></li>
                    <li><a href="produtos/edu.html"> <ion-icon name="pencil-sharp"></ion-icon> BISTEC EDU</a></li>
                    <li><a href="produtos/gdpr.html"><ion-icon name="shield-checkmark-sharp"></ion-icon> BISTEC GDPR</a></li>
                    <li><a href="produtos/msp.html"> <ion-icon name="lock-closed"></ion-icon> BISTEC MSP</a></li>
                    <li><a href="produtos/outsourcing.html"> <ion-icon name="settings-sharp"></ion-icon> BISTEC OUTSOURCING</a></li>
                    <li><a href="produtos/renting.html"> <ion-icon name="reload-circle-sharp"></ion-icon> BISTEC RENTING</a></li>
                    <li><a href="produtos/soft.html"><ion-icon name="disc-sharp"></ion-icon> BISTEC SOFT</a></li>
                    <li><a href="produtos/wifi.html"> <ion-icon name="wifi-sharp"></ion-icon> BISTEC WIFI</a></li>
                </ul>
            </li>
            <li>
                <a href="./contato.html" class="normal">CONTATO</a>
            </li>
            <li>
                <a href="#">
                    <div class="button">
                        <span class="button_icon"><ion-icon name="cart-outline"></ion-icon></span>
                        <span class="button_text">LOJA</span>
                    </div>
                </a>
            </li>
            <li>
                <a href="suporte.html">
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
`)
menu.remove()