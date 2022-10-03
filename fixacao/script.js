let valorP = document.getElementById("paragrafo")
console.log(paragrafo.innerHTML);

let novoInput = document.getElementById("texto")

function apertarTecla () {
    let input = document.getElementById("texto")
    console.log(input.value)
}

function apertarBotao () {
    let input = document.getElementById("texto")
    let paragrafo = document.getElementById("paragrafo")
    paragrafo.innerHTML += input.value
}