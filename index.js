var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")
var setaDireita = window.document.getElementById("seta-direita")

function RolarParaDireita() {
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    setaEsquerda.style = "display:flex; margin-top:55px"
    setaDireita.style = "display:none"
}

function RolarParaEsquerda() {
    Bruna.style = "display:none"
    Leonardo.style = "display:flex"
    setaEsquerda.style = "display:none"
    setaDireita.style = "display:flex ; margin-top:55px"
}