



function abrirMenu(){
    let cabecalho = document.querySelector('.cabecalho');
    let cabecalhoMenu = document.querySelector('.cabecalho__menu');
    let cabecalhoMenuDestaque = document.querySelector('.cabecalho__menu__destaque');
    let menu = document.querySelector('.menu-inativo');
    let menuBar = document.querySelector('.menu-bar');
    let barra1 = document.querySelector('.menu-ativo .barra-1');
    let barra2 = document.querySelector('.menu-ativo .barra-2');
    let barra3 = document.querySelector('.menu-ativo .barra-3');

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
        }, 100);
        
        //Adicionando o Evento de Fechar Menu ao Botão do Cabecalho
    } else {
        //Fechando o Menu
        cabecalho.style.height = '';
        cabecalho.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
        menuBar.style.marginBottom = '';
        barra1.style.transition = '0.3s';
        barra2.style.transition = '0.3s';
        barra3.style.transition = '0.3s';



    }
}