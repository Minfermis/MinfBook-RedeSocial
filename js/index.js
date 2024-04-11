document.addEventListener("DOMContentLoaded", function() {
    // SIDEBAR
    const menuItens = document.querySelectorAll('.menu-item');

    // MENSAGENS
    const messagesNotification = document.querySelector('#messages-notification');
    const messages = document.querySelector('.messages');
    const message = messages.querySelectorAll('.message');
    const messageSearch = document.querySelector('#message-search');

    // TEMA
    const theme = document.querySelector('#theme');
    const themeModal = document.querySelector('.customize-theme');
    const fontSizes = document.querySelectorAll('.choose-size span')
    var root = document.querySelector(':root');
    const colorPalette = document.querySelectorAll('.choose-color span');
    const bg1= document.querySelector('.bg-1');
    const bg2= document.querySelector('.bg-2');
    const bg3= document.querySelector('.bg-3');

    // =============SIDEBAR===================

    // CLIQUE DO MOUSE NOS MENU-ITENS NA ÁREA ESQUERDA
    const changeActiveItem = () => {
        menuItens.forEach(item => {
            item.classList.remove('active');
        });
    };

    menuItens.forEach(item => {
        item.addEventListener('click', () => {
            changeActiveItem();
            item.classList.add('active');
            if (item.id !== 'notifications') {
                document.querySelector('.notifications-popup').style.display = 'none';
            } else {
                document.querySelector('.notifications-popup').style.display = 'block';
                document.querySelector('#notifications .notifications-count').style.display = 'none';
            }
        });
    });

    // pesquisas de bate-papo
    function searchMessage() {
        var input, filter, messages, message, text, i;
        input = document.getElementById("message-search");
        filter = input.value.toUpperCase();
        messages = document.querySelectorAll(".right .messages .message");
        messages.forEach(function(message) {
            text = message.querySelector(".message-body h5");
            if (text.innerHTML.toUpperCase().indexOf(filter) > -1) {
                message.style.display = "";
            } else {
                message.style.display = "none";
            }
        });
    }

    // destacar o cartão de mensagens quando o item do menu de mensagens é clicado
    messagesNotification.addEventListener('click', () => {
        messages.style.boxShadow = '0 0 1rem hsla(252, 75%, 60%, 0.8)';
        messagesNotification.querySelector('.notifications-count').style.display = 'none';
        setTimeout(() => {
            messages.style.boxShadow = 'none';
        }, 250);
    });

    messageSearch.addEventListener('input', searchMessage);

    // ===================THEME (MOSTRAR OPÇÃO DE CUSTOMIZAÇÃO)==========================

    // Função para abrir o modal de customização de tema
    function openTheModal() {
        console.log("Abrindo o modal de customização de tema...");
        themeModal.style.display = 'grid';
    }

    // Seleciona o ícone de fechar
    const closeIcon = document.querySelector('.close-icon');

    // Função para fechar o modal de personalização de tema
    const closeThemeModal = () => {
        const themeModal = document.querySelector('.customize-theme');
        themeModal.style.display = 'none';
    }

    const removeActiveState = () => {
        menuItens.forEach(item => {
            item.classList.remove('active');
        });
    }

    // Adiciona um ouvinte de evento de clique ao ícone de fechar
    closeIcon.addEventListener('click', () => {
        closeThemeModal(); // Fecha o modal
        removeActiveState(); // Remove o estado "active" de todos os itens do menu
        document.querySelector('#homeIcon').classList.add('active'); // Adiciona o estado "active" ao item "home"
    });

    // Adiciona um ouvinte de evento de clique ao item de menu "theme"
    theme.addEventListener('click', () => {
        console.log("Clicou no tema...");
        openTheModal();
    });

    //=========================== FONTE =========================================

    // remove active class from apans or font size selectors
    const removeSizeSelector = () => {
        fontSizes.forEach(size => {
            size.classList.remove('active');
        })
    }


    fontSizes.forEach(size => {
        size.addEventListener('click', () => {
            removeSizeSelector();
            let fontSize;
            size.classList.toggle('active');

            if(size.classList.contains('font-size-1')){
                fontSize = '10px';
                root.style.setProperty('----sticky-top-left', '5.4rem');
                root.style.setProperty('----sticky-top-right','5.4rem');
            } else if (size.classList.contains('font-size-2')){
                fontSize = '13px';
                root.style.setProperty('----sticky-top-left', '5.4rem');
                root.style.setProperty('----sticky-top-right','-7rem');
            } else if(size.classList.contains('font-size-3')){
                fontSize = '16px';
                root.style.setProperty('----sticky-top-left', '-2rem');
                root.style.setProperty('----sticky-top-right','-17rem');
            } else if(size.classList.contains('font-size-4')){
                fontSize = '19px';
                root.style.setProperty('----sticky-top-left', '-5rem');
                root.style.setProperty('----sticky-top-right','-25rem');
            } else if(size.classList.contains('font-size-5')){
                fontSize = '22px';
                root.style.setProperty('----sticky-top-left', '-10rem');
                root.style.setProperty('----sticky-top-right','-33rem');
            }

            document.querySelector('html').style.fontSize = fontSize;
        })
    })

    //remove active class from colors
    const changeActiveItemClass = () => {
        colorPalette.forEach(colorPicker => {
            colorPicker.classList.remove('active');
        })
    }

    // change primary colors 
    colorPalette.forEach(color => {
        color.addEventListener('click', () => {
            let primary;
            //remove active class from colors
            changeActiveItemClass();

            if(color.classList.contains('color-1')){
                primaryHue = 252;
            } else if(color.classList.contains('color-2')){
                primaryHue = 52;
            } else if(color.classList.contains('color-3')){
                primaryHue = 352;
            } else if(color.classList.contains('color-4')){
                primaryHue = 152;
            } else if(color.classList.contains('color-5')){
                primaryHue = 202;
            }
            color.classList.add('active');

            root.style.setProperty('--primary-color-hue', primaryHue);
        })
    })


    // ============================= CORES PRINCIPAIS ==================================

    // tema de cores principais
    let lightColorLightness;
    let whiteColorLightness;
    let darkColorLightness;

    // mudanças de cores principais
    const changeBG = () => {
        root.style.setProperty('--light-color-lightness', lightColorLightness);
        root.style.setProperty('--white-color-lightness', whiteColorLightness);
        root.style.setProperty('--dark-color-lightness',darkColorLightness);
    }

    bg1.addEventListener('click', () => {
        darkColorLightness= '17%';
        whiteColorLightness= '100%';
        lightColorLightness = '95%';

        // Adicionar classe ativa
        bg1.classList.add('active');
        // Remover classe ativa dos outros elementos
        bg2.classList.remove('active');
        bg3.classList.remove('active');
        changeBG();
    })

    bg2.addEventListener('click', () => {
        darkColorLightness = '95%';
        whiteColorLightness = '20%';
        lightColorLightness = '15%';

        // Add active classe
        bg2.classList.add('active');
        //remover active da classe
        bg1.classList.remove('active');
        bg3.classList.remove('active');
        changeBG();
    })

    bg3.addEventListener('click', () => {
        darkColorLightness = '95%';
        whiteColorLightness = '10%';
        lightColorLightness = '0%';

        // Add active da classe
        bg3.classList.add('active');
        //remover active da classe
        bg1.classList.remove('active');
        bg2.classList.remove('active');
        changeBG();
    })
   
});

// FIM! 