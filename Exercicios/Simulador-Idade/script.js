//CHAMAR FUNÇÃO E DECLARAR VARIAVEIS PARA O PROJETO.
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
//APLICAR CONDIÇÕES PARA DIFERENTES SITUAÇÕES.    
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert(' [ERRO] Por favor, verifique os dados e tente novamente!') 
    } else { 
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')   
        if (fsex[0].checked) {
            genero = 'Homem,'
            if (idade >= 0 & idade <= 10) {
                //ciança
                img.setAttribute('src', 'menino.png')
            } else if (idade <= 21) {
                //jovem
                img.setAttribute('src', 'jovem.png')
            } else if (idade <50 ) {
                //adulto
                img.setAttribute('src', 'homem.png')
            } else if (idade > 51) {
                //idoso 
                img.setAttribute('src', 'velho.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher,'
            if (idade >= 0 & idade < 10) {
                //criança
            } else if (idade < 21) {
                //jovem
            } else if (idade < 50) {
                //adulto 
            }  else if (idade > 51) {
                //idoso
            }  
            
        }
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
