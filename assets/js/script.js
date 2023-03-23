// quantidade * 100

// Manipulação do DOM - Memória do visual no navegador
var inputQuantidade = document.querySelector('#quantidade') //Captura a tag toda com o id específicado;

inputQuantidade.addEventListener("change", atualizarOrcamento)
document.querySelector('#js').addEventListener("change", atualizarOrcamento)
document.querySelector('#layout-sim').addEventListener("change", atualizarOrcamento)
document.querySelector('#layout-nao').addEventListener("change", atualizarOrcamento)
document.querySelector('#prazo').addEventListener("change", atualizarOrcamento)


function atualizarOrcamento(){
    let quantidade = inputQuantidade.value
    let preco = quantidade * 100
    
    let ckxJs = document.querySelector('#js').checked

    if(ckxJs) preco += 1.1

    let layout = document.querySelector('#layout-sim').checked

    if(layout) preco *= 1 + (quantidade * .1)

    let prazo = document.querySelector("#prazo").value
    let labelPrazo = document.querySelector("label[for=prazo]")
    labelPrazo.innerHTML = `Prazo (${prazo} semanas)`
    let taxaUrgencia = 1 - (prazo * .01)
    preco *= taxaUrgencia
    
    let output = document.querySelector('#secao-orcamento form output')
    output.innerHTML = "R$ " + preco.toFixed(2) // Seu conteúdo será igual ao preço;
}

// acréscimo de 10% se tiver JS
// acréscimo de 10% por página de layout
// prazo + 20% por semana