//Adiciona a tag spam do menu em uma variável
let menu=document.getElementsByClassName('menu-principal')[0]
//Pega o caminho separando o conteudo do atributo 'src' do script
let Caminho = document.getElementsByTagName('script')[0].attributes[0].textContent.split('/')[0]+'/'

//insere conteudo html depois da tag spam de referência
menu.insertAdjacentHTML('afterend',/*html*/`
    <header class="header-bistec" id="#first_section">
        <a href="#first_section" class="logo-bistec">
            <img id="logo_normal" src="${Caminho}assets/images/logo-bistec.png" alt="Logo - Bistec">
            <img id="logo_branca" src="${Caminho}assets/images/logo_bistec_branco.png" alt="Logo Branca - Bistec" >
        </a>
        <ul class="normal-menu">
            <li>
                <a href="${Caminho}index.html" class="normal" >HOME</a>
            </li>
            <li>
                <a href="${Caminho}contato.html" class="normal" >CONTACTO</a>
            </li>
            <li>
                <a href="#" class="normal">PORTEFÓLIO <ion-icon name="chevron-down-outline"></ion-icon></a>
                <ul class="normal-submenu">
                    <li><a href="${Caminho}produtos/automacao.html"><ion-icon name="at-sharp"></ion-icon> BISTEC AUTOMAÇÃO</a></li>
                    <li><a href="${Caminho}produtos/cloud.html"> <ion-icon name="cloud-done-sharp"></ion-icon> BISTEC CLOUD</a></li>
                    <li><a href="${Caminho}produtos/edu.html"> <ion-icon name="pencil-sharp"></ion-icon> BISTEC EDU</a></li>
                    <li><a href="${Caminho}produtos/msp.html"> <ion-icon name="lock-closed"></ion-icon> BISTEC MSP</a></li>
                    <li><a href="${Caminho}produtos/outsourcing.html"> <ion-icon name="settings-sharp"></ion-icon> BISTEC OUTSOURCING</a></li>
                    <li><a href="${Caminho}produtos/renting.html"> <ion-icon name="reload-circle-sharp"></ion-icon> BISTEC RENTING</a></li>
                    <li><a href="${Caminho}produtos/rgpd.html"><ion-icon name="shield-checkmark-sharp"></ion-icon> BISTEC RGPD</a></li>
                    <li><a href="${Caminho}produtos/soft.html"><ion-icon name="disc-sharp"></ion-icon> BISTEC SOFT</a></li>
                    <li><a href="${Caminho}produtos/wifi.html"> <ion-icon name="wifi-sharp"></ion-icon> BISTEC WIFI</a></li>
                </ul>
            </li>
            <li>
                <a href="#">
                    <button class="button">
                        <span class="button_icon"><ion-icon name="cart-outline"></ion-icon></span>
                        <span class="button_text">LOJA</span>
                    </button>
                </a>
            </li>
            <li>
                <a href="${Caminho}suporte.html">
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
//remove a tag spam de referencia
menu.remove()