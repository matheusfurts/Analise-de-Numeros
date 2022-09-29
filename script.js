let listaNumeros = []
let listaNumerosAdicionados = document.getElementById("listaNumerosAdicionados")
let res = document.getElementById("res")

function adicionar() {
    let numero = document.getElementById("numero").value
    
    if (numero < 1 || numero > 100 || numero=="" || listaNumeros.indexOf(numero) !== -1) {
        alert("Digite um valor maior que 1, menor que 100, que você ainda não tenha adicionado")
    } else {
        listaNumeros.push(Number(numero))
        listaNumerosAdicionados.innerHTML += `<option value="${numero}">Valor ${numero} adicionado.</option>`
    }
    
    document.getElementById("numero").value = '';
    document.getElementById("numero").focus();
    res.innerHTML = ''
}

function finalizar() {
    if (listaNumeros.length<1) {
        alert("Precisa cadastrar algum número")
    } else {
        let maior = listaNumeros[0]
        let menor = listaNumeros[0]
        let soma = 0
        
        for (let i = 0;i<listaNumeros.length;i++){
            if (listaNumeros[i]>maior){
                maior = listaNumeros[i]
            }

            if (listaNumeros[i]<menor){
                menor = listaNumeros[i]
            }
            
            soma += listaNumeros[i]
        }
        
        let media = (soma/listaNumeros.length).toFixed(2)

        res.innerHTML = `<p>Ao todo temos ${listaNumeros.length} números cadastrados.</p>
            <p>O maior valor informado foi ${maior}.</p>
            <p>O menor valor informado foi ${menor}.</p>
            <p>Somando todos os valores, temos ${soma}.</p>
            <p>A média dos valores digitados é ${media}.</p>`
    }

    

}