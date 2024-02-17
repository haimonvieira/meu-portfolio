



function abrirMenu(){
    let cabecalho = document.querySelector('.cabecalho');
    let cabecalhoMenu = document.querySelector('.cabecalho__menu');
    let cabecalhoMenuDestaque = document.querySelector('.cabecalho__menu__destaque');
    let menu = document.querySelector('.menu-inativo');
    let menuBar = document.querySelector('.menu-bar');
    menuBar.style.marginBottom = '10px';

    menu.classList.toggle('menu-ativo');
    cabecalhoMenuDestaque.style.padding = '2%';
    cabecalhoMenuDestaque.style.width = '100%';

    cabecalho.classList.toggle('cabecalho-menu-ativo');

    if(cabecalho.classList.contains("cabecalho-menu-ativo")){
        cabecalhoMenu.style.display = 'flex';
        cabecalhoMenu.style.flexDirection = 'column';
    }else{
        cabecalhoMenu.style.display = 'none'
    }

    //Verificar se o menu está aberto ou fechado e executar as devidas ações
    if (cabecalho.classList.contains('cabecalho-menu-ativo')){
        //Abrindo o Menu
        setTimeout(() => {
            cabecalho.style.alignItems = 'flex-start';
            cabecalho.style.height = '100%';
            cabecalho.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            cabecalho.style.transition = '0.5s';
        }, 1);
        
        //Adicionando o Evento de Fechar Menu ao Botão do Cabecalho
    } else {
        //Fechando o Menu
        cabecalho.style.height = '';
        cabecalho.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
        menuBar.style.marginBottom = '';


    }
}