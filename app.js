'use strict'

const translateTest = document.getElementById('translateTeste')
const button = document.getElementById('traduzir')


async function traduzir(translateTest){
    const url = `https://api.mymemory.translated.net/get?q=${translateTest}!&langpair=pt-br|en`
    const response = await fetch(url)
    const translate = await response.json()
    return translate
}

async function mostrarTraducao(){
    const traducao = document.getElementById('mostrar')
    const traduz = await traduzir(translateTest.value)

    traducao.value = traduz.responseData.translatedText
}

button.addEventListener('click', mostrarTraducao)

translateTest.addEventListener('keypress', (event) =>{

    if(event.code === 'Enter'){
        mudarTemaAlice()
    }
})
