'use strict'

const temas = {
    claro: {
        background: 'white',
        text: 'black',
    },
    escuro: {
        background: 'rgb(54,54,54)',
        text: 'white'
    }
};

const html = document.getElementsByTagName('html')

//função para selecionar o tema para aplicar.
function setTema(newTema) {
    const coresTema = temas[newTema];
    Object.keys(coresTema).map(function(key) {
        html[0].style.setProperty(`--${key}`, coresTema[key]);
    });
    localStorage.setItem('tema', newTema);
}

const modoEscuro = document.getElementById('tema')
modoEscuro.addEventListener('change', function({target}) {
    setTema(target.checked ? 'escuro' : 'claro');
    if(localStorage.getItem('tema') == 'escuro'){
        modoEscuro.previousElementSibling.children[0].src = './img/sol.png'
    }else{
        modoEscuro.previousElementSibling.children[0].src = './img/lua-e-estrelas.png'
    }
});


const tema = localStorage.getItem('tema');
if( tema ) {
    setTema(tema)
}